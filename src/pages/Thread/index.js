import React, { useState, useEffect } from "react";
import ActionsHeader from "../../components/ActionsHeader";
import api from "../../services/api";
import "./styles.scss";
export default function Thread({ history }) {
  const [user, setUser] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post(
      "/threads",
      { title, description, category },
      { headers: { _id: localStorage.getItem("_id") } }
    );
    alert("Sua dúvida foi enviada com sucesso, aguarde um dos nossos mentores entrar em contato com você");
    history.push("/profile");
  }
  useEffect(() => {
    async function getUserData() {
      const response = await api.get(`/users/${localStorage.getItem("_id")}`);
      setUser(response.data);
    }
    if (localStorage.getItem("_id")) {
      getUserData();
    } else {
      history.push("/login");
    }
  }, [history]);
  return (
    <section id="thread">
      <ActionsHeader />
      <div className="content">
        <div className="box-form">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <label htmlFor="title">Título do assunto *</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label htmlFor="description">Descrição *</label>
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <label htmlFor="description">Categoria *</label>
              <select
                id="subject"
                name="subject"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled selected hidden>
                  Escolha uma opção
                </option>
                <option value="Bussiness">Bussiness</option>
                <option value="Gestão">Gestão</option>
                <option value="Marketing">Marketing</option>
                <option value="Visibilidade">Visibilidade</option>
                <option value="Empreendedorismo">Empreendedorismo</option>
                <option value="Destaque no mercado">Destaque no mercado</option>
                <option value="Anuncio online">Anuncio online</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
