import { api } from "./api";

// Intercepta todas as requisições que saem do seu Axios
api.interceptors.request.use(async (config) => {
  // Cria um delay de 500ms para simular a rede
  await new Promise(resolve => setTimeout(resolve, 500));

  // 1. Simulação de LOGIN
  if (config.url === "/auth/login" && config.method === "post") {
    const { email } = JSON.parse(config.data);
    config.adapter = () => Promise.resolve({
      data: {
        user: { id: 1, name: "Mylena Acadêmico", email: email },
        token: "token-falso-simulado-123"
      },
      status: 200,
      statusText: "OK",
      headers: {},
      config
    });
  }

  // 2. Simulação de CADASTRO
  if (config.url === "/auth/register" && config.method === "post") {
    config.adapter = () => Promise.resolve({
      data: { success: true },
      status: 200,
      statusText: "OK",
      headers: {},
      config
    });
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

console.log("⚠️ SIMULADOR NATIVO ATIVADO (Sem bibliotecas externas).");