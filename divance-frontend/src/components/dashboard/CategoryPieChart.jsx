import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

import Card from "../common/Card";

const COLORS = {
  Shopping: "#F673BF",
  Alimentação: "#F6D868",
  Viajar: "#A9C3E8",
  Emergência: "#E8554F",
  Nenhum: "#8CBF6B",
};

export default function CategoryPieChart({ data }) {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <Card className="bg-white">
      <div
        className="
          flex
          items-center
          justify-between
          mb-4
        "
      >
        <h2 className="text-lg font-semibold">Receita por Cofrinhos</h2>
      </div>

      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          gap-4
        "
      >
        <div className="w-full sm:w-1/2 h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius="60%"
                outerRadius="90%"
                paddingAngle={2}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name] || "#ccc"} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="w-full sm:w-1/2 space-y-2">
          {data.map((item) => (
            <li
              key={item.name}
              className="
                flex
                items-center
                justify-between
                text-sm
              "
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: COLORS[item.name] || "#ccc",
                  }}
                />
                {item.name}
              </span>

              <span className="text-gray-500 mr-2">
                {((item.value / total) * 100).toFixed(0)}%
              </span>

              <span className="font-semibold">
                R${" "}
                {item.value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
