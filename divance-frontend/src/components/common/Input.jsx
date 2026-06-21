export default function Input({
  label,
  error,
  ...props
}) {
  return (
    <div className="w-full flex flex-col gap-2">

      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          px-4
          py-3
          rounded-xl
          border
          outline-none
          focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-blue-200"
          }
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