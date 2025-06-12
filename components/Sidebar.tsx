'use client';
import { contacts } from '../data/dummyMessages';
import { Contact } from '@/types/chat';

export default function Sidebar({ onSelect }: { onSelect: (contact: Contact) => void }) {
    return (
        <div className="h-full overflow-y-auto">
            <div className="p-4 text-lg text-black font-semibold border-b">Chats</div>
            <div>
                {contacts.map((contact) => (
                    <div
                        key={contact.name}
                        className="flex items-start gap-3 p-4 hover:bg-white cursor-pointer"
                        onClick={() => onSelect(contact)}
                    >
                        <div
                            className={`w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center ${contact.colorClass}`}
                        >
                            {contact.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                                <div className="font-bold text-black text-sm truncate">{contact.name}</div>
                                <div className="text-xs text-gray-400 whitespace-nowrap ml-2">
                                    {contact.time}
                                </div>
                            </div>
                            <div className="text-xs mr-8 text-gray-500 truncate">{contact.lastMessage}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
