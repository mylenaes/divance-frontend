export default function Modal({
  isOpen,
  onClose,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/60
        flex
        items-center
        justify-center
        z-50
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-[#1E1E1E]
          rounded-2xl
          border
          border-[#3A3A3A]
          p-4
          w-full
          max-w-[420px]
          shadow-xl
        "
      >
        {children}
      </div>
    </div>
  );
}