export type Message = {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  createdAt: Date;
  isOwn: boolean;
};
