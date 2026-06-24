import { useState, useEffect } from "react";

import Modal from "../common/Modal";
import TransactionTypeToggle from "./TransactionTypeToggle";
import TransactionForm from "./TransactionForm";

export default function TransactionModal({
  isOpen,
  onClose,
  transaction,
}) {
  const [type, setType] = useState("income");

  useEffect(() => {
    if (transaction) {
      setType(transaction.type || "income");
    } else {
      setType("income");
    }
  }, [transaction]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TransactionTypeToggle value={type} onChange={setType} />

      <TransactionForm
        type={type}
        onClose={onClose}
        transaction={transaction}
      />
    </Modal>
  );
}