import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

export function Button({ icon, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {props.value}
      {icon ? icon : null}
    </button>
  );
}
