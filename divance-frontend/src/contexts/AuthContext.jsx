import { createContext, useContext, useState, useEffect } from "react";
// 1. Importa a instância do Axios para injetar o token real
import { api } from "../services/api"; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 2. Inicializa o estado tentando ler o usuário salvo no navegador (evita o reset no F5)
  const [user, setUser] = useState(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedUser && storagedToken) {
      // Deixa o Axios pronto com o token caso o usuário feche e abra o app
      api.defaults.headers.common["Authorization"] = `Bearer ${storagedToken}`;
      return JSON.parse(storagedUser);
    }
    return null;
  });

  // 3. O login agora recebe os dados reais da API do Back-end (user e token)
  const login = (userData, token) => {
    setUser(userData);

    // Guarda no localStorage do navegador para persistir
    localStorage.setItem("@App:user", JSON.stringify(userData));
    localStorage.setItem("@App:token", token);

    // Injeta o token de forma global no Axios para as próximas requisições (Dashboard, Extrato, etc.)
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  // 4. O logout limpa a memória e o navegador
  const logout = () => {
    setUser(null);
    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:token");
    delete api.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}