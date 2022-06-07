const {chromium} = require('playwright');
let browser;
let context;
let page;
describe('tests', async () => {
    it('first test', async function() {
        browser = await chromium.launch({
            headless: false,
            timeout: 5000,
            slowMo: 250,
            args: [
                `--lang=en-GB`,
                '--no-sandbox',
                '--disable-setuid-sandbox',
              ]
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://www.demoblaze.com/');
        await page.waitForTimeout(5000);
        await page.click('#login2');
        await page.waitForTimeout(1000);
        await page.type('#loginusername', 'testuserforqatechnicaltest');
        await page.type('#loginpassword', 'toto');
        await page.click('#logInModal > div > div > div.modal-footer > button.btn.btn-primary');
        await page.waitForTimeout(5000);
        await console.log('Check I am connected : '+ await page.evaluate(el => el.innerHTML, await page.$('#nameofuser')));
        const var1 = await page.$$("#tbodyid .col-lg-4.col-md-6.mb-4");
        await var1[0].click();
        await page.waitForTimeout(2000);
        await console.log(`Check the title is correct (Samsung GALAXY S6): `+await page.evaluate(el => el.innerText, await page.$('#tbodyid > h2')));       
        await browser.close();
    });
    it('second test', async function() {
        browser = await chromium.launch({
            headless: false,
            timeout: 5000,
            slowMo: 250,
            args: [
                `--lang=en-GB`,
                '--no-sandbox',
                '--disable-setuid-sandbox',
              ]
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://www.demoblaze.com/');
        await page.waitForTimeout(2000);
        const var1 = await page.$$("#tbodyid .col-lg-4.col-md-6.mb-4");
        await var1[0].click();
        await page.waitForTimeout(2000);
        await page.click("#tbodyid > div.row > div > a");
        await page.on('dialog', async dialog => {
            await dialog.accept()
        });
        await page.click("#cartur");
        await page.waitForTimeout(2000);
        const var2 = await page.$$("table.table #tbodyid tr.success");
        await console.log("Number of products should be 1: " + var2.length);
        await browser.close();
    });
});