//card do dashboard

export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-2xl
        shadow-sm
        p-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}