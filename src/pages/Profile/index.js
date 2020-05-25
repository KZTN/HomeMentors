import React, { useState, useEffect } from "react";
import InnerHeader from "../../components/InnerHeader";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { FaChalkboardTeacher, FaQuestion } from "react-icons/fa";
import { FiLogOut, FiEdit3 } from "react-icons/fi";

import "./styles.scss";

export default function Profile({ history }) {
  const [name, setName] = useState("");

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  useEffect(() => {
    async function getUserData() {
      const response = await api.get(`/users/${localStorage.getItem("_id")}`);
      console.log(response.data.name);
      setName(response.data.name);
    }
    if (localStorage.getItem("_id")) {
      getUserData();
    } else {
      history.push("/login");
    }
  }, [history]);

  return (
    <section id="profile">
      <InnerHeader />
      <div className="content">
        <h1>Olá {name}</h1>
        <div className="box-actions">
          <Link to="/profile">
            <div className="card-action">
              <FiEdit3 size={64} color="#ddd" />
              <div className="card-action-title">
                <span>Dados pessoais</span>
              </div>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="card-action">
              <FaChalkboardTeacher size={72} color="#ddd" />
              <div className="card-action-title">
                <span>Buscar por mentores</span>
              </div>
            </div>
          </Link>

          <Link to="/thread">
            <div className="card-action">
              <FaQuestion size={64} color="#ddd" />
              <div className="card-action-title">
                <span>Fazer uma pergunta</span>
              </div>
            </div>
          </Link>
          <div className="card-action" onClick={handleLogout}>
            <FiLogOut size={64} color="#ddd" />
            <div className="card-action-title">
              <span>Sair</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
