const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const {JSDOM} = require('jsdom');
const root = require('node:path').join(__dirname, '..');
const read = name => fs.readFileSync(require('node:path').join(root, name), 'utf8');
const settle = () => new Promise(resolve => setImmediate(resolve));
function page(name, search='') {
  // No external resource loader: real forms, fonts and beacons are never requested.
  const dom = new JSDOM(read(name), {url: 'https://nuranihomes.com/'+name+search, runScripts:'outside-only'});
  dom.window.eval(read('lang.js'));
  const requests=[];
  dom.window.fetch=async (...args)=>{requests.push(args);return {type:'opaque',ok:false,status:0};};
  dom.window.eval(read('form-endpoint.js'));
  if (name==='buyers.html'||name==='partners.html') dom.window.eval(read('forms.js'));
  return {dom,w:dom.window,d:dom.window.document,requests};
}
function fill(p,values){
  for(const [key,value] of Object.entries(values)){
    const input=p.d.querySelector(`[name="${key}"]`);
    if(input.type==='radio'){
      const selected=[...p.d.querySelectorAll(`[name="${key}"]`)].find(i=>i.value===value);
      selected.checked=true;selected.dispatchEvent(new p.w.Event('change',{bubbles:true}));
    }else if(input.type==='checkbox')input.checked=value;
    else input.value=value;
  }
}
const buyer={whatsapp:'+971 50 000 0000',country:'UAE',job:'Engineer',interest:'3',consent:true};
const partner={name:'Test only',email:'test@example.invalid',phone:'+971 50 000 0000',partner_type:'Other',consent:true};
function submit(p){p.d.querySelector('form').dispatchEvent(new p.w.Event('submit',{bubbles:true,cancelable:true}));}
for (const name of ['index.html','buyers.html','partners.html','privacy.html','thank-you.html']) {
  test(name+': static content and English/Urdu toggle',()=>{
    const p=page(name);
    assert.equal(p.d.querySelectorAll('h1').length,1);
    assert.ok(p.d.querySelector('main').textContent.trim());
    p.d.querySelector('[data-lang="ur"]').click();
    assert.equal(p.d.documentElement.lang,'ur');assert.equal(p.d.documentElement.dir,'rtl');
    assert.equal(p.d.querySelector('.skip-link').textContent,'مرکزی مواد پر جائیں');
    p.d.querySelector('[data-lang="en"]').click();
    assert.equal(p.d.documentElement.lang,'en');p.dom.window.close();
  });
}
for(const [name,valid] of [['buyers.html',buyer],['partners.html',partner]]){
  test(name+': missing fields stop requests and focus the first error',async()=>{
    const p=page(name);submit(p);await settle();assert.equal(p.requests.length,0);
    assert.equal(p.d.activeElement.getAttribute('aria-invalid'),'true');
    assert.equal(p.d.querySelector('.err').hidden,false);p.w.close();
  });
  test(name+': opaque responses never claim delivery or resend on double click',async()=>{
    const p=page(name,'?src=test-source');fill(p,valid);submit(p);submit(p);await settle();submit(p);
    assert.equal(p.requests.length,1);assert.equal(p.w.location.pathname,'/'+name);
    assert.match(p.d.querySelector('.err').textContent,/could not confirm receipt/);
    assert.equal(p.d.querySelector('[type=submit]').disabled,true);
    assert.equal(p.requests[0][1].body.get('source'),'test-source');
    assert.equal(p.requests[0][1].body.has('company_website'),false);p.w.close();
  });
  test(name+': honeypot prevents any request',async()=>{
    const p=page(name);fill(p,{...valid,company_website:'spam'});submit(p);await settle();
    assert.equal(p.requests.length,0);assert.equal(p.w.location.pathname,'/'+name);p.w.close();
  });
  test(name+': invalid telephone and absent consent cannot submit',async()=>{
    const p=page(name);fill(p,{...valid,[name==='buyers.html'?'whatsapp':'phone']:'-------'});submit(p);await settle();assert.equal(p.requests.length,0);
    fill(p,{...valid,consent:false});submit(p);await settle();assert.equal(p.requests.length,0);p.w.close();
  });
}
test('email format is checked and hidden partner answers are not transmitted',async()=>{
  const p=page('partners.html');fill(p,{...partner,email:'not-an-email'});submit(p);await settle();assert.equal(p.requests.length,0);
  fill(p,{...partner,partner_type:'Developer or builder',dev_current_projects:'STALE TEST DATA'});
  fill(p,{partner_type:'Other'});submit(p);await settle();assert.equal(p.requests.length,1);
  assert.equal(p.requests[0][1].body.has('dev_current_projects'),false);p.w.close();
});
test('network errors and timeouts remain unconfirmed and release loading state',async()=>{
  for(const timeout of [false,true]){
    const p=page('buyers.html');fill(p,buyer);
    if(timeout){
      p.w.setTimeout=(fn)=>{queueMicrotask(fn);return 1;};
      p.w.fetch=(_,opts)=>new Promise((resolve,reject)=>opts.signal.addEventListener('abort',()=>reject(new Error('timeout'))));
    }else p.w.fetch=async()=>{throw new Error('network');};
    submit(p);await settle();assert.equal(p.d.querySelector('form').hasAttribute('aria-busy'),false);
    assert.match(p.d.querySelector('.err').textContent,/could not confirm receipt/);assert.equal(p.w.location.pathname,'/buyers.html');p.w.close();
  }
});
test('missing or unexpected endpoint is never contacted',async()=>{
  for(const endpoint of ['', 'https://example.invalid/collect']){
    const p=page('buyers.html');p.w.NH_FORM_ENDPOINT=endpoint;fill(p,buyer);submit(p);await settle();
    assert.equal(p.requests.length,0);assert.match(p.d.querySelector('.err').textContent,/not connected/);p.w.close();
  }
});
test('repeated checkboxes retain every selected answer and source is bounded',async()=>{
  const p=page('buyers.html','?utm_source='+'x'.repeat(200));fill(p,buyer);
  p.d.querySelectorAll('[name=worries]')[0].checked=true;p.d.querySelectorAll('[name=worries]')[1].checked=true;
  submit(p);await settle();assert.equal(p.requests[0][1].body.getAll('worries').length,2);
  assert.equal(p.requests[0][1].body.get('source').length,60);p.w.close();
});
