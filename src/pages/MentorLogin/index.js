import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InnerHeader from '../../components/InnerHeader';
import api from '../../services/api';
import './styles.scss';
export default function MentorLogin({ history }) {
  const [wronglogin, setWronglogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    await api
      .post('/sessions', { email, password })
      .then((response) => {
        console.log('usuario foi autenticado!');
        setEmail('');
        setPassword('');
        console.log('o id do usuario é' + response.data)
        localStorage.setItem('_id', response.data);
        history.push('/mentorboard');
      })
      .catch(function (error) {
        if (error.response) {
          setWronglogin(true);
          console.log(error.response.data);
          console.log(error.response.status);
          setEmail('');
          setPassword('');
        }
      });
  }
  useEffect(() => {
    if (localStorage.getItem('_id')) {
      history.push('/mentorboard');
    }
  }, [history]);
  return (
    <section id="login">
      <InnerHeader />
      <div className="box-form">
        <div className="box-content">
          <div className="form-title">
            <h1>Olá! Digite o seu e-mail e senha</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-element">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-element">
              <input
                type="password"
                name="password"
                id="password"
                minLength="6"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="form-warning">
                
                {wronglogin ? (
                  <span style={{ color: 'red', fontSize: 11 }}>
                    usuário ou senha incorretos, tente novamente.
                  </span>
                ) : null}
              </div>

              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
        <div className="box-signup">
          <span>
            Área administrativa de mentores
          </span>
        </div>
      </div>
    </section>
  );
}
