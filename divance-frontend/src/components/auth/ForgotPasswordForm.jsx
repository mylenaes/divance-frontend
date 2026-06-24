import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../common/Input";
import Button from "../common/Button";

export default function ForgotPasswordForm({ onSubmit }) {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.({ email });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-white text-sm text-center -mt-2 mb-2">
        Informe seu email e enviaremos um link para redefinir sua senha.
      </p>

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
      >
        Recuperar senha
      </Button>

      <p className="text-center text-white text-sm">
        Lembrou sua senha?{" "}
        <Link to="/" className="font-bold hover:underline">
          Faça login
        </Link>
      </p>
    </form>
  );
}