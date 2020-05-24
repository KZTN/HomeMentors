import React, { useState, useEffect } from "react";
import InnerHeader from "../../components/InnerHeader";
import api from "../../services/api";
import "./styles.scss";

export default function Profile({ history }) {
  const [name, setName] = useState("");

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  useEffect(() => {
    async function getUserData() {
      const response = await api.get(`/users/${localStorage.get("_id")}`);
      setName(response.name);
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
        <h1>profile</h1>
        <h1>olá {name}</h1>
      </div>
    </section>
  );
}
