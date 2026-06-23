export default function Select({
  label,
  value,
  onChange,
  options = [],
  error,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">

      {label && (
        <label className="text-sm font-medium text-white">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        className={`
          w-full
          px-3
          py-2
          rounded-md
          bg-[#5B5752]
          text-white
          border
          outline-none
          ${
            error
              ? "border-red-500"
              : "border-transparent"
          }
        `}
      >
        <option value="">
          Nenhum
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}

    </div>
  );
}