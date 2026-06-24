import { formatCurrency } from '../../utils/formatters';

export default function SummaryCard({ title, value, subtitle, icon, variant = 'yellow' }) {
  return (
    <article className={`summary-card summary-card--${variant}`}>
      <div>
        <p className="summary-card__title">{title}</p>
        <strong className="summary-card__value">{formatCurrency(value)}</strong>
        {subtitle && <span className="summary-card__subtitle">{subtitle}</span>}
      </div>

      <div className="summary-card__icon" aria-hidden="true">
        {icon}
      </div>
    </article>
  );
}
