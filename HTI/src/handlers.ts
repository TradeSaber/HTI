import puppeteer from 'puppeteer'
import { Request, Response } from 'express'

export const genHandler = (req: Request, res: Response) => {
    const html = req.body.html
    const width: number = req.body.width
    const height: number = req.body.height

    launch(html, width, height).then((img) => {
        res.end(img)
    })
}

async function launch(html: string, width: number, height: number) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
        width: width,
        height: height,

    })
    await page.setContent(html)
    const screenshot = await page.screenshot({
        omitBackground: true
    })
    await page.close()
    return screenshot
}