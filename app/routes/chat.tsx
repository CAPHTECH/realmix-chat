import { MetaFunction } from "@remix-run/node"
import { ChatHeader } from "~/components/chat/ChatHeader"
import { ChatInput } from "~/components/chat/ChatInput"
import { ChatMessage } from "~/components/chat/ChatMessage"
import { useMessages } from "~/hooks/useMessages"
import { useUserId } from "~/hooks/useUserId"

export const meta: MetaFunction = () => {
  return [{ title: "Galileo Design - Chat" }];
};

const Chat = (): JSX.Element => {
  const userId = useUserId();
  const { messages, addMessage } = useMessages(userId);

  const handleSendMessage = (content: string) => {
    addMessage(content);
  };

  return (
    <div className="flex h-screen flex-col bg-white font-inter">
      <ChatHeader />
      <main className="flex flex-1 justify-center overflow-hidden">
        <div className="flex w-full max-w-[960px] flex-col px-4 sm:px-8 md:px-12 lg:px-40">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-[32px] font-bold leading-tight">You</h1>
              {userId && (
                <p className="text-sm font-normal text-gray-500">ID: {userId.slice(0, 8)}</p>
              )}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-4">
            <div className="flex flex-col gap-2 py-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="w-full border-t border-gray-100">
        <div className="mx-auto max-w-[960px] px-4 sm:px-8 md:px-12 lg:px-40 py-4">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat; 
