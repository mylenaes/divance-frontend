import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

export default function TransactionForm({
  type,
  onClose,
}) {
  const cofrinhos = [
    { value: "alimentacao", label: "Alimentação" },
    { value: "emergencia", label: "Emergência" },
    { value: "viagem", label: "Viagem" },
    { value: "shopping", label: "Shopping" },
  ];

  return (
    <form className="flex flex-col gap-3">

      <Input
        label="Título:"
        placeholder={
          type === "income"
            ? "Ex: Salário, Achado no bolso..."
            : "Ex: Aluguel, Fatura..."
        }
      />

      <div className="grid grid-cols-2 gap-2">

        <Input
          label="Valor:"
          placeholder="R$ 0,00"
        />

        <Select
          label="Cofrinho (opcional):"
          options={cofrinhos}
        />

      </div>

      <Input
        label={
          type === "income"
            ? "Forma de recebimento (opcional):"
            : "Forma de pagamento (opcional):"
        }
        placeholder="Ex: Pix, Dinheiro..."
      />

      <div>
        <label className="text-white text-sm mb-2 block">
          Observações (opcional):
        </label>

        <textarea
          rows={4}
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

        <Button
          variant="primary"
          type="submit"
          fullWidth
        >
          Salvar
        </Button>

      </div>

    </form>
  );
}