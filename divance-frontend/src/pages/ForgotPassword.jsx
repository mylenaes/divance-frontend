import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

export default function ForgotPassword() {
  const navigate = useNavigate(); 

  function handleForgotPassword(formData) {
    console.log("Forgot password data:", formData);
    
    alert("Se o e-mail estiver cadastrado, um link de recuperação será enviado!");
    
    navigate("/");
  }

  return (
    <AuthLayout>
      <AuthCard>
        <ForgotPasswordForm onSubmit={handleForgotPassword} />
      </AuthCard>
    </AuthLayout>
  );
}