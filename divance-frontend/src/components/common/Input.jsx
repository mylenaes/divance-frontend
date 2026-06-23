export default function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="w-full flex flex-col gap-2">

      {label && (
        <label className="text-sm font-medium text-white">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          px-3
          py-2
          rounded-md
          bg-[#5B5752]
          text-white
          placeholder:text-gray-300
          border
          outline-none
          ${
            error
              ? "border-red-500"
              : "border-transparent"
          }
          ${className}
        `}
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}

    </div>
  );
}