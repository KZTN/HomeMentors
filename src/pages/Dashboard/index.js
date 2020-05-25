import React, { useState, useEffect } from "react";
import Litenav from "../../components/Litenav";
import Card from "../../components/Card";
import api from "../../services/api";
import { CircularProgress, makeStyles } from "@material-ui/core";
import "./styles.scss";
export default function Dashboard({ history }) {
  const [user, setUser] = useState();
  const [isloading, setIsloading] = useState(true);
  const [mentors, setMentors] = useState([]);
  const [filter, setFilter] = useState("");
  async function getUser() {
    const response = await api.get(`/users/${localStorage.getItem('_id')}`);
    console.log(response.data);
    setUser(response.data);
  }
  async function getData() {
    const response = await api.get(`/mentors`);
    setMentors(response.data);
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
    const response = await api.get(`/mentors/${data.inputfield}`);
    setIsloading(false);
    setMentors(response.data);
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
          {mentors.length === 0 && !isloading ? (
            <h1 style={{ marginTop: 20 }}>
              Desculpe, não há mentores disponíveis para sua categoria :(
            </h1>
          ) : null}
          {mentors.map((mentor) => (
            <Card key={mentor._id} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}
