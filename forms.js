/* The existing Apps Script endpoint provides no readable receipt. Never infer a save. */
(function () {
  'use strict';
  var form = document.getElementById('interest');
  if (!form) return;
  var button = form.querySelector('.submit');
  var status = form.querySelector('.err');
  var state = 'idle';
  var messages = {
    en: {
      submit: 'Register my interest', sending: 'Sending…',
      invalid: 'Please check the highlighted fields. Enter a valid email if provided and a WhatsApp number with country code.',
      unavailable: 'The form is currently unavailable. Please email us at ',
      unconfirmed: 'We could not confirm receipt of your enquiry. Please contact us before submitting again: '
    },
    ur: {
      submit: 'میری دلچسپی درج کریں', sending: 'بھیجا جا رہا ہے…',
      invalid: 'براہ کرم نمایاں کردہ خانے درست کریں۔ اگر ای میل درج کریں تو درست ای میل دیں، اور واٹس ایپ نمبر ملک کے کوڈ کے ساتھ درج کریں۔',
      unavailable: 'فارم فی الحال دستیاب نہیں ہے۔ براہ کرم ہمیں ای میل کریں: ',
      unconfirmed: 'ہم آپ کی درخواست موصول ہونے کی تصدیق نہیں کر سکے۔ دوبارہ بھیجنے سے پہلے ہم سے رابطہ کریں: '
    }
  };
  function render() {
    var text = messages[window.NH_LANG === 'ur' ? 'ur' : 'en'];
    button.textContent = state === 'sending' ? text.sending : text.submit;
    button.disabled = state === 'sending' || state === 'unconfirmed';
    form.setAttribute('aria-busy', String(state === 'sending'));
    status.hidden = !['invalid', 'unavailable', 'unconfirmed'].includes(state);
    status.textContent = text[state] || '';
    if (state === 'unavailable' || state === 'unconfirmed') {
      var link = document.createElement('a');
      link.href = 'mailto:info@nuranihomes.com';
      link.textContent = 'info@nuranihomes.com';
      status.appendChild(link);
    }
  }
  window.addEventListener('nh:languagechange', render);
  form.addEventListener('input', function (event) {
    event.target.removeAttribute('aria-invalid');
  });
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (state === 'sending' || state === 'unconfirmed') return;
    if (form.elements.company_website.value) return;
    var invalid = [];
    Array.from(form.elements).forEach(function (field) {
      if (!field.willValidate) return;
      var valid = field.checkValidity() && (!field.required || field.value.trim().length > 0);
      if (field.name === 'whatsapp') {
        // Accept familiar separators, but require a plausible international number.
        valid = valid && /^\+?[\d\s().-]+$/.test(field.value.trim()) &&
          /^[1-9]\d{6,14}$/.test(field.value.replace(/\D/g, ''));
      }
      field.toggleAttribute('aria-invalid', !valid);
      if (!valid) { field.setAttribute('aria-invalid', 'true'); invalid.push(field); }
    });
    if (invalid.length) {
      state = 'invalid'; render(); invalid[0].focus(); return;
    }
    var url;
    try {
      url = new URL(window.NH_FORM_ENDPOINT);
      if (url.protocol !== 'https:' || url.hostname !== 'script.google.com' ||
          !/^\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url.pathname) ||
          url.username || url.password || url.port || url.search || url.hash) throw new Error('Unsupported endpoint');
    } catch (_) {
      state = 'unavailable'; render(); return;
    }
    var data = new URLSearchParams();
    new FormData(form).forEach(function (value, key) {
      if (key !== 'company_website') data.append(key, String(value).trim());
    });
    state = 'sending'; render();
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 15000);
    try {
      await fetch(url.href, { method: 'POST', mode: 'no-cors', credentials: 'omit', body: data, signal: controller.signal });
    } catch (_) {
      // An error or timeout also cannot tell us whether the backend saved the lead.
    } finally {
      clearTimeout(timeout);
      state = 'unconfirmed'; render();
    }
  });
})();
