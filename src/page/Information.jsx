import React from 'react';
import "./styles/Information.css"
import exp1 from "../assets/maxresdefault.jpg"
import exp2 from '../assets/axp.jpg';

const Information = () => {
  return (
    <div className='information'>
      <div className="header-info">
        <h1>Instructions du Jeu de Devinettes</h1>
        </div>

      <section>
        <h2>Règles du Jeu</h2>
        <p>
          Bienvenue dans le Jeu de Devinettes! Pour jouer, suivez ces règles simples :
        </p>
        <ol>
          <li>Vous verrez une devinette à l'écran.</li>
          <li>Essayez de deviner la réponse correcte.</li>
          <li>Entrez votre réponse et soumettez-la.</li>
          <li>Gagnez des points pour chaque devinette correcte.</li>
          <li>Chaque devinette a un temps limite, alors soyez rapide!</li>
        </ol>
      </section>

      <section>
        <h2>Objectifs du Jeu</h2>
        <p>
          L'objectif principal est de marquer autant de points que possible en répondant correctement
          aux devinettes. Défiez-vous et défiez vos amis pour voir qui peut obtenir le meilleur score!
        </p>
      </section>

      <section>
        <h2>Mécanismes du Jeu</h2>
        <p>
          Le Jeu de Devinettes utilise un système de points pour mesurer vos performances. Plus vous
          répondez correctement rapidement, plus vous marquez de points. Certaines devinettes peuvent
          être plus difficiles que d'autres, alors soyez prêt à relever le défi!
        </p>
      </section>

      <section>
        <h2>Exemples et Illustrations</h2>
        <p>
          Pour une meilleure compréhension, voici quelques exemples de devinettes et des illustrations
          pour vous familiariser avec le jeu. N'hésitez pas à explorer et à commencer à jouer!
        </p>
      
        <img src={exp1} alt=""/>
        <img src={exp2} alt=""/>
  
      </section>
    </div>
  );
}

export default Information;
