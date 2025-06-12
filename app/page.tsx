'use client';

import { useState } from 'react';
import ChatHeader from '../components/ChatHeader';
import Sidebar from '../components/Sidebar';
import ChatInput from '../components/ChatInput';
import ChatWindow from '../components/ChatWindow';
import { Message, Contact } from '@/types/chat';
import Topbar from '@/components/Topbar';

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showChat, setShowChat] = useState(false);

  const handleSend = (msg: string) => {
    setMessages(prev => [...prev, { text: msg, from: 'user' }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: 'Bot reply to: ' + msg, from: 'bot' }]);
    }, 500);
  };

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    setShowChat(true);
  };

  const handleBack = () => {
    setSelectedContact(null);
    setShowChat(false);
  };

  return (
    <div className="h-screen flex flex-col bg-white text-black">
      <Topbar />
      <div className="flex flex-1 overflow-hidden pt-14">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-72 border-r bg-gray-100">
          <Sidebar onSelect={handleSelectContact} />
        </div>

        {/* Mobile */}
        <div className="flex-1 flex flex-col md:hidden">
          {!showChat ? (
            <Sidebar onSelect={handleSelectContact} />
          ) : selectedContact ? (
            <>
              <ChatHeader
                name={selectedContact.name}
                initials={selectedContact.initials}
                colorClass={selectedContact.colorClass}
                onBack={handleBack}
              />
              <div className="flex-1 overflow-y-auto">
                <ChatWindow messages={messages} />
              </div>
              <ChatInput onSend={handleSend} />
            </>
          ) : null}
        </div>

        {/* Desktop chat area */}
        <main className="hidden md:flex flex-1 flex-col">
          {selectedContact ? (
            <>
              <ChatHeader
                name={selectedContact.name}
                initials={selectedContact.initials}
                colorClass={selectedContact.colorClass}
              />
              <div className="flex-1 overflow-y-auto">
                <ChatWindow messages={messages} />
              </div>
              <ChatInput onSend={handleSend} />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500 text-xl p-4">
              Select a contact to start chatting
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
