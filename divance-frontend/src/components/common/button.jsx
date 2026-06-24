//todos os botoes e as cores deles

export default function Button({
  children,
  variant = "primary",
  type = "button",
  fullWidth = false,
  onClick,
  disabled = false,
}) {
  const variants = {
    primary:
      "bg-[#FF88CA] border border-[#BD5890] text-white hover:opacity-90",

    secondary:
      "bg-[#1E1E1E] border border-white text-white hover:opacity-90",

    success:
      "bg-[#BBCC88] border border-[#9DAE66] text-[#2C3E1F] hover:opacity-90",

    danger:
      "bg-[#F55555] border border-[#9E1E1E] text-white hover:opacity-90",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-3 py-1.5
        text-sm
        rounded-full
        transition
        disabled:opacity-50
        ${fullWidth ? "w-full" : ""}
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}