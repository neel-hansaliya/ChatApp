export default function ChatMessage({ message, from }: { message: string; from: "user" | "bot" }) {
    const isUser = from === "user";
    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            <div className={`max-w-[70%] px-4 py-2 text-sm rounded-xl ${isUser ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-900"}`}>
                {message}
                <div className="text-[10px] text-right mt-1 text-white/70">{isUser ? "12:25 PM" : "12:20 PM"}</div>
            </div>
        </div>
    );
}
