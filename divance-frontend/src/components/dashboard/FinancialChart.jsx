import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import Card from "../common/Card";

export default function FinancialChart({
  data,
}) {
  return (
    <Card className="bg-white">
      <h2
        className="
          text-lg
          font-semibold
          mb-4
        "
      >
        Evolução Financeira
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="mes" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="receitas"
              stroke="#BFCF88"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="despesas"
              stroke="#F673BF"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}