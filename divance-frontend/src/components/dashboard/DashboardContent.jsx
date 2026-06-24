import { useEffect, useMemo, useState } from 'react';
import { getDashboardData } from '../../services/dashboardService';
import { getLatestTransactions } from '../../services/transactionService';
import CategoryPieChart from './CategoryPieChart.jsx';
import FinancialChart from './FinancialChart.jsx';
import FloatingActionButton from './FloatingActionButton.jsx';
import SummaryCard from './SummaryCard.jsx';
import TransactionHistory from './TransactionHistory.jsx';

const INITIAL_STATE = {
  dashboard: null,
  transactions: [],
  isLoading: true,
  error: null,
};

function getNumber(...values) {
  const value = values.find((item) => item !== undefined && item !== null);
  return Number(value || 0);
}

function getArray(...values) {
  return values.find((item) => Array.isArray(item)) || [];
}

export default function DashboardContent() {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    async function loadDashboard() {
      try {
        setState((previousState) => ({ ...previousState, isLoading: true, error: null }));

        const [dashboardData, latestTransactions] = await Promise.all([
          getDashboardData(),
          getLatestTransactions(5),
        ]);

        setState({
          dashboard: dashboardData,
          transactions: latestTransactions,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setState({
          dashboard: null,
          transactions: [],
          isLoading: false,
          error: error.message,
        });
      }
    }

    loadDashboard();
  }, []);

  const dashboard = state.dashboard || {};

  const summary = useMemo(() => ({
    saldoAtual: getNumber(dashboard.saldoAtual, dashboard.balance, dashboard.currentBalance),
    totalReceitas: getNumber(dashboard.totalReceitas, dashboard.totalIncome, dashboard.receitas),
    totalDespesas: getNumber(dashboard.totalDespesas, dashboard.totalExpenses, dashboard.despesas),
    economiaMes: getNumber(
      dashboard.economiaMes,
      dashboard.monthSavings,
      dashboard.totalReceitas - dashboard.totalDespesas
    ),
  }), [dashboard]);

  const financialData = getArray(
    dashboard.evolucaoFinanceira,
    dashboard.financialEvolution,
    dashboard.graficoFinanceiro
  );

  const categoryData = getArray(
    dashboard.graficoPorCategoria,
    dashboard.categoryChart,
    dashboard.categorias,
    dashboard.categories
  );

  const transactions = state.transactions.length > 0
    ? state.transactions
    : getArray(dashboard.ultimasTransacoes, dashboard.latestTransactions);

  function handleAddTransaction() {
    alert('Abrir cadastro de nova movimentação.');
  }

  if (state.isLoading) {
    return (
      <div className="dashboard-content">
        <div className="content-header">
          <p className="eyebrow">Dashboard</p>
          <h1>Carregando seus dados financeiros...</h1>
        </div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="dashboard-content">
        <div className="content-header">
          <p className="eyebrow">Dashboard</p>
          <h1>Não foi possível carregar o dashboard.</h1>
          <p className="error-message">{state.error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-content">
      <div className="content-header">
        <p className="eyebrow">Dashboard</p>
        <h1>Bem-vinda, Diva!</h1>
      </div>

      <section className="summary-grid" aria-label="Resumo financeiro">
        <SummaryCard
          title="Saldo Atual"
          value={summary.saldoAtual}
          subtitle="Atualizado hoje"
          icon="▣"
          variant="yellow"
        />
        <SummaryCard
          title="Total de Receitas"
          value={summary.totalReceitas}
          subtitle="Receitas do período"
          icon="$"
          variant="green"
        />
        <SummaryCard
          title="Total de Despesas"
          value={summary.totalDespesas}
          subtitle="Despesas do período"
          icon="↘"
          variant="pink"
        />
        <SummaryCard
          title="Economia do mês"
          value={summary.economiaMes}
          subtitle="Receitas menos despesas"
          icon="◔"
          variant="blue"
        />
      </section>

      <section className="charts-grid">
        <FinancialChart data={financialData} />
        <CategoryPieChart data={categoryData} />
      </section>

      <TransactionHistory transactions={transactions} />

      <FloatingActionButton onClick={handleAddTransaction} />
    </div>
  );
}
