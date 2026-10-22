(function () {
  'use strict';
  var form = document.querySelector('form.nh');
  if (!form) return;
  var message = form.querySelector('.err');
  var button = form.querySelector('button[type="submit"]');
  var pending = false;
  var sent = false;

  function showMessage(key, labels) {
    message.textContent = window.NH_MSG(key, labels);
    message.hidden = false;
  }

  // Retain the existing source field without collecting full URLs or referrers.
  var query = new URLSearchParams(location.search);
  form.elements.source.value = (query.get('src') || query.get('utm_source') || '').slice(0, 60);

  function syncSections() {
    var selected = form.querySelector('[name="partner_type"]:checked');
    form.querySelectorAll('fieldset[data-for]').forEach(function (section) {
      section.hidden = !selected || section.dataset.for !== selected.value;
      // Disabled fieldsets are excluded from FormData, including stale answers.
      section.disabled = section.hidden;
    });
  }
  form.querySelectorAll('[name="partner_type"]').forEach(function (input) {
    input.addEventListener('change', syncSections);
  });
  syncSections();
  button.disabled = false;

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (pending || sent) return;
    message.hidden = true;
    form.querySelectorAll('[aria-invalid]').forEach(function (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
    });
    var invalid = [];
    form.querySelectorAll('input[type=tel]').forEach(function (input) {
      var digits = input.value.replace(/\D/g, '').length;
      input.setCustomValidity(digits >= 7 && digits <= 15 ? '' : 'Enter a valid phone number.');
    });
    form.querySelectorAll('[data-required]').forEach(function (group) {
      var inputs = Array.from(form.querySelectorAll('[name="' + group.dataset.required + '"]'));
      var valid = inputs.some(function (input) {
        if (input.matches(':disabled')) return false;
        if (input.type === 'radio' || input.type === 'checkbox') return input.checked;
        return input.value.trim() && input.validity.valid;
      });
      if (!valid) {
        invalid.push(group.dataset.label);
        inputs.forEach(function (input) {
          input.setAttribute('aria-invalid', 'true');
          input.setAttribute('aria-describedby', 'form-error');
        });
      }
    });
    form.querySelectorAll('input, textarea').forEach(function (input) {
      if (!input.matches(':disabled') && !input.validity.valid && !input.hasAttribute('aria-invalid')) {
        invalid.push(input.name.replaceAll('_', ' '));
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', 'form-error');
      }
    });
    if (invalid.length) {
      showMessage('incomplete', invalid);
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    if (form.elements.company_website.value) return;
    var endpoint = window.NH_FORM_ENDPOINT;
    if (!endpoint) { showMessage('notConnected'); return; }
    // This is the existing public Apps Script destination, not an API credential.
    try {
      var parsed = new URL(endpoint);
      if (parsed.origin !== 'https://script.google.com' || !/^\/macros\/s\/[^/]+\/exec$/.test(parsed.pathname)) throw new Error('Invalid endpoint');
    } catch (_) { showMessage('notConnected'); return; }

    pending = true;
    button.disabled = true;
    button.textContent = window.NH_MSG('sending');
    form.setAttribute('aria-busy', 'true');
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 15000);
    var data = new URLSearchParams();
    new FormData(form).forEach(function (value, key) {
      if (key !== 'company_website') data.append(key, value);
    });
    try {
      await fetch(endpoint, {method: 'POST', mode: 'no-cors', credentials: 'omit', body: data, signal: controller.signal});
      // Opaque responses never prove the backend saved the lead. Do not redirect,
      // emit a conversion or invite an immediate duplicate submission.
      sent = true;
      showMessage('unconfirmed');
    } catch (_) {
      // A lost response or timeout can also occur after the server saves a lead.
      showMessage('unconfirmed');
    } finally {
      clearTimeout(timer);
      pending = false;
      button.disabled = sent;
      button.textContent = window.NH_MSG('submit');
      form.removeAttribute('aria-busy');
    }
  });
})();
