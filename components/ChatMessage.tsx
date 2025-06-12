// components/ChatMessage.tsx
export default function ChatMessage({
    text,
    from,
}: {
    text: string;
    from: "user" | "bot";
}) {
    const isUser = from === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            <div
                className={`max-w-[70%] px-4 py-2 text-sm rounded-xl ${isUser ? "bg-green-300 text-black" : "bg-gray-200 text-gray-900"
                    }`}
            >
                {text}
                <div className="text-[10px] text-right mt-1 text-black/70">
                    {isUser ? "12:25 PM" : "12:20 PM"}
                </div>
            </div>
        </div>
    );
}
