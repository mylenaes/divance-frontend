import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { formatCurrency } from '../../utils/formatters';

const COLORS = ['#f674c1', '#f6d85c', '#a9c8f4', '#ff5656', '#a7b76a', '#c8a5ff'];

function normalizeCategoryData(data = []) {
  const total = data.reduce((acc, item) => acc + Number(item.value ?? item.valor ?? item.total ?? 0), 0);

  return data.map((item) => {
    const value = Number(item.value ?? item.valor ?? item.total ?? 0);

    return {
      name: item.name || item.nome || item.categoria || 'Categoria',
      value,
      percent: Number(item.percent ?? item.porcentagem ?? (total ? (value / total) * 100 : 0)),
    };
  });
}

export default function CategoryPieChart({ data }) {
  const chartData = normalizeCategoryData(data);

  return (
    <section className="panel category-chart">
      <div className="panel__header">
        <h2>Gráfico por Categoria</h2>
        <select aria-label="Período do gráfico por categoria" defaultValue="month">
          <option value="month">Este mês</option>
          <option value="year">Este ano</option>
        </select>
      </div>

      <div className="category-chart__content">
        <div className="category-chart__graphic">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius="52%"
                outerRadius="82%"
                paddingAngle={0}
              >
                {chartData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value)} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="category-chart__legend">
          {chartData.map((item, index) => (
            <div className="category-chart__legend-row" key={item.name}>
              <span className="category-chart__dot" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <strong>{item.name}</strong>
              <span>{Math.round(item.percent)}%</span>
              <span>{formatCurrency(item.value)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
