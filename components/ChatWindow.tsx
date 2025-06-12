import ChatMessage from './ChatMessage';
import { Message } from '@/types/chat';

export default function ChatWindow({ messages }: { messages: Message[] }) {
    return (
        <div className="flex-1 text-black overflow-y-auto p-4 mt-16">
            {messages.map((msg, i) => {
                // Remove 'bot reply to:' if it exists in the text
                const cleanedText = msg.text.replace(/^bot reply to:\s*/i, '');

                return (
                    <ChatMessage
                        key={i}
                        text={cleanedText}
                        from={msg.from}
                    />
                );
            })}
        </div>
    );
}
