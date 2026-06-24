import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import LoginForm from "../components/auth/LoginForm";

// 💡 IMPORTA O SEU HOOK CUSTOMIZADO
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  // 💡 USA O SEU HOOK AQUI
  const { login } = useAuth(); 
  const navigate = useNavigate();

  async function handleLogin(formData) {
    try {
      const { email, password } = formData;
      
      // Como o seu mock/back vai devolver os dados, você passa para o login
      await login({ id: 1, name: "Mylena", email });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("E-mail ou senha incorretos!");
    }
  }

  return (
    <AuthLayout>
      <AuthCard>
        <LoginForm onSubmit={handleLogin} />
      </AuthCard>
    </AuthLayout>
  );
}