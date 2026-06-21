export default function Button({
  children,
  variant = "primary",
  type = "button",
  fullWidth = false,
}) {
  const variants = {
    primary:
      "bg-[#FF88CA] border-1 border-[#BD5890] text-white hover:opacity-90",

    secondary:
      "bg-[#1E1E1E] border-1 border-white text-white hover:opacity-90",

    success:
     "bg-[#BBCC88] border-1 border-[#9DAE66] text-[#2C3E1F] hover:opacity-90",

    danger:
      "bg-[#F55555] border-1 border-[#9E1E1E] text-white hover:opacity-90",
  };

  return (
    <button
      type={type}
      className={`
        px-3 py-1.5
        text-sm
        rounded-lg
        regular
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