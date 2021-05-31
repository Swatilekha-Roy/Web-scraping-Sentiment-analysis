// fully working
const puppeteer = require('puppeteer');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

var result;

const SentimentData = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);

    await page.goto(
        "https://www.healthline.com/health/list-of-emotions"
    );

    const text = await page.$eval("*", (el) => el.innerText);
    result = sentiment.analyze(text);
    await browser.close();
}

SentimentData();



