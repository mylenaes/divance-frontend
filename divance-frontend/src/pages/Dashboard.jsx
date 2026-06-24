import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import SummaryCard from "../components/dashboard/SummaryCard";
import FinancialChart from "../components/dashboard/FinancialChart";
import CategoryPieChart from "../components/dashboard/CategoryPieChart";

import FloatingActionButton from "../components/transaction/FloatingActionButton";
import TransactionModal from "../components/transaction/TransactionModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const financialData = [
    { mes: "Jan", receitas: 4000, despesas: 2000 },
    { mes: "Fev", receitas: 5000, despesas: 2500 },
    { mes: "Mar", receitas: 3500, despesas: 1800 },
    { mes: "Abr", receitas: 6000, despesas: 3000 },
    { mes: "Mai", receitas: 5500, despesas: 2700 },
  ];

  const categoryData = [
    { name: "Shopping", value: 1180.0 },
    { name: "Alimentação", value: 1130.0 },
    { name: "Viajar", value: 210.0 },
    { name: "Emergência", value: 110.0 },
    { name: "Outros", value: 59.9 },
  ];

  return (
    <DashboardLayout>
      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-4
          mb-6
        "
      >
        <SummaryCard
          title="Saldo Atual"
          value="R$ 2.500,00"
          icon="💰"
          color="bg-[#F6D868]"
        />

        <SummaryCard
          title="Receitas"
          value="R$ 4.000,00"
          icon="📈"
          color="bg-[#BFCF88]"
        />

        <SummaryCard
          title="Despesas"
          value="R$ 1.500,00"
          icon="📉"
          color="bg-[#F673BF]"
        />

        <SummaryCard
          title="Economia"
          value="R$ 2.500,00"
          icon="🎯"
          color="bg-[#BCD2F3]"
        />
      </section>

      <section
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-4
        "
      >
        <FinancialChart data={financialData} />

        <CategoryPieChart data={categoryData} />
      </section>

      <FloatingActionButton onClick={() => setIsModalOpen(true)} />

      <TransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DashboardLayout>
  );
}