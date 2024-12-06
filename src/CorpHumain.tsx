import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import artebloquer from '../src/asset/artebloquer.png';
import barriere from '../src/asset/dam-water-barrier.gif';
import peau from '../src/asset/peau.png';
import simunitaire from '../src/asset/siimunitaire.png';
import poumons from '../src/asset/poumons.png';
import arteresaine from '../src/asset/arteresaine.png';

// Données pour les explications avec le texte nature en rouge
const cardsData = [
  { id: 1, text: 'Circulation sanguine', image: artebloquer, explanation: 
    "Circulation sanguine et circulation thermohaline. La circulation sanguine transporte l'oxygène et les nutriments à travers le corps humain, tout comme la <span style={{ color: 'red' }}>circulation thermohaline redistribue la chaleur et les nutriments à travers les océans, jouant un rôle clé dans la régulation du climat terrestre</span>."
  },
  { id: 2, text: 'Peau', image: peau, explanation: 
    "La peau protège le corps des agressions extérieures et régule certains processus, tout comme les <span style={{ color: 'red' }}>récifs coralliens forment une barrière naturelle qui protège les côtes et héberge une grande diversité de vie marine</span>."
  },
  { id: 3, text: 'Poumons', image: poumons, explanation: 
    "Les poumons permettent la respiration humaine en absorbant l’oxygène et en rejetant le dioxyde de carbone, tout comme les <span style={{ color: 'red' }}>phytoplanctons produisent la majeure partie de l’oxygène sur Terre grâce à la photosynthèse</span>."
  },
  { id: 4, text: 'Artère bouchée', image: simunitaire, explanation: 
    "Une artère bouchée empêche le sang de circuler correctement, tout comme un <span style={{ color: 'red' }}>barrage bloque la circulation de l’eau dans une rivière ou un courant marin, modifiant ainsi les écosystèmes environnants</span>."
  },
  { id: 5, text: 'Artère saine', image: arteresaine, explanation: 
    "Une artère saine permet un flux sanguin continu et régulier, tout comme un <span style={{ color: 'red' }}>courant marin sain assure une circulation fluide de l’eau, essentielle à la vie marine et à l'équilibre des écosystèmes océaniques</span>."
  },
];

const CorpHumain: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentExplanation, setCurrentExplanation] = useState('');
  const [clickedCards, setClickedCards] = useState<number[]>([]); // Suivi des cartes cliquées
  const navigate = useNavigate(); // Hook pour la navigation

  const handleImageClick = (explanation: string, id: number) => {
    if (!clickedCards.includes(id)) {
      const newClickedCards = [...clickedCards, id];
      setClickedCards(newClickedCards); // Mettre à jour l'état avec la nouvelle carte
      setCurrentExplanation(explanation);
      setShowPopup(true);

      // Vérifier si toutes les cartes ont été cliquées
      if (newClickedCards.length === cardsData.length) {
        navigate('/apprendre'); // Redirection vers la page "Apprendre"
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url(${require('../src/asset/ocean.gif')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-12 bg-black bg-opacity-50 p-4 rounded-md mt-8">
        <h1 className="text-3xl font-bold text-white mb-4">Analogies Humaines et Naturelles</h1>
        <p className="text-lg text-gray-200">Cliquez sur les images pour découvrir leurs explications !</p>
      </header>

      {/* Affichage des cartes avec clic */}
      <div className="flex flex-wrap gap-6 justify-center mb-12">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="cursor-pointer bg-white bg-opacity-70 p-4 rounded-xl shadow-lg w-48 h-48 text-center flex flex-col items-center justify-between border border-gray-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            onClick={() => handleImageClick(card.explanation, card.id)} // Passe l'ID en paramètre
          >
            <img src={card.image} alt={card.text} className="w-full h-24 object-cover mb-2 rounded-md" />
            <p className="text-lg font-semibold text-gray-800">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Popup pour l'explication */}
      {showPopup && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg text-xl max-w-xl w-full bg-white shadow-lg"
          onClick={closePopup}
        >
          <div className="space-y-4">
            <div dangerouslySetInnerHTML={{ __html: currentExplanation }} />
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
              onClick={closePopup}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Footer avec le score */}
      <footer className="mt-12 text-center text-lg bg-black bg-opacity-50 text-white p-4 rounded-md">
        <p>Interagissez avec les cartes pour découvrir leur contenu !</p>
      </footer>
    </div>
  );
};

export default CorpHumain;
