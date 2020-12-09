
const puppeteer = require('puppeteer');

(async () => {
	let targetUrl = 'https://prefeitura.pbh.gov.br/';
    
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    
    await page.goto(targetUrl, {waitUntil: 'networkkidle2'});
	let data = await page.evaluate(() => {
    
    	let pub_date = document.querySelector("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(1) > font > font").innerText
    	let bid_date = document.querySelector("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19) > font > font").innerText
    	let object = document.querySelector("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > p:nth-child(6) > font > font").innerText
    	let links = document.querySelector("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-field-historico-da-licitacao > div > table > tbody > tr > td:nth-child(2) > div > div > div > a").href
   		
        return {
        	pub_date,
            bid_date,
            object,
            links
            }
            
   });
   
   console.log(data);
   await browser.close();
})();

