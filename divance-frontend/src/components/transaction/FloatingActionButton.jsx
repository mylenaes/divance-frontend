export default function FloatingActionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-8
        right-8
        w-14
        h-14
        rounded-full
        bg-[#1E1E1E]
        text-white
        text-3xl
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-105
        transition-all
        duration-200
        z-40
      "
    >
      +
    </button>
  );
}