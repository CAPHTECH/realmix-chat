export type Message = {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  createdAt: string;
  isOwn: boolean;
};
