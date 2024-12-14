import styles from "./button.module.css";

type Props = {
  label: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  backgroundColor?: "primary" | "sucess" | "danger";
};

const Button: React.FC<Props> = ({
  onClick,
  label,
  size = "sm",
  backgroundColor = "primary",
  ...props
}: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[`size-${size}`]} ${
        styles[`color-${backgroundColor}`]
      }`}
      type="button"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;
