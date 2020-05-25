import React from "react";
import "./styles.scss";

export default function Card({ thread }) {
  function popupWPP() {
    window.open(`https://wa.me/55${thread.author.number}`, "_top");
  }
  return (
    <li className="mentor-item">
      <header>
        <img src={thread.author.thumbnail} alt={thread.author.name} />

        <div className="user-info">
          <strong>{thread.author.name}</strong>
          <span>{thread.category}</span>
        </div>
      </header>
      <p>{thread.description}</p>
      <a onClick={popupWPP}>Entrar em contato</a>
    </li>
  );
}
