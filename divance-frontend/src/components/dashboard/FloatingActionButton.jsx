export default function FloatingActionButton({ onClick }) {
  return (
    <button
      type="button"
      className="floating-action-button"
      aria-label="Adicionar movimentação"
      onClick={onClick}
    >
      +
    </button>
  );
}
