import React from "react";
import "./styles.scss";
import Chatsvg from "../../assets/undraw_chatting_2yvo.svg";
import Emoji from "../../interfaces/emoji";
import { Link } from "react-router-dom";
export default function Connections() {
  function handleclick() {
    window.scrollTo(0, 0);
  }

  return (
    <section id="connections">
      <div className="box-left">
        <div className="box-header">
          <h1>
            Simples, fácil e prático. A ajuda é feita <strong>diretamente</strong> com nossos mentores.
          </h1>
        </div>
        <div className="box-text">
          <span>
            Nossa equipe está pronta para ajudar você
          </span>
        </div>
        <div className="box-moreinfo">
          <Link to="/login">
            <button onClick={handleclick}>
              <span>Entre</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="box-right">
        <img src={Chatsvg} />
      </div>
    </section>
  );
}
