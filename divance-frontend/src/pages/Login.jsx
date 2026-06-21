import Button from "../components/common/Button.jsx";
import Input from "../components/common/Input.jsx";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4">

        <h1 className="text-2xl font-bold text-center">
          Teste de Componentes
        </h1>

        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />

        <Button variant="primary" fullWidth>
          Entrar
        </Button>

        <Button variant="success" fullWidth>
          Receita
        </Button>

        <Button variant="danger" fullWidth>
          Despesa
        </Button>

        <Button variant="secondary" fullWidth>
          Cancelar
        </Button>

      </div>
    </div>
  );
}