import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEYS } from "~/constants/storage";

const isClient = typeof window !== "undefined";

export const useUserId = (): string => {
  // 初期化時にセッションストレージをチェック
  const [userId] = useState(() => {
    if (!isClient) return uuidv4(); // SSRの場合は新しいIDを生成

    try {
      const stored = sessionStorage.getItem(STORAGE_KEYS.USER_ID);
      if (stored) return stored;

      const newId = uuidv4();
      sessionStorage.setItem(STORAGE_KEYS.USER_ID, newId);
      return newId;
    } catch (error) {
      console.warn("セッションストレージにアクセスできません:", error);
      return uuidv4();
    }
  });

  return userId;
};
