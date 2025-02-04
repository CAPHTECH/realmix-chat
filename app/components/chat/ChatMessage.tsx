import type { Message } from "~/types/message"
import { getChatMessageStyles } from "~/utils/styleHelpers"

type Props = {
  message: Message;
};

export const ChatMessage = ({ message }: Props): JSX.Element => {
  const { content, sender, isOwn, createdAt } = message;
  const styles = getChatMessageStyles(isOwn);

  return (
    <div className={styles.container}>
      <div className="flex-shrink-0">
        {sender.avatarUrl ? (
          <img
            src={sender.avatarUrl}
            alt={sender.name}
            className="chat-avatar"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
            {sender.name?.[0] || "?"}
          </div>
        )}
      </div>
      <div className={styles.contentWrapper}>
        <div className={`flex items-center gap-2 ${isOwn ? "flex-row-reverse" : ""}`}>
          <p className="text-sm font-medium text-gray-900">{sender.name}</p>
          <span className="text-xs text-gray-500">{createdAt}</span>
        </div>
        <div className={styles.bubble}>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
}; 
