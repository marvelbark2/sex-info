export async function getStaticProps() {
    try {
        const fetching = await fetch("/api/news");
        if (fetching.ok) {
            const data = await fetching.json();
            return {
                props: {
                    stringifiedData: JSON.stringify(data),
                }
            }
        }
    } catch (error) {
        throw (error);
    }
}
export default function News({ stringifiedData }: { stringifiedData: string }) {
    const news = JSON.parse(stringifiedData);
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row flex-wrap min-h-screen m-4 lg:mt-16 lg:mx-16">
                <div className="w-full lg:w-1/2"></div>
            </div>
        </div>
    );
}