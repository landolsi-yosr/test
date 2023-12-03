import React from 'react';
import "./styles/Home.css"
import img from "../assets/télécharger.jpg"

const Home = () => {
  return (
    <div className='home-page'>
    

        <h1>Bienvenue dans le Jeu de Devinettes!</h1>
    
      <section>
        <h2>Concept du Jeu de Devinettes</h2>
        <p>
          Bienvenue dans notre jeu de devinettes passionnant! Testez vos compétences en résolution
          de devinettes et amusez-vous à deviner les réponses. Défiez vos amis et voyez qui peut obtenir
          le meilleur score!
        </p>
      </section>

      <section>
        <h2>Comment Jouer</h2>
        <p>
          Pour jouer, rendez-vous sur la page "Start" et suivez les instructions pour résoudre
          les devinettes. Accumulez des points et mesurez-vous à d'autres joueurs.
        </p>
      </section>
      <img className='img' src={img} alt="aa" />
    </div>

  );
}

export default Home;
