import { ChatProps } from "@custom-types/chat";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const BotMessage = ({ content }: { content: string }) => (
    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
        <div>
            <div className="bg-bloody-red text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">{content}</p>
            </div>
        </div>
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
    </div>
)

const HumanMessage = ({ content }: { content: string }) => (
    <div className="flex w-full mt-2 space-x-3 max-w-xs">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
        <div>
            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">{content}</p>
            </div>
        </div>
    </div>
)
export default function Chat({ messages, onSend }: ChatProps) {
    const currentMessage = useRef<string>("");
    const inputMessageRef = useRef<HTMLInputElement>(null);

    const handleSend = () => {
        onSend(currentMessage.current);
        currentMessage.current = "";
        if (inputMessageRef.current) inputMessageRef.current.value = "";
    }

    return (
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                {messages.map((message, index) => (
                    message.isBot ? <BotMessage key={index} content={message.content} /> : <HumanMessage key={index} content={message.content} />
                ))}
            </div>
            <div className="bg-light-red p-4 flex flex-row space-x-2">
                <input ref={inputMessageRef} onChange={(e) => currentMessage.current = e.target.value} className="flex items-center h-10 w-full rounded px-3 text-sm bg-bloody-red text-white" type="text" placeholder="Ecris içi" />
                <button className="p-2 bg-dark-red text-light-red" onClick={() => handleSend()}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    )
}