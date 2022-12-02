import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const url = `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASLACK_KEY}&keywords=vih sida infections sexuellement transmissibles&sort=published_desc&countries=fr`;
        const fetching = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        });
        const json = await fetching.json();
        return res.status(200).json(json.data);
    } catch (error) {
        console.error(error);
        res.status(500).end("Cannot fetch data");
    }
}