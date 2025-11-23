import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`py-2 px-4 font-semibold rounded ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
