import { NewsNode } from "@custom-types/news";

export async function getNews(): Promise<NewsNode[]> {
    const url = `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASLACK_KEY}&keywords=vih sida infections sexuellement transmissibles&sort=published_desc&countries=fr`;
    const fetching = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    });
    const json = await fetching.json();

    return json.data;
}