export default function AuthLayout({ children }) {
  return (
    <div
      className="
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        p-6
        bg-gradient-to-br
        from-[#F783C7]
        via-[#E8A87C]
        to-[#C7D98B]
      "
    >
      {children}
    </div>
  );
}