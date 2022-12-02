import { getNews } from "@lib/news";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const newsData = await getNews();
        return res.status(200).json(newsData);
    } catch (error) {
        console.error(error);
        res.status(500).end("Cannot fetch data");
    }
}