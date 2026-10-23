// Only mock form delivery. No customer data or test leads reach external services.
const {chromium} = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../dist');
const liveFonts = process.env.NH_BROWSER_LIVE_FONTS === '1';
(async () => {
  const browser = await chromium.launch();
  try {
    fs.mkdirSync(path.resolve(__dirname, '../.local/screenshots'), {recursive: true});
    let checked = 0;
    for (const width of [320,390,768,1440]) {
      const context = await browser.newContext({viewport: {width, height: 900}});
      await context.route('**/*', async route => {
        const request = route.request(), url = new URL(request.url());
        if (liveFonts && request.method() === 'GET' && ['fonts.googleapis.com','fonts.gstatic.com'].includes(url.hostname)) return route.continue();
        if (url.origin !== 'https://nurani.test' || request.method() !== 'GET') return route.abort();
        const file = path.resolve(root, '.' + (url.pathname === '/' ? '/index.html' : url.pathname));
        if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) return route.fulfill({status: 404, body: 'Not found'});
        const types = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.jpg':'image/jpeg','.ico':'image/x-icon','.webmanifest':'application/manifest+json'};
        return route.fulfill({contentType: types[path.extname(file)] || 'text/plain', body: fs.readFileSync(file)});
      });
      for (const name of ['index','privacy','thank-you','saima-shield-towers']) {
        const page = await context.newPage(), errors = [];
        page.on('pageerror', e => errors.push(e.message));
        await page.goto('https://nurani.test/' + name + '.html');
        for (const lang of ['en','ur']) {
          await page.locator(`[data-lang="${lang}"]`).click();
          await page.evaluate(() => document.fonts.ready);
          assert.equal(await page.locator('html').getAttribute('lang'), lang);
          assert.equal(await page.locator('h1').count(), 1);
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth+1), true, `${name}/${width}/${lang} overflow`);
          await page.screenshot({path: path.resolve(__dirname, `../.local/screenshots/launch-${name}-${width}-${lang}.png`), fullPage: true});
          if (['index','saima-shield-towers'].includes(name) && width === 390) {
            await page.locator('header').screenshot({path: path.resolve(__dirname, `../.local/screenshots/launch-header-${lang}.png`)});
            await page.locator('.card').screenshot({path: path.resolve(__dirname, `../.local/screenshots/launch-card-${lang}.png`)});
          }
          checked++;
        }
        if (['index','saima-shield-towers'].includes(name) && width === 390) {
          await page.locator('[data-lang=en]').click();
          const sent = [];
          await page.route('https://script.google.com/**', async route => {
            sent.push(new URLSearchParams(route.request().postData()));
            await route.fulfill({status:200, body:'MOCK ONLY'});
          });
          await page.locator('.submit').click();
          assert.equal(sent.length,0);
          await page.locator('[name=name]').fill('Test Only');
          await page.locator('[name=whatsapp]').fill('+971 50 000 0000');
          await page.locator('[name=country]').selectOption('UAE');
          await page.locator('[name=email]').fill('invalid');
          await page.locator('.submit').click();
          assert.equal(sent.length,0);
          await page.locator('[name=email]').fill('test@example.invalid');
          await page.locator('.submit').click();
          await page.getByText('We could not confirm receipt', {exact:false}).waitFor();
          assert.equal(sent.length,1);
          assert.equal(await page.locator('.submit').isDisabled(),true);
          assert.equal(new URL(page.url()).pathname,'/' + name + '.html');
          await page.locator('[data-lang=ur]').click();
          await page.locator('#form-error').filter({hasText:'تصدیق'}).waitFor();
          await page.screenshot({path:path.resolve(__dirname,'../.local/screenshots/launch-form-result-390-ur.png'),fullPage:true});
        }
        assert.deepEqual(errors, []);
        await page.close();
      }
      if (width === 390) {
        for (const name of ['buyers','partners']) {
          const page = await context.newPage();
          await page.goto(`https://nurani.test/${name}.html?utm_source=mock-test&lang=ur`);
          await page.waitForURL('https://nurani.test/?utm_source=mock-test&lang=ur' + (name === 'buyers' ? '#register' : ''));
          assert.equal(await page.locator('[name=source]').inputValue(), 'mock-test');
          assert.equal(await page.locator('html').getAttribute('lang'), 'ur');
          await page.close();
        }
        const noJS = await browser.newContext({javaScriptEnabled:false,viewport:{width,height:900}});
        const page = await noJS.newPage();
        // Local HTML verifies that core content and links remain available to non-JS readers.
        await page.setContent(fs.readFileSync(path.join(root,'index.html'),'utf8'));
        assert.equal(await page.locator('h1').count(),1);
        assert.equal(await page.locator('#interest').isVisible(),false);
        assert.equal(await page.locator('a[href="mailto:info@nuranihomes.com"]').count() > 0,true);
        await noJS.close();
      }
      await context.close();
    }
    console.log(`PASS: ${checked} page/viewport/language checks, mocked form flow, attribution redirects and static HTML. Fonts: ${liveFonts?'live':'blocked'}.`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
