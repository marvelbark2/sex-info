import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { utilLinks } from '@utils/index'
export default function Links() {
    return (
        <div className="container mx-auto">
            <div className="min-h-screen m-4 lg:mt-16 lg:mx-16">
                {
                    utilLinks.map((section, index) => (
                        <div className='mb-8' key={index}>
                            <h2 className="text-2xl font-semibold mb-12 pb-4 border-b border-bloody-red text-bloody-red">
                                <FontAwesomeIcon className="fill-current inline-block" icon={section.icon} />
                                <span className='m-4'>{section.title}</span>
                            </h2>
                            <div className="flex flex-col lg:flex-row flex-wrap">
                                {
                                    section.links.map((link, jIndex) => (
                                        <div key={jIndex} className="w-full lg:w-1/3">
                                            <div className="shadow text-center mx-2 my-4 rounded-2xl transition bg-white hover:bg-light-red hover:text-white">
                                                <a className="block p-4 font-extralight hover:font-semibold" target="_blank" href={link.href} rel="noreferrer">
                                                    <h2 className="text-lg">{link.label}</h2>
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div >
        </div >
    )
}