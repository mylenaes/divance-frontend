export default function TransactionTypeToggle({
  value,
  onChange,
}) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        type="button"
        onClick={() => onChange("income")}
        className={`
          flex-1
          py-2
          rounded-full
          border
          transition
          ${
            value === "income"
              ? "bg-[#C7D98B] border-[#C7D98B] text-white"
              : "bg-transparent border-white text-white"
          }
        `}
      >
        Receita
      </button>

      <button
        type="button"
        onClick={() => onChange("expense")}
        className={`
          flex-1
          py-2
          rounded-full
          border
          transition
          ${
            value === "expense"
              ? "bg-[#FF5B5B] border-[#FF5B5B] text-white"
              : "bg-transparent border-white text-white"
          }
        `}
      >
        Despesa
      </button>
    </div>
  );
}