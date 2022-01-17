import BrowseModel from "./browser";
import ConstantModel from "./constants";


const ScrapeModel = {
    scrape
}

export default ScrapeModel;

async function scrape() {
    let browser;
    const { URL_CONSTANTS } = ConstantModel
    const url = URL_CONSTANTS.BASE_URL

    try {
        browser = await BrowseModel.startBrowser()
        let page = await browser.newPage()
        await page.goto(url)
        
        let values = await page.evaluate(() => {
            const data = []
            const parent = document.querySelector('.sc-1b0ahtz-0')
            const elements = parent.children
            for (let element of elements)
                data.push(element.textContent);
            return data;
        })
        // Todo: Since the array is restricted to 3 elements not using any looping structure.
        const result = {
            sale_price: values[0],
            msrp: values[1],
            off: values[2],
            onSale: values[2] ? true: false
        }
        console.log(result)
        await browser.close()
        process.exit(0)
    } catch (error) {
        await browser.close()
        throw error
    }
}
