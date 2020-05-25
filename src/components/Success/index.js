import React from "react";
import "./styles.scss";
import Growsvg from "../../assets/undraw_growth_curve_8mqx.svg";
import Emoji from "../../interfaces/emoji";
import { Link } from "react-router-dom";
export default function Success() {
  function handleclick() {
    window.scrollTo(0, 0);
  }

  return (
    <section id="success">
      <div className="box-left">
        <div className="box-header">
          <h1>
            Expanda suas vendas <strong>onde estiver</strong> e saia na frente
          </h1>
        </div>
        <div className="box-text">
          <span>
           Se está tendo dúvidas de como trabalhar melhor, vamos trazer a solução para você
          </span>
        </div>
        <div className="box-moreinfo">
          <Link to="/dashboard">
            <button onClick={handleclick}>
              <span>Buscar Mentores</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="box-right">
        <img src={Growsvg} />
      </div>
    </section>
  );
}
