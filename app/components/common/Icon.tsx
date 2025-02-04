import type { ReactNode } from "react";

type IconProps = {
  children: ReactNode;
};

export const Icon = ({ children }: IconProps): JSX.Element => (
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
