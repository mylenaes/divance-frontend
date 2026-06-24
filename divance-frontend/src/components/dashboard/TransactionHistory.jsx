import { formatCurrency, formatDate } from '../../utils/formatters';

function normalizeTransaction(transaction) {
  const type = transaction.type || transaction.tipo || transaction.kind;
  const amount = Number(transaction.amount ?? transaction.valor ?? transaction.value ?? 0);

  return {
    id: transaction.id || transaction._id || `${transaction.description}-${transaction.date}`,
    description: transaction.description || transaction.descricao || transaction.title || 'Movimentação',
    category: transaction.category || transaction.categoria || 'Sem categoria',
    date: transaction.date || transaction.data || transaction.createdAt,
    type,
    amount,
  };
}

export default function TransactionHistory({ transactions = [] }) {
  const normalizedTransactions = transactions.map(normalizeTransaction);

  return (
    <section className="panel transactions-panel">
      <div className="panel__header">
        <h2>Últimas Transações</h2>
        <button type="button" className="link-button">Ver todas</button>
      </div>

      {normalizedTransactions.length === 0 ? (
        <p className="empty-state">Nenhuma movimentação encontrada.</p>
      ) : (
        <div className="transaction-list">
          {normalizedTransactions.map((transaction) => {
            const isIncome = transaction.type === 'income' || transaction.type === 'receita';

            return (
              <article className="transaction-item" key={transaction.id}>
                <div className={`transaction-item__icon ${isIncome ? 'income' : 'expense'}`}>
                  {isIncome ? '↑' : '↓'}
                </div>

                <div className="transaction-item__info">
                  <strong>{transaction.description}</strong>
                  <span>{transaction.category} • {formatDate(transaction.date)}</span>
                </div>

                <strong className={isIncome ? 'transaction-value income' : 'transaction-value expense'}>
                  {isIncome ? '+' : '-'} {formatCurrency(Math.abs(transaction.amount))}
                </strong>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
