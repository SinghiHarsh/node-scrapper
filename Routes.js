// import ScrapeModel from "./scrape"

// const run = async () => {
//     console.log(`Starting Scrape`)
//     return await ScrapeModel.scrape()
// }

// run()
import Express from 'express'
import ScrapeModel from './scrape';

const Router = Express.Router()


Router.get('/health', async function (Request, Response) {
    try {
        return Response.json({msg: "Health Check Successful"})
    } catch (error) {
        console.error(error)
    }
})

Router.post('/scrape', async function (Request, Response) {
    try {
        const { url = '' } = Request
        const data = await ScrapeModel.scrape(url)
        return data
    } catch (error) {
        console.error(error)
    }
})

export default Router