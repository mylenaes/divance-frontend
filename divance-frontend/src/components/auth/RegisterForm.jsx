import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../common/Input";
import Button from "../common/Button";

export default function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
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
        label="Nome"
        type="text"
        name="name"
        placeholder="nome"
        value={formData.name}
        onChange={handleChange}
      />

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
        Cadastrar
      </Button>

      <p className="text-center text-white text-sm">
        Já possui uma conta?{" "}
        <Link to="/" className="font-bold hover:underline">
          Faça login
        </Link>
      </p>
    </form>
  );
}