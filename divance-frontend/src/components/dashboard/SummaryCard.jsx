import Card from "../common/Card";

export default function SummaryCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <Card
      className={`
        ${color}
        flex
        items-center
        justify-between
        min-h-[120px]
      `}
    >
      <div>
        <p
          className="
            text-sm
            font-semibold
            text-gray-700
          "
        >
          {title}
        </p>

        <h3
          className="
            text-2xl
            font-bold
            mt-2
          "
        >
          {value}
        </h3>
      </div>

      <div
        className="
          w-12
          h-12
          rounded-full
          border
          border-black/40
          flex
          items-center
          justify-center
          text-xl
        "
      >
        {icon}
      </div>
    </Card>
  );
}