import puppeteer from 'puppeteer'

const BrowseModel = {
    startBrowser
}
export default BrowseModel;

async function startBrowser() {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (error) {
        throw error
    }
    return browser;
}