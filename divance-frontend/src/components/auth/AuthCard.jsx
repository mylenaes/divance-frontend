import Logo from "../../assets/Divance.svg";

export default function AuthCard({ children }) {
  return (
    <div
      className="
        w-full
        max-w-md
        bg-[#1E1E1E]
        rounded-2xl
        shadow-xl
        p-8
      "
    >
      <div className="flex justify-center mb-8">
        <img
          src={Logo}
          alt="Divance"
          className="h-10 object-contain"
        />
      </div>

      {children}
    </div>
  );
}