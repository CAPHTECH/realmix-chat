import type { FC } from "react";

type IconProps = {
  children: React.ReactNode;
};

export const Icon: FC<IconProps> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    {children}
  </svg>
); 
