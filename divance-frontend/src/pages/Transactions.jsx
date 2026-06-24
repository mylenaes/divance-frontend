import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import FloatingActionButton from "../components/transaction/FloatingActionButton";
import TransactionModal from "../components/transaction/TransactionModal";

export default function Transactions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Salário",
      category: "Receita",
      type: "income",
    },
    {
      id: 2,
      title: "Aluguel",
      category: "Moradia",
      type: "expense",
    },
    {
      id: 3,
      title: "Freela",
      category: "Receita extra",
      type: "income",
    },
    {
      id: 4,
      title: "Mercado",
      category: "Alimentação",
      type: "expense",
    },
  ]);

  function handleOpenModal(transaction = null) {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedTransaction(null);
    setIsModalOpen(false);
  }

  return (
    <DashboardLayout>
      <div className="p-4 space-y-3">
  {transactions.map((t) => (
    <div
      key={t.id}
      onClick={() => handleOpenModal(t)}
      className={`
        p-4
        rounded-lg
        cursor-pointer
        transition
        flex
        items-center
        gap-3
        hover:opacity-90
        ${t.type === "income"
          ? "bg-[#BBCC88]/90"
          : "bg-[#FF88CA]/90"}
      `}
    >
      {/* ÍCONE */}
      <div className="w-10 h-10 flex items-center justify-center">
        {t.type === "income" ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        )}
      </div>

      <div className="text-white">
        <p className="font-semibold">{t.title}</p>
        <p className="text-sm opacity-70">{t.category}</p>
      </div>
    </div>
  ))}
</div>

      <FloatingActionButton onClick={() => handleOpenModal(null)} />

      <TransactionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        transaction={selectedTransaction}
      />
    </DashboardLayout>
  );
}