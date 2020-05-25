import React from 'react';
import './styles.scss';

export default function ThreadCard({mentor}) {
  function popupWPP() {
    window.open(`https://wa.me/55${mentor.number}`, '_top');
  }
    return (
        <li className="mentor-item">
<header>
  <img src={mentor.thumbnail} alt={mentor.name} />
  <div className="user-info">
    <strong>{mentor.name}</strong>
    <span>{mentor.domains.join(', ')}</span>
  </div>
</header>
<p>{mentor.bio}</p>
<a onClick={popupWPP}>Entrar em contato</a>
</li>
    );
}