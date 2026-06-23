import { useState } from "react";

import Modal from "../common/Modal";
import TransactionTypeToggle from "./TransactionTypeToggle";
import TransactionForm from "./TransactionForm";

export default function TransactionModal({
  isOpen,
  onClose,
}) {
  const [type, setType] = useState("income");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <TransactionTypeToggle
        value={type}
        onChange={setType}
      />

      <TransactionForm
        type={type}
        onClose={onClose}
      />
    </Modal>
  );
}