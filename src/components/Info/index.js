import React from "react";
import "./styles.scss";
//import Emoji from '../../interfaces/emoji';
export default function Info() {
  return (
    <section id="info">
      <div className="box-info">
        <div className="box-header">
          <h1>Sobre o Projeto</h1>
        </div>
        <div className="box-text">
          <span>
            Devido a quarentena, trabalhadores do mundo todo estão tendo que
            trabalhar em Home Office sem que sequer estejam adaptados ou
            preparados para o trabalho remoto. A solução surge para que os
            usuários utilizem uma plataforma em que possam fazer perguntas e
            procurarem orientadores com foco em aperfeiçoar suas vendas e
            comércio online, e que os orientadores encontrem uma forma de
            ajudá-los.
          </span>
        </div>
      </div>
      <div className="box-info">
        <div className="box-header">
          <h1>Como Funciona</h1>
        </div>
        <div className="box-text">
          <span>
            Ao se cadastrar na plataforma, o empreendedor selecionará o assunto
            e poderá inserir uma pergunta acerca do desafio que está enfrentando
            em seu negócio. De acordo com os assunto preestabelecido no
            aplicativo, a pergunta será encaminhada e respondida por um
            orientador específico que seja conhecedor da área.
          </span>
        </div>
      </div>
      <div className="box-info">
        <div className="box-header">
          <h1>Missão</h1>
        </div>
        <div className="box-text">
          <span>
          A HomeMentors é comprometida em ajudar com ideias inovadoras o empreendedor que tem intenção de transformar o seu negócio.
          </span>
        </div>
      </div>
    </section>
  );
}
