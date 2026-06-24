import { Menu } from "lucide-react";

export default function Header({
  onMenuClick,
}) {
  return (
    <header
      className="
        h-24
        flex
        items-end
        px-6
        pb-4
      "
    >
      {/* Botão Mobile */}

      <button
        onClick={onMenuClick}
        className="
          lg:hidden
          mr-4
          mb-1
        "
      >
        <Menu size={28} />
      </button>

      {/* Saudação */}

      <h1
        className="
          text-3xl
          font-bold
          text-[#1E1E1E]
        "
      >
        Bem-vinda, Diva!
      </h1>
    </header>
  );
}