import api from './api';

export async function getLatestTransactions(limit = 5) {
  const { data } = await api.get('/transactions', {
    params: { limit },
  });

  return Array.isArray(data)
    ? data
    : data.transactions || data.transacoes || data.items || data.content || [];
}
