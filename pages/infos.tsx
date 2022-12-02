import { ChatMessage } from "@custom-types/chat";
import { chatSvg, infos } from "@utils/index";
import Chat from "components/Chat";
import Modal from "components/Modal";
import { useCallback, useState } from "react";

export default function Infos() {
    const [selectedInfo, setInfos] = useState({
        title: "",
        svg: '',
        description: ''
    });

    const [showModal, setShowModal] = useState(false);

    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const sendMessage = useCallback(async (message: string) => {
        setMessages((msgs) => [...msgs, {
            content: message,
            isBot: false
        }]);

        const response = await fetch('/api/Aibot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: message
            })
        });

        const msgData = await response.json();

        setMessages((msgs) => [...msgs, {
            content: msgData.result,
            isBot: true
        }]);

    }, []);


    const handleInfo = (info: any) => {
        setInfos(info);
        setShowModal(true);
    }

    return (
        <div className="container mx-auto">
            <Modal setShowModal={setShowModal} showModal={showModal}>
                <div className="flex flex-col items-center item w-1/2 bg-white">
                    <span className="px-4 mt-4 text-gray-900 font-extralight cursor-pointer border-b border-gray-700" onClick={() => setShowModal(false)}>X Ferme</span>
                    <div className="m-4">
                        <div className="mb-8">
                            <span className="text-light-red text-center" dangerouslySetInnerHTML={{ __html: selectedInfo.svg }}></span>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-xl font-bold text-black">{selectedInfo.title}</h4>
                        </div>
                        <p className="text-gray-800 font-light">{selectedInfo.description}</p>
                    </div>
                </div>
            </Modal>

            <Modal setShowModal={setShowChat} showModal={showChat}>
                <div className="flex flex-col items-center item w-1/2 h-screen bg-white">
                    <span className="px-4 mt-4 text-gray-900 font-extralight cursor-pointer border-b border-gray-700" onClick={() => setShowChat(false)}>X Ferme</span>
                    <Chat
                        messages={messages}
                        onSend={sendMessage}
                    />
                </div>
            </Modal>
            <div className="min-h-screen m-4 lg:mt-24 lg:mr-8">
                <span className="font-bold text-xl mb-8 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512" className="fill-current stroke-current inline-block text-light-red">
                        <polyline points="196 220 260 220 260 392" style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '40px' }} />
                        <line x1={187} y1={396} x2={325} y2={396} style={{ fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '40px' }} />
                        <path d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" />
                    </svg><span className="font-extralight">Questions fréquentes sur le VIH / SIDA</span>
                </span>

                <div className="flex flex-col lg:flex-row flex-wrap mt-14">
                    {
                        infos.map((info, index) => (
                            <div key={index} onClick={() => handleInfo(info)} className="w-full lg:w-1/4 m-2">
                                <div className="m-1 shad cursor-pointer rounded-lg bg-white">
                                    <div className="content p-4 rounded-t-lg bg-white">
                                        <span className="text-bloody-red"
                                            dangerouslySetInnerHTML={{ __html: info.svg }} />

                                    </div>
                                </div>
                                <div className="footer transition p-4 rounded-b-lg text-dark-red bg-gray-200 hover:bg-light-red hover:text-white hover:cursor-pointer">
                                    <h4 className="text-xl font-light">{info.title}</h4>
                                </div>
                            </div>
                        ))
                    }

                    <div className="w-full lg:w-1/4 m-2" onClick={() => setShowChat(true)}>
                        <div className="m-1 shad cursor-pointer rounded-lg bg-white">
                            <div className="content p-4 rounded-t-lg bg-white">
                                <span className="text-bloody-red"
                                    dangerouslySetInnerHTML={{ __html: chatSvg }} />

                            </div>
                        </div>
                        <div className="footer transition p-4 rounded-b-lg bg-gray-200 hover:bg-light-red hover:text-white">
                            <h4 className="text-xl font-light">{`Plus d'info ?`}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}