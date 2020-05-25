import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

export default function Litenav({ onSubmit, user, history }) {
  const [boxactions, setBoxactions] = useState(false);
  const [inputfield, setInputfield] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (user) {
      setReady(true);
    }
  }, [user]);

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      inputfield,
    });
    setInputfield("");
  }

  function handleActiveBoxActions() {
    setBoxactions(true);
  }
  function handleDisableBoxActions() {
    setBoxactions(false);
  }
  return (
    <div className="lite-nav">
      <Link to="/">
        <div className="box-logo">
          <h3>Home Mentors</h3>
        </div>
      </Link>
      <div className="box-search">
        <FaSearch
          size={14}
          color="#888"
          style={{ margin: "auto 0 auto 10px" }}
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Busque por categorias"
            value={inputfield}
            onChange={(e) => setInputfield(e.target.value)}
          />
        </form>
      </div>
      <div className="box-actions" onMouseLeave={handleDisableBoxActions}>
        <button onClick={handleActiveBoxActions}>
          <span>Olá {ready ? user.name : "visitante"}</span>
        </button>
        <div className="icon-user">
          {ready ? (
            <img src={user.thumbnail} />
          ) : (
            <FaUser size={25} color="#888" />
          )}
        </div>
        <div
          className={boxactions ? "actions active" : "actions disable"}
          onMouseOver={handleActiveBoxActions}
          onMouseOut={handleDisableBoxActions}
        >
          <Link to="/profile">
            <div className="action-item">Minha Conta</div>
          </Link>
          <div className="action-item" onClick={handleLogout}>
            <a href="#">Sair</a>
          </div>
        </div>
      </div>
    </div>
  );
}
