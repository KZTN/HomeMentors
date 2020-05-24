import React from 'react';
import './styles.scss';
import IdeaIcon from '../../assets/undraw_lightbulb_moment_evxr.svg'
//import Emoji from '../../interfaces/emoji';
export default function Welcome() {
  return (
    <section id="welcome">
      <div className="box-left">
          <div className="box-header">
            <h1>
            Em tempos de <strong>crise</strong>, se <strong>reinventar</strong> é essencial.
            </h1>
          </div>
          <div className="box-text">
              <span>Tenha suporte personalizado para sua empresa com mentores experientes de diversas áreas.</span>
          </div>
          <div className="box-moreinfo">
              <span>Saiba Mais</span>
          </div>
      </div>
      <div className="box-right">
          <img src={IdeaIcon}/>
      </div>
    </section>
  );
}
