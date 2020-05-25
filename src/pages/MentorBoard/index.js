import React, { useState, useEffect } from "react";
import Litenav from "../../components/Litenav";
import ThreadCard from "../../components/ThreadCard";
import api from "../../services/api";
import { CircularProgress, makeStyles } from "@material-ui/core";
import "./styles.scss";
export default function Dashboard({ history }) {
  const [user, setUser] = useState();
  const [isloading, setIsloading] = useState(true);
  const [threads, setThreads] = useState([]);
  const [filter, setFilter] = useState("");
  async function getUser() {
    const response = await api.get(`/mentor/${localStorage.getItem('_id')}`);
    console.log(response.data);
    setUser(response.data);
  }
  async function getData() {
    const response = await api.get(`/threads`);
    setThreads(response.data);
    setIsloading(false);
    setFilter(false);
  }
  useEffect(() => {
    if (localStorage.getItem("_id")) {
      getData();
      getUser();
    } else {
      history.push("/login");
    }
  }, [history]);
  
  async function handleInputField(data) {
    const response = await api.get(`/threads/${data.inputfield}`);
    setIsloading(false);
    setThreads(response.data);
    setFilter(data.inputfield);
    window.scrollTo(0, 0);
  }
  return (
    <section id="dashboard">
      <Litenav onSubmit={handleInputField} history={history} user={user} />
      {isloading ? <CircularProgress color="inherit" /> : null}

      <div className="content">
        {isloading ? <CircularProgress color="inherit" /> : null}

        <div className="box-info-results">
          <div className="info-results">
            <span>{filter ? `Resultados da categoria: ${filter}` : null}</span>
          </div>
          <div className="box-revert" onClick={getData}>
            <span>{filter ? `Remover filtros de pesquisa` : null}</span>
          </div>
        </div>
        <div className="cards-wrap">
          {threads.length === 0 && !isloading ? (
            <h1 style={{ marginTop: 20 }}>
              Desculpe, não há mentores disponíveis para sua categoria... :(
            </h1>
          ) : null}
          {threads.map((thread) => (
            <ThreadCard key={thread._id} thread={thread} />
          ))}
        </div>
      </div>
    </section>
  );
}
