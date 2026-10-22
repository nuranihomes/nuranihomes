const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const {JSDOM} = require('jsdom');
function setup(search = '') {
  const dom = new JSDOM(fs.readFileSync('index.html', 'utf8'), {
    url: 'https://nuranihomes.com/' + search, runScripts: 'dangerously'
  });
  const w = dom.window, calls = [];
  w.NH_FORM_ENDPOINT = 'https://script.google.com/macros/s/TEST_ONLY/exec';
  w.fetch = async (url, options) => { calls.push({url, options}); return {type: 'opaque', status: 0}; };
  w.eval(fs.readFileSync('forms.js', 'utf8'));
  const form = w.document.querySelector('#interest');
  form.elements.name.value = 'Test Only';
  form.elements.whatsapp.value = '+971 50 000 0000';
  form.elements.country.value = 'UAE';
  const submit = () => form.dispatchEvent(new w.Event('submit', {cancelable: true}));
  const settle = () => new Promise(resolve => setImmediate(resolve));
  return {dom, w, form, calls, submit, settle, button: form.querySelector('.submit'), status: form.querySelector('.err')};
}
for (const [field, value] of [['name','   '],['whatsapp','abc'],['whatsapp','123'],['whatsapp','00000000'],['email','invalid'],['country','']]) {
  test(`reject invalid ${field}: ${value}`, () => {
    const c = setup(); try {
      c.form.elements[field].value = value; c.submit();
      assert.equal(c.calls.length, 0);
      assert.equal(c.form.elements[field].getAttribute('aria-invalid'), 'true');
      assert.equal(c.status.hidden, false);
    } finally { c.dom.window.close(); }
  });
}
test('opaque response never confirms receipt; duplicate submits blocked; attribution retained', async () => {
  const c = setup('?utm_source=test-campaign'); try {
    c.submit(); c.submit(); await c.settle(); c.submit();
    assert.equal(c.calls.length, 1);
    assert.equal(c.calls[0].options.body.get('source'), 'test-campaign');
    assert.equal(c.calls[0].options.body.has('company_website'), false);
    assert.equal(c.calls[0].options.credentials, 'omit');
    assert.equal(c.button.disabled, true);
    assert.match(c.status.textContent, /could not confirm receipt/);
    assert.equal(c.w.location.pathname, '/');
    c.w.document.querySelector('[data-lang=ur]').click();
    assert.match(c.status.textContent, /تصدیق/);
    assert.equal(c.button.disabled, true);
    assert.equal(c.status.querySelector('a').href, 'mailto:info@nuranihomes.com');
  } finally { c.dom.window.close(); }
});
test('network failure does not invite a duplicate submission', async () => {
  const c = setup(); try {
    c.w.fetch = async () => { throw new Error('Network failure'); };
    c.submit(); await c.settle();
    assert.match(c.status.textContent, /could not confirm receipt/);
    assert.equal(c.button.disabled, true);
    assert.equal(c.form.getAttribute('aria-busy'), 'false');
  } finally { c.dom.window.close(); }
});
test('timeout aborts and leaves an unconfirmed result', async () => {
  const c = setup(); try {
    c.w.setTimeout = cb => { queueMicrotask(cb); return 1; };
    c.w.fetch = (url, options) => new Promise((resolve, reject) => {
      options.signal.addEventListener('abort', () => reject(new Error('Aborted')));
    });
    c.submit(); await c.settle();
    assert.match(c.status.textContent, /could not confirm receipt/);
    assert.equal(c.button.disabled, true);
  } finally { c.dom.window.close(); }
});
test('missing or unexpected endpoint sends no personal data', () => {
  for (const endpoint of [undefined, 'https://example.invalid/collect', 'https://script.google.com.evil.invalid/macros/s/test/exec', 'http://script.google.com/macros/s/test/exec']) {
    const c = setup(); try {
      c.w.NH_FORM_ENDPOINT = endpoint; c.submit();
      assert.equal(c.calls.length, 0);
      assert.match(c.status.textContent, /currently unavailable/);
    } finally { c.dom.window.close(); }
  }
});
test('honeypot makes no request or success redirect', () => {
  const c = setup(); try {
    c.form.elements.company_website.value = 'bot'; c.submit();
    assert.equal(c.calls.length, 0); assert.equal(c.w.location.pathname, '/');
  } finally { c.dom.window.close(); }
});
