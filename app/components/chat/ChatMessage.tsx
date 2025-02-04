import type { Message } from "~/types/message"

type Props = {
  message: Message;
};

export const ChatMessage = ({ message }: Props): JSX.Element => {
  const { content, sender, isOwn } = message;

  return (
    <div className={`flex gap-3 px-4 py-2 ${isOwn ? "flex-row-reverse" : ""}`}>
      <div className="flex-shrink-0">
        {sender.avatarUrl ? (
          <img
            src={sender.avatarUrl}
            alt={sender.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
            {sender.name?.[0] || "?"}
          </div>
        )}
      </div>
      <div className={`flex max-w-[70%] flex-col gap-1 ${isOwn ? "items-end" : ""}`}>
        <p className="text-sm font-medium text-gray-900">{sender.name}</p>
        <div
          className={`rounded-2xl px-4 py-2 ${
            isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
}; 
