import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Importa os ícones
import { Link } from "react-router-dom"; // Importa o Link
import { registerUser } from '../../register-service'; // Importa a função de registro
import "./Registro.css"; // Importa o CSS

const Registro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState(""); // Adiciona mensagem de feedback

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      senha: senha,
    };

    try {
      const response = await registerUser(userData);
      console.log("Usuário registrado com sucesso:", response);
      setMessage("Usuário registrado com sucesso!"); // Mensagem de sucesso
      // Limpar os campos após o registro, se necessário
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      setMessage("Erro ao registrar usuário: " + error.message); // Mensagem de erro
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        <h1>Crie sua conta</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        
        <button type="submit">Registrar</button>

        {/* Mensagem de feedback */}
        {message && <p>{message}</p>}

        <div className="login-link">
          <p>
            Já tem uma conta? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registro;
