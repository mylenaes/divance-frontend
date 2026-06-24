import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ArrowLeftRight } from "lucide-react";
import Logo from "../../assets/Divance.svg";

export default function Sidebar({
  isOpen,
  onClose,
}) {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Transações",
      path: "/transactions",
      icon: ArrowLeftRight,
    },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            z-40
            lg:hidden
          "
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed
          top-4
          left-4
          bottom-4
          w-64

          bg-[#1E1E1E]
          rounded-3xl
          shadow-xl

          text-white
          p-5

          z-50

          transform
          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-[120%]"
          }

          lg:translate-x-0
        `}
      >
        {/* Logo */}

        <div className="mb-10">
          <img
            src={Logo}
            alt="Divance"
            className="h-10"
          />
        </div>

        {/* Menu */}

        <nav className="flex flex-col gap-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex
                  items-center
                  gap-3

                  px-4
                  py-3

                  rounded-xl

                  transition-all

                  ${
                    active
                      ? "bg-[#F6D868] text-black"
                      : "hover:bg-[#F6D868] hover:text-black"
                  }
                `}
              >
                <Icon size={18} />

                <span>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}