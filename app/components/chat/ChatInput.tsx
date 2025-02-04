import { useState, type FormEvent } from "react"
import { getChatInputStyles } from "~/utils/styleHelpers"

type Props = {
  onSend: (message: string) => void;
};

export const ChatInput = ({ onSend }: Props): JSX.Element => {
  const [message, setMessage] = useState("");
  const styles = getChatInputStyles();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} aria-label="メッセージ入力フォーム">
      <div className="flex-1">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="メッセージを入力..."
          className={styles.input}
          aria-label="メッセージ入力"
          required
        />
      </div>
      <button
        type="submit"
        disabled={!message.trim()}
        className={styles.button}
        aria-label="メッセージを送信"
      >
        Send
      </button>
    </form>
  );
}; 
