const puppeteer = require('puppeteer');

setInterval(async () => {
    try{
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  });
  const page = await browser.newPage();
  await page.goto('https://google.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'google.pdf', format: 'A4'});

  await browser.close();
 }catch(err){
        console.log(err);
    }
}, 10000);