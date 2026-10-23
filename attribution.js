/* Carry campaign labels between the two enquiry pages. No cookies or network calls. */
(function () {
  'use strict';
  var form = document.querySelector('form#interest');
  var query = new URLSearchParams(location.search);
  var campaign = new URLSearchParams();
  ['src', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach(function (key) {
    var value = query.get(key) || '';
    // Campaign slugs only. Do not carry email addresses, URLs or free-text searches.
    if (/^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,59}$/.test(value)) campaign.set(key, value);
  });
  if (form) {
    var source = campaign.get('src') || campaign.get('utm_source');
    if (source) form.elements.source.value = source;
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach(function (key) {
      if (!campaign.has(key)) return;
      var input = document.createElement('input');
      input.type = 'hidden'; input.name = key; input.value = campaign.get(key);
      form.appendChild(input);
    });
  }
  if (!campaign.toString()) return;
  document.querySelectorAll('a[href]').forEach(function (link) {
    if (link.getAttribute('href').startsWith('#')) return;
    var target = new URL(link.href, location.href);
    if (target.origin !== location.origin || !['/', '/index.html', '/saima-shield-towers.html'].includes(target.pathname)) return;
    campaign.forEach(function (value, key) { target.searchParams.set(key, value); });
    link.href = target.pathname + target.search + target.hash;
  });
})();
