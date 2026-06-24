import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { formatCurrency } from '../../utils/formatters';

function normalizeFinancialData(data = []) {
  return data.map((item) => ({
    mes: item.mes || item.month || item.name,
    receitas: Number(item.receitas ?? item.income ?? item.totalReceitas ?? 0),
    despesas: Number(item.despesas ?? item.expenses ?? item.totalDespesas ?? 0),
  }));
}

export default function FinancialChart({ data }) {
  const chartData = normalizeFinancialData(data);

  return (
    <section className="panel financial-chart">
      <div className="panel__header">
        <h2>Evolução financeira</h2>
        <select aria-label="Período do gráfico financeiro" defaultValue="6">
          <option value="6">Últimos 6 meses</option>
          <option value="12">Últimos 12 meses</option>
        </select>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="mes" tickLine={false} axisLine={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `R$ ${value / 1000} mil`}
            />
            <Tooltip formatter={(value) => formatCurrency(value)} />
            <Legend />
            <Line
              type="monotone"
              dataKey="receitas"
              name="Receitas"
              stroke="#b7d85a"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="despesas"
              name="Despesas"
              stroke="#ff73c6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
