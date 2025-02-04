import { useState, type FormEvent } from "react"

type Props = {
  onSend: (message: string) => void;
};

export const ChatInput = ({ onSend }: Props): JSX.Element => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="メッセージを入力..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={!message.trim()}
        className="rounded-xl bg-blue-500 px-4 text-white transition-colors hover:bg-blue-600 disabled:bg-gray-100 disabled:text-gray-400"
      >
        Send
      </button>
    </form>
  );
}; 
