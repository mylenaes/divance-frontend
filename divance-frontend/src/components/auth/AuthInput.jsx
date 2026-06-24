export default function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="mb-4">
      <label className="text-white text-sm mb-2 block">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          px-3
          py-2
          rounded-md
          bg-[#5B5752]
          text-white
          placeholder-gray-300
          outline-none
          focus:ring-2
          focus:ring-[#F783C7]
        "
      />
    </div>
  );
}