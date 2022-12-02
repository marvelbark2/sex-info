import Image from "next/image"
export default function Loader() {
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex flex-col m-auto items-center space-y-4">
                <Image src="/assets/loader.png"
                    alt="loading"
                    className="animate-spin"
                    width={200}
                    height={200}
                    priority
                />
                <span className="text-bloody-red font-extrabold text-lg uppercase bg-red-100 px-2 py-1">Utilises un préservatif</span>
            </div>
        </div>
    )
}