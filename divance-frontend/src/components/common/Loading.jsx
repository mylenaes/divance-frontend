export default function Loading({
  text = "Carregando..."
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">

      <div
        className="
          h-8
          w-8
          animate-spin
          rounded-full
          border-4
          border-gray-300
          border-t-blue-600
        "
      />

      <span className="text-sm text-gray-500">
        {text}
      </span>

    </div>
  );
}