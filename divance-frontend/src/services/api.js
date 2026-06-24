import axios from "axios";

export const api = axios.create({
  // Se houver a variável do Render no .env, usa ela. Se não, usa o localhost.
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});