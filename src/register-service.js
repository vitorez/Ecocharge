import axios from 'axios';

// Definindo a base URL da API
const API_URL = 'https://localhost:7013/api/v1/login'; // Substitua com a sua URL

// Função para registrar o usuário
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data; // Retorna a resposta da API
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error; // Propaga o erro para lidar no componente
  }
};
