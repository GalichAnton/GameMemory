import styles from "./button.module.css";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: "button" | "submit" | "reset";
}

const Button: FC<IProps> = ({ buttonType, children, ...rest }) => {
  return (
    <button type={buttonType || "button"} {...rest}>
      {children || ""}
    </button>
  );
};

export default Button;
