"use client";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function ChatInput({ onSend }: { onSend: (text: string) => void }) {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            onSend(input);
            setInput("");
        }
    };

    return (
        <div className="p-4 flex gap-2 border-t bg-white fixed bottom-0 left-0 right-0 z-10">
            <input
                className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="text-green-300 text-xl">
                <IoSend />
            </button>
        </div>
    );
}
