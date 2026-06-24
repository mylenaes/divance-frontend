import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import RegisterForm from "../components/auth/RegisterForm";
import { register } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  async function handleRegister(formData) {
    try {
      await register(formData);
      
      alert("Usuário cadastrado com sucesso!");
      
      navigate("/"); 
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao realizar o cadastro. Tente novamente.");
    }
  }

  return (
    <AuthLayout>
      <AuthCard>
        <RegisterForm onSubmit={handleRegister} />
      </AuthCard>
    </AuthLayout>
  );
}