import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row flex-wrap min-h-screen lg:h-screen content-center items-center">
        <div className="w-full lg:w-1/2">
          <div className="p-2">
            <Image className="mx-autolg:w-auto" src="/assets/sympts.png" width={800}
              height={1200} alt="Corona Girl" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="infos p-8 lg:p-2 text-center lg:text-left">
            <h1 className="font-bold text-3xl lg:text-6xl mb-8 text-gray-700">Coronavirus</h1>
            <p className="text-lg lg:text-xl mb-8 text-yellow font-light tracking-wider">
              {`Les scientifiques affirment que le Coronavirus a besoin en moyenne de 2 à 14 jours pour que les symptômes commencent à apparaître. Cela commence par de la fièvre suivie d'une toux sèche et après environ une semaine, la personne éprouve des difficultés à respirer.`}
            </p>
            <Link className="inline-block text-base lg:text-xl text-white px-10 py-4 rounded bg-bloody-red font-light" href="/stats">Les statistiques en  temps réel.</Link>
          </div >
        </div >
      </div >
    </div >
  )
}
