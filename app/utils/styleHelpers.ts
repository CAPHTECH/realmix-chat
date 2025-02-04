type ChatMessageStyles = {
  container: string;
  contentWrapper: string;
  bubble: string;
};

type ChatInputStyles = {
  form: string;
  input: string;
  button: string;
};

type ChatHeaderStyles = {
  header: string;
  titleContainer: string;
  logo: string;
  title: string;
  actionContainer: string;
  actionButton: string;
};

export const getChatMessageStyles = (isOwn: boolean): ChatMessageStyles => ({
  container: `flex gap-3 px-4 py-2 ${isOwn ? "flex-row-reverse" : ""}`,
  contentWrapper: `flex max-w-[70%] flex-col gap-1 ${isOwn ? "items-end" : ""}`,
  bubble: `rounded-2xl px-4 py-2 ${
    isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
  }`,
});

export const getChatInputStyles = (): ChatInputStyles => ({
  form: "flex gap-2",
  input:
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
  button:
    "rounded-xl bg-blue-500 px-4 text-white transition-colors hover:bg-blue-600 disabled:bg-gray-100 disabled:text-gray-400",
});

export const getChatHeaderStyles = (): ChatHeaderStyles => ({
  header:
    "flex items-center justify-between border-b border-gray-100 px-10 py-3",
  titleContainer: "flex items-center gap-4 text-gray-900",
  logo: "h-8 w-8",
  title: "text-lg font-bold leading-tight tracking-tight",
  actionContainer: "flex gap-2",
  actionButton:
    "flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900",
});
