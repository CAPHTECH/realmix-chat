import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { useCallback, useState } from "react";
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
    createdAt: format(new Date(), "yyyy-MM-dd HH:mm:ss", { locale: ja }),
    isOwn: false,
  },
];

const MAX_MESSAGES = 100;

type UseMessagesReturn = {
  messages: Message[];
  addMessage: (content: string) => void;
  error: string | null;
};

export const useMessages = (userId: string | null): UseMessagesReturn => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [error, setError] = useState<string | null>(null);

  const addMessage = useCallback(
    (content: string): void => {
      if (!userId) {
        setError(
          "ユーザーIDが設定されていません。メッセージを送信できません。"
        );
        return;
      }
      setError(null);

      const newMessage: Message = {
        id: uuidv4(),
        content,
        sender: {
          id: userId,
          name: "You",
        },
        createdAt: format(new Date(), "yyyy-MM-dd HH:mm:ss", { locale: ja }),
        isOwn: true,
      };

      setMessages((prev) => {
        const updatedMessages = [...prev, newMessage];
        return updatedMessages.slice(-MAX_MESSAGES);
      });
    },
    [userId]
  );

  return {
    messages,
    addMessage,
    error,
  };
};
