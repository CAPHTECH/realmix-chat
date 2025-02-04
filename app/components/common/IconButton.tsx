import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

export const IconButton = ({
  icon,
  onClick,
  type = "button",
  disabled = false,
  className = "flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900"
}: Props): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {icon}
    </button>
  );
}; 
