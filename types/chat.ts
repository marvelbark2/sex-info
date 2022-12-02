export interface ChatMessage {
    content: string;
    isBot: boolean;
}
export interface ChatProps {
    messages: ChatMessage[];
    onSend: (message: string) => void;
}