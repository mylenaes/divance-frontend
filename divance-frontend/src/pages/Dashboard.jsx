import DashboardContent from '../components/dashboard/DashboardContent.jsx';

const menuItems = [
  { icon: '⌂', label: 'Dashboard', active: true },
  { icon: '◉', label: 'Cofrinhos' },
  { icon: '◎', label: 'Metas' },
  { icon: '⇄', label: 'Transações' },
  { icon: '$', label: 'Despesas' },
  { icon: '▤', label: 'Educação financeira' },
  { icon: '⚙', label: 'Configurações' },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <h1 className="brand">Divance</h1>

        <nav className="sidebar__nav" aria-label="Menu principal">
          {menuItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`sidebar__item ${item.active ? 'sidebar__item--active' : ''}`}
            >
              <span className="sidebar__icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <DashboardContent />
      </main>
    </div>
  );
}
