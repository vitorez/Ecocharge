import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importa o Link para navegação
import "./Registro.css";

const Registro = () => {
  // Estados para armazenar as entradas do usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Valida se as senhas coincidem
    if (password !== confirmPassword) {
      console.error("As senhas não coincidem");
      return;
    }

    // Faz o console log dos dados de registro do usuário
    console.log("Dados de Registro:", { email, password });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Confirme a Senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <button type="submit">Registrar</button>

        <div className="login-link">
          <p>
            Já tem uma conta? <Link to="/login">Login</Link> {/* Usando Link para navegação */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registro;
