import { useEffect, useState } from "react";

export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            const fetching = await fetch("/api/news");
            if (fetching.ok) {
                const data = await fetching.json();
                setNews(data);
            }
        }

        loadNews();
    }, [])
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row flex-wrap min-h-screen m-4 lg:mt-16 lg:mx-16">
                <div className="w-full lg:w-1/2"></div>
            </div>
        </div>
    );
}