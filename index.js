import ScrapeModel from "./scrape"

const run = async () => {
    console.log(`Starting Scrape`)
    return await ScrapeModel.scrape()
}

run()