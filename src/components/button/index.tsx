import React from "react";
import { buttonVariants } from "./styles.css";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={[buttonVariants({ variant }), className].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
