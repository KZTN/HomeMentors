import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  return (
    <header id="mainheader">
      <Link to="/">
        <div className="box-logo">
          <h1>HomeMentors</h1>
        </div>
      </Link>
      <div className="box-text">
        <span>Plataforma de ajuda&mentoria Home Office</span>
      </div>
      <div className="box-actions">
        <div className="box">
          <Link to="/profile">
            <span>Minha conta</span>
          </Link>
        </div>
        <div className="box">
          <Link to="/dashboard">
            <span>Busque um Mentor</span>
          </Link>
        </div>
        <Link to="/thread">
          <div className="box">
            <span>Faça uma pergunta</span>
          </div>
        </Link>
        <Link to="/about">
          <div className="box">
            <span>Sobre</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
