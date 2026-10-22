// Offline browser checks. External services are blocked, including lead delivery.
const {chromium} = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname,'../dist');
(async()=>{
  const browser=await chromium.launch({headless:true});
  try{
    fs.mkdirSync(path.resolve(__dirname,'../.local/screenshots'),{recursive:true});
    for(const width of [320,390,768,1440]){
      const context=await browser.newContext({viewport:{width,height:900}});
      await context.route('**/*',async route=>{
        const request=route.request(),url=new URL(request.url());
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
          assert.equal(await page.locator('html').getAttribute('lang'),lang);
          assert.equal(await page.locator('h1').count(),1);
          assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true,`${pageName} ${width} ${lang}: horizontal overflow`);
          await page.screenshot({path:path.resolve(__dirname,`../.local/screenshots/${pageName}-${width}-${lang}.png`),fullPage:true});
        }
        assert.deepEqual(errors,[]);await page.close();
      }
      await context.close();
    }
    console.log('PASS: 40 page/viewport/language checks. External fonts blocked; live font check remains required.');
  }finally{await browser.close();}
})().catch(error=>{console.error(error.message);process.exitCode=1;});
