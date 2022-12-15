type ButtonProps = {
  variant?: "secondary" | "primary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`flex h-[58px] items-center justify-center rounded-lg font-semibold text-white ${
        variant === "primary" ? "bg-qdark" : "bg-qmid/30 text-qmid"
      }`}
    >
      {children}
    </button>
  );
};
