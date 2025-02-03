import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Message } from "~/types/message";

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    content: "こんにちは！チャットルームへようこそ！",
    sender: {
      id: "system",
      name: "System",
    },
    createdAt: new Date(),
    isOwn: false,
  },
];

export const useMessages = (userId: string | null) => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);

  const addMessage = (content: string) => {
    if (!userId) return;

    const newMessage: Message = {
      id: uuidv4(),
      content,
      sender: {
        id: userId,
        name: "You",
      },
      createdAt: new Date(),
      isOwn: true,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return {
    messages,
    addMessage,
  };
};
