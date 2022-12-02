import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navElement } from "@utils/index";


export default function Sidenav() {
    const router = useRouter();
    return (
        <div className="h-full flex flex-col content-between">
            <ul className="mt-16 text-center">
                {navElement.map((nav, index) => (
                    <li key={index}>
                        <div className={`cursor-pointer mb-8 p-4 text-xl lg:rounded-l-3xl ${router.asPath === nav.slug ? "active text-bloody-red bg-bodyLight" : ""}`}>
                            <Link href={nav.slug} passHref>
                                <FontAwesomeIcon size="lg" icon={nav.icon} />
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}