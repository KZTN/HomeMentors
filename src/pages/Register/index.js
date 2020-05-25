import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InnerHeader from '../../components/InnerHeader';
import api from '../../services/api';
import './styles.scss';

export default function Register({ history }) {
  const [namefield, setNamefield] = useState('');
  const [phonefield, setPhonefield] = useState('');
  const [emailfield, setEmailfield] = useState('');
  const [passwordfield, setPasswordfield] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    await api
      .post('/users', {
        name: namefield,
        phone: phonefield,
        email: emailfield,
        password: passwordfield,
      })
      .then( (response) => {
        localStorage.setItem('_id', response.data);
        console.log('o usuario foi cadastrado!');
        history.push('/profile');
      })
      .catch(function (error) {
        if (error.response) {
          alert('Erro ao se cadastrar: ' + error.response.data.error);
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });
  }
  useEffect(() => {
    if (localStorage.getItem('_id')) {
      history.push('/profile');
    }
  }, [history]);
  return (
    <section id="register">
      <InnerHeader />
      <div className="box-form">
        <div className="box-content">
          <div className="form-title">
            <h1>Complete os seus dados</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <div className="form-element">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={namefield}
                  onChange={(e) => setNamefield(e.target.value)}
                  placeholder="Nome completo"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phonefield}
                  onChange={(e) => setPhonefield(e.target.value)}
                  placeholder="Telefone"
                  required
                />
              </div>
            </div>
            <div className="form-section">
              <div className="form-element">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={emailfield}
                  onChange={(e) => setEmailfield(e.target.value)}
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={passwordfield}
                  onChange={(e) => setPasswordfield(e.target.value)}
                  minLength="6"
                  placeholder="Senha"
                  required
                />
              </div>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className="box-signup">
          <span>
            Já possui um cadastro?{' '}
            <Link to="/login">
              <u>Entre</u>
            </Link>
          </span>
        </div>
      </div>
      <div className="box-help">
        <div className="help-element">
          Ao cadastrar, você concorda com os <u>Termos de Serviço.</u>
        </div>
      </div>
    </section>
  );
}
