import React, { useState } from 'react';  
import { useDrag, useDrop } from 'react-dnd';
import artebloquer from '../src/asset/artebloquer.png';
import barriere from '../src/asset/dam-water-barrier.gif';
import peau from '../src/asset/peau.png'
import simunitaire from '../src/asset/siimunitaire.png'
import poumons from '../src/asset/poumons.png'
import arteresaine from '../src/asset/arteresaine.png'
import { Navigate, useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'circulation thermohaline' },
  { id: 2, name: 'récifs coralliens' },
  { id: 3, name: 'phytoplanctons' },
  { id: 4, name: 'barrage' },
  { id: 5, name: 'courant marin' },
];

const cardsData = [
  { id: 1, text: 'Circulation sanguine', image: artebloquer, category: 'circulation thermohaline' },
  { id: 2, text: 'Peau', image: peau, category: 'récifs coralliens' },
  { id: 3, text: 'Poumons', image: poumons , category: 'phytoplanctons' },
  { id: 4, text: 'Artère bouchée', image: simunitaire , category: 'barrage' },
  { id: 5, text: 'Artère saine', image: arteresaine , category: 'courant marin' },

];

const explanations: Record<string, string> = {
    'phytoplanctons': "Les poumons permettent la respiration humaine en absorbant l’oxygène et en rejetant le dioxyde de carbone, tout comme les phytoplanctons produisent la majeure partie de l’oxygène sur Terre grâce à la photosynthèse.",
    'circulation thermohaline': " La circulation sanguine transporte l'oxygène et les nutriments à travers le corps humain, tout comme la circulation thermohaline redistribue la chaleur et les nutriments à travers les océans, jouant un rôle clé dans la régulation du climat terrestre.",
    'Récifs coralliens': "La peau protège le corps des agressions extérieures et régule certains processus, tout comme les récifs coralliens forment une barrière naturelle qui protège les côtes et héberge une grande diversité de vie marine.",
    'barrage': "La peau protège le corps des agressions extérieures et régule certains processus, tout comme les récifs coralliens forment une barrière naturelle qui protège les côtes et héberge une grande diversité de vie marine.",
    'courant marin': "Une artère saine permet un flux sanguin continu et régulier, tout comme un courant marin sain assure une circulation fluide de l’eau, essentielle à la vie marine et à l'équilibre des écosystèmes océaniques.",
};

const Apprendre: React.FC = () => {
  const [cards, setCards] = useState(cardsData);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [popupType, setPopupType] = useState<'correct' | 'incorrect'>('correct');
  const [explanation, setExplanation] = useState('');

  const navigate = useNavigate(); // Déclare le hook navigate ici, au bon niveau du composant.

const handleDrop = (cardId: number, targetCategory: string) => {
  const card = cards.find((c) => c.id === cardId);
  if (card && card.category === targetCategory) {
    setCards((prevCards) => prevCards.filter((c) => c.id !== cardId));
    setScore((prevScore) => prevScore + 1);
    setMessage('Bonne réponse !');
    setPopupType('correct');
    setExplanation(explanations[targetCategory]); // Affichage de l'explication
    setShowPopup(true);

    // Vérifier si toutes les cartes ont été répondues
    if (cards.length - 1 === 0) {
      setTimeout(() => navigate("/"), 1500); // Attendre un temps pour que l'utilisateur voie la dernière popup avant la redirection
    }
  } else {
    setMessage('Mauvaise réponse, essayez encore.');
    setPopupType('incorrect');
    setExplanation('Il semble que vous ayez fait une erreur. Réessayez pour mieux comprendre !');
    setShowPopup(true);
  }
};


  const DraggableCard = ({ id, text, image }: { id: number; text: string; image: string }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'card',
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    return (
      <div
        ref={drag}
        className="bg-white bg-opacity-70 p-4 rounded-xl shadow-lg w-48 h-48 text-center flex flex-col items-center justify-between border border-gray-300"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <img src={image} alt={text} className="w-full h-24 object-cover mb-2 rounded-md" />
        <p className="text-xl font-semibold text-gray-800">{text}</p>
      </div>
    );
  };

  const DropZone = ({ name }: { name: string }) => {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
      accept: 'card',
      drop: (item: { id: number }) => handleDrop(item.id, name),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }));

    return (
      <div
        ref={drop}
        className={`p-4 w-60 h-60 bg-gray-200 rounded-lg flex items-center justify-center text-center ${
          isOver ? 'bg-green-200' : canDrop ? 'bg-yellow-200' : ''
        }`}
      >
        <p className="text-xl font-semibold">{name}</p>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url(${require('../src/asset/ocean.gif')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
      }}
    >
    <header className="text-center mb-12 bg-black bg-opacity-50 p-4 rounded-md mt-8">
    <h1 className="text-3xl font-bold text-white mb-4">Jeu Interactif : Analogies Humaines et Naturelles</h1>
    <p className="text-lg text-gray-200">Faites glisser les éléments vers les bonnes catégories !</p>
    </header>

      <div className="flex flex-wrap gap-6 justify-center mb-12">
        {cards.map((card) => (
          <DraggableCard key={card.id} id={card.id} text={card.text} image={card.image} />
        ))}
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {categories.map((category) => (
          <DropZone key={category.id} name={category.name} />
        ))}
      </div>

      {showPopup && (
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg text-xl max-w-xl w-full overflow-y-auto ${
            popupType === 'correct' ? 'bg-green-600' : 'bg-red-600'
          }`}
          style={{
            color: 'white', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          onClick={() => setShowPopup(false)} // Fermeture du popup au clic
        >
          <div className="space-y-4">
            <p className="font-semibold">{message}</p>
            <p>{explanation}</p> {/* Affichage de l'explication */}
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
              onClick={() => setShowPopup(false)} // Fermeture au clic sur le bouton
            >
              Fermer
            </button>
          </div>
        </div>
      )}


      <footer className="mt-12 text-center text-lg bg-black bg-opacity-50 text-white p-4 rounded-md">
        <p>Votre Score : {score} / {cardsData.length}</p>
      </footer>
    </div>
  );
};

export default Apprendre;
