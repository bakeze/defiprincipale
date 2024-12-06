import React, { useState } from 'react';  
import { useDrag, useDrop } from 'react-dnd';
import artebloquer from '../src/asset/artebloquer.png';
import barriere from '../src/asset/dam-water-barrier.gif';
import peau from '../src/asset/peau.png'
import simunitaire from '../src/asset/siimunitaire.png'

const categories = [
  { id: 1, name: 'Barrages dans les rivières' },
  { id: 2, name: 'Surface de l\'océan' },
  { id: 3, name: 'Récifs coralliens' },
];

const cardsData = [
  { id: 1, text: 'Artère bouchée', image: artebloquer, category: 'Barrages dans les rivières' },
  { id: 2, text: 'Peau', image: peau, category: 'Surface de l\'océan' },
  { id: 3, text: 'Système Immunitaire', image: simunitaire , category: 'Récifs coralliens' },
];

const explanations: Record<string, string> = {
    'Surface de l\'océan': "L'océan est vital pour la planète. Il régule le climat, produit de l'oxygène et soutient une biodiversité incroyable. Il est également essentiel pour le transport maritime et la régulation des températures.",
    'Barrages dans les rivières': "Les barrages peuvent réguler les rivières, mais ils peuvent aussi avoir des effets négatifs sur l'écosystème. Ils sont utilisés pour produire de l'énergie hydroélectrique, fournir de l'eau potable, mais peuvent aussi perturber les écosystèmes aquatiques.",
    'Récifs coralliens': "Les récifs coralliens sont des écosystèmes marins uniques qui abritent une grande variété de vie marine. Ils sont menacés par le réchauffement climatique, la pollution et la surpêche, ce qui met en danger les espèces qui en dépendent.",
};

const Apprendre: React.FC = () => {
  const [cards, setCards] = useState(cardsData);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [popupType, setPopupType] = useState<'correct' | 'incorrect'>('correct');
  const [explanation, setExplanation] = useState('');

  const handleDrop = (cardId: number, targetCategory: string) => {
    const card = cards.find((c) => c.id === cardId);
    if (card && card.category === targetCategory) {
      setCards((prevCards) => prevCards.filter((c) => c.id !== cardId));
      setScore((prevScore) => prevScore + 1);
      setMessage('Bonne réponse !');
      setPopupType('correct');
      setExplanation(explanations[targetCategory]); // Affichage de l'explication
    } else {
      setMessage('Mauvaise réponse, essayez encore.');
      setPopupType('incorrect');
      setExplanation('Il semble que vous ayez fait une erreur. Réessayez pour mieux comprendre !');
    }
    setShowPopup(true);
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
