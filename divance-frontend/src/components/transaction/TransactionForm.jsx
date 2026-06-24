import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

export default function TransactionForm({
  type,
  onClose,
  transaction,
}) {
  const categories = [
    { value: "alimentacao", label: "Alimentação" },
    { value: "emergencia", label: "Emergência" },
    { value: "viagem", label: "Viagem" },
    { value: "shopping", label: "Shopping" },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (transaction) {
      console.log("EDITANDO:", transaction.id);
    } else {
      console.log("CRIANDO NOVA TRANSAÇÃO");
    }

    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        label="Título:"
        placeholder={
          type === "income"
            ? "Ex: Salário, Achado no bolso..."
            : "Ex: Aluguel, Fatura..."
        }
        defaultValue={transaction?.title || ""}
      />

      <div className="grid grid-cols-2 gap-2">
        <Input
          label="Valor:"
          placeholder="R$ 0,00"
          defaultValue={transaction?.value || ""}
        />

        <Select
          label="Categoria:"
          options={categories}
          defaultValue={transaction?.category || ""}
        />
      </div>

      <Input
        label={
          type === "income"
            ? "Forma de recebimento:"
            : "Forma de pagamento:"
        }
        placeholder="Ex: Pix, Dinheiro..."
      />

      <div>
        <label className="text-white text-sm mb-2 block">
          Observações (opcional):
        </label>

        <textarea
          rows={4}
          defaultValue={transaction?.notes || ""}
          className="
            w-full
            px-3
            py-2
            rounded-md
            bg-[#5B5752]
            text-white
            resize-none
          "
          placeholder="Detalhes sobre esta transação..."
        />
      </div>

      <label className="flex items-center gap-2 text-white text-sm">
        <input type="checkbox" />
        Salvar como recorrente
      </label>

      <div className="flex gap-3 mt-2">
        <Button
          variant="secondary"
          type="button"
          fullWidth
          onClick={onClose}
        >
          Cancelar
        </Button>

        <Button variant="primary" type="submit" fullWidth>
          {transaction ? "Atualizar" : "Salvar"}
        </Button>
      </div>
    </form>
  );
}