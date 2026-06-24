import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../common/Input";
import Button from "../common/Button";

export default function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label="Senha"
        type="password"
        name="password"
        placeholder="senha"
        value={formData.password}
        onChange={handleChange}
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
      >
        login
      </Button>

      <p className="text-center text-white text-sm">
        Esqueceu sua senha?{" "}
        <Link to="/forgot-password" className="font-bold hover:underline">
          Recuperar senha
        </Link>
      </p>

      <p className="text-center text-white text-sm">
        Não possui uma conta?{" "}
        <Link to="/register" className="font-bold hover:underline">
          Cadastre-se agora
        </Link>
      </p>
    </form>
  );
}