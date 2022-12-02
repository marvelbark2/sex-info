import { useEffect, useRef, useState } from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import { twitterAccounts } from "@utils/index"
import styles from "../styles/News.module.css";
import { NewsNode } from '@custom-types/news'

const optionTwitter = {
    chrome: 'noheader nofooter'
}

export default function News() {
    const [news, setNews] = useState<NewsNode[]>([]);
    const twAccounts = useRef<string[]>(twitterAccounts)

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
                <div className="w-full lg:w-1/2">
                    <div className={`relative ${styles.timeline}  ${styles['tm-left']}`}>
                        {
                            news.map((item, index) => (
                                <div key={index} className={`relative px-4 py-2 lg:py-4 lg:px-12 m-0 lg:m-4 widget rounded-lg ${styles['timeline-data']} ${styles['tmdt-left']}`}>
                                    <div className="widget_title text-white p-4 rounded-t-lg bg-light-red">
                                        <h2 className="text-lg font-extralight uppercase">{item.source}</h2>
                                    </div>
                                    <div className="widget-content rounded-b-lg px-8 py-4 overflow-auto shad bg-white">
                                        {
                                            item.image ? (
                                                <div className="mb-4 flex flex-row space-x-4 items-center">
                                                    <div className="basis-1/4">
                                                        <img src={item.image} alt="img" className="rounded" />
                                                    </div>
                                                    <span className="basis-3/4 font-light">{item.title}</span>
                                                </div>
                                            ) : (
                                                <span className="block mb-4 font-light">{item.title}</span>
                                            )
                                        }
                                        {
                                            item.url && (
                                                <a className="inline-block py-2 px-6 transition shadow text-white rounded float-left bg-light-red hover:bg-bloody-red" target="_blank" href={item.url} rel="noreferrer">
                                                    Lire la suite
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div >
                </div>

                <div className="w-full lg:w-1/2">
                    <div className={`relative ${styles.timeline}  ${styles.tweeters}`}>
                        {
                            twAccounts.current.map((twAccount, index) => (
                                <div key={index} className={`relative px-4 py-2 lg:py-4 lg:px-12 m-0 lg:m-4 rounded-lg widget ${styles['tmdt-left']}`}>
                                    <div className="widget_title text-white p-4 rounded-t-lg bg-twitter">
                                        <h2 className="text-lg font-extralight uppercase">{twAccount}</h2>
                                    </div>
                                    <div className="widget-content rounded-b-lg px-8 py-4 overflow-auto shad bg-white">
                                        <TwitterTimelineEmbed id={twAccount} tweetLimit={2} screenName={twAccount} sourceType="profile" options={optionTwitter} />
                                    </div>
                                </div>
                            ))
                        }
                    </div >
                </div>
            </div >
        </div >
    );
}