import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import logo from "../../assets/logo.png";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // dispatch(loginUser({ email, password }));
    navigate("/home", { replace: true });
  };
  if (status === "succeeded") {
    return <Navigate to="/home" />;
  }

  return (
    <div className=" login">
      {status === "loading" && <p>authentification...</p>}
      {error && <p>Erreur d'authentification</p>}
      <img src={logo} alt="logo" width={50} />

      <form onSubmit={handleSubmit}>
        <div className="input-label-box  ">
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <label htmlFor={"email"}>Adresse e-mail</label>
        </div>
        <div className="input-label-box  ">
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor={"password"}>Mot de passe</label>
        </div>
        <div className="login-button">
          <button type="submit">Se connecter</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
