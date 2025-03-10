import React, { useState } from 'react';
import { Search, Send, Image, Video, Mic } from 'lucide-react';
import type { Message, User } from '../types';

function Messages() {
  const [selectedChat, setSelectedChat] = useState<User | null>(null);
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (!message.trim() || !selectedChat) return;
    
    // TODO: Implement message sending with Supabase
    setMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-7rem)] bg-surface rounded-lg overflow-hidden">
      {/* Chats List */}
      <div className="w-80 border-r border-gray-700">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search chats..."
              className="input w-full pl-10"
            />
            <Search className="absolute left-3 top-3 text-text-secondary" size={20} />
          </div>
        </div>
        
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {/* Sample chat items */}
          {[1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setSelectedChat({ id: `${i}`, username: `user${i}`, full_name: `User ${i}` } as User)}
              className="w-full p-4 flex items-center space-x-3 hover:bg-gray-700 transition-colors"
            >
              <img
                src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces&q=${i}`}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 text-left">
                <p className="font-semibold">User {i}</p>
                <p className="text-text-secondary text-sm truncate">Latest message...</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-700 flex items-center space-x-3">
            <img
              src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces`}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{selectedChat.full_name}</p>
              <p className="text-text-secondary text-sm">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Sample messages */}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="input w-full pr-32"
                />
                <div className="absolute right-2 top-2 flex items-center space-x-2">
                  <button className="p-1 hover:bg-gray-700 rounded-full">
                    <Image size={20} className="text-text-secondary" />
                  </button>
                  <button className="p-1 hover:bg-gray-700 rounded-full">
                    <Video size={20} className="text-text-secondary" />
                  </button>
                  <button className="p-1 hover:bg-gray-700 rounded-full">
                    <Mic size={20} className="text-text-secondary" />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="btn-primary p-2 rounded-full"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-text-secondary">
          Select a chat to start messaging
        </div>
      )}
    </div>
  );
}

export default Messages;