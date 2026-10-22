// Offline browser checks. External services are blocked, including lead delivery.
const {chromium} = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname,'../dist');
const liveFonts = process.env.NH_BROWSER_LIVE_FONTS === '1';
(async()=>{
  const browser=await chromium.launch({headless:true});
  try{
    fs.mkdirSync(path.resolve(__dirname,'../.local/screenshots'),{recursive:true});
    for(const width of [320,390,768,1440]){
      const context=await browser.newContext({viewport:{width,height:900}});
      await context.route('**/*',async route=>{
        const request=route.request(),url=new URL(request.url());
        if(liveFonts && request.method()==='GET' && ['fonts.googleapis.com','fonts.gstatic.com'].includes(url.hostname)) return route.continue();
        if(url.origin!=='https://nurani.test'||request.method()!=='GET')return route.abort();
        const file=path.resolve(root,'.'+(url.pathname==='/'?'/index.html':url.pathname));
        if(!file.startsWith(root+path.sep)||!fs.existsSync(file))return route.fulfill({status:404,body:'Not found'});
        const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.jpg':'image/jpeg','.ico':'image/x-icon','.webmanifest':'application/manifest+json'};
        return route.fulfill({status:200,contentType:types[path.extname(file)]||'text/plain',body:fs.readFileSync(file)});
      });
      for(const pageName of ['index','buyers','partners','privacy','thank-you']){
        const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
        await page.goto('https://nurani.test/'+pageName+'.html');
        for(const lang of ['en','ur']){
          await page.locator(`[data-lang="${lang}"]`).click();
          await page.evaluate(()=>document.fonts.ready);
          assert.equal(await page.locator('html').getAttribute('lang'),lang);
          assert.equal(await page.locator('h1').count(),1);
          assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true,`${pageName} ${width} ${lang}: horizontal overflow`);
          await page.screenshot({path:path.resolve(__dirname,`../.local/screenshots/${pageName}-${width}-${lang}.png`),fullPage:true});
        }
        if(width===390 && ['buyers','partners'].includes(pageName)){
          await page.locator('[data-lang="en"]').click();
          const submissions=[];
          await page.route('https://script.google.com/**',async route=>{
            submissions.push(new URLSearchParams(route.request().postData()));
            await route.fulfill({status:200,body:'Mock response; no lead was sent'});
          });
          await page.locator('button[type="submit"]').click();
          await page.locator('[aria-invalid="true"]').first().waitFor();
          assert.equal(submissions.length,0);
          if(pageName==='buyers'){
            await page.locator('[name="whatsapp"]').fill('+971 50 000 0000');
            for(const name of ['country','job','interest']) await page.locator(`[name="${name}"]`).first().check();
          }else{
            await page.locator('[name="name"]').fill('Test only');
            await page.locator('[name="email"]').fill('test@example.invalid');
            await page.locator('[name="phone"]').fill('+971 50 000 0000');
            await page.locator('[name="partner_type"][value="Developer or builder"]').check();
            await page.locator('[name="dev_current_projects"]').fill('STALE TEST DATA');
            await page.locator('[name="partner_type"][value="Other"]').check();
          }
          await page.locator('[name="consent"]').check();
          await page.locator('button[type="submit"]').click();
          await page.getByText('We could not confirm receipt of your answers.',{exact:false}).waitFor();
          assert.equal(submissions.length,1);
          assert.equal(submissions[0].has('dev_current_projects'),false);
          assert.equal(new URL(page.url()).pathname,'/'+pageName+'.html');
          assert.equal(await page.locator('button[type="submit"]').isDisabled(),true);
        }
        assert.deepEqual(errors,[]);await page.close();
      }
      await context.close();
    }
    console.log('PASS: 40 page/viewport/language checks and 2 mocked form flows. Fonts: '+(liveFonts?'live':'blocked')+'. No real submissions.');
  }finally{await browser.close();}
})().catch(error=>{console.error(error.message);process.exitCode=1;});
