import React, { useState } from 'react';
import oceanBackground from '../src/asset/ocean.gif';
import storyImage from '../src/asset/storytellinguser.png'; // Assure-toi d'ajouter une image ici

const Accueil: React.FC = () => {
  const [storyIndex, setStoryIndex] = useState(0);

  const storyTexts = [
    "Bonjour, Je m'appelle Marin.",
    "L'océan, source de vie pour notre planète, joue un rôle essentiel dans l'équilibre écologique mondial. Il abrite une biodiversité incroyable et régule le climat en absorbant une grande partie du dioxyde de carbone.",
    "Cependant, les océans subissent de nombreuses menaces causées par l'activité humaine. La pollution plastique, le réchauffement climatique, et la surpêche mettent en péril cet écosystème fragile.",
    "Ces problématiques provoquent des déséquilibres, comme la destruction des récifs coralliens ou encore l'apparition de zones mortes, des endroits où aucune vie marine ne peut survivre.",
    "Il est urgent d'agir pour protéger nos océans, car leur santé est intimement liée à celle de notre planète et de l'humanité.",
  ];

  const handleNextClick = () => {
    if (storyIndex < storyTexts.length - 1) {
      setStoryIndex(storyIndex + 1);
    } else {
      // Rediriger vers la page CorpHumain après la dernière partie de l'histoire
      window.location.href = "/corpHumain";
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url(${oceanBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-8 bg-black bg-opacity-50 p-4 rounded-md mt-8">
        <h1 className="text-3xl font-bold text-white mb-4">Bienvenue dans notre expérience interactive</h1>
      </header>

      {/* Storytelling Section */}
      <div className="flex flex-col items-center justify-center text-white text-lg bg-black bg-opacity-60 p-6 rounded-lg shadow-lg max-w-md mb-8">
        <img
          src={storyImage}
          alt="Storytelling user"
          className="w-48 h-48 mb-4 rounded-full shadow-md"
        />
        <div className="space-y-4">
          <p className="text-center">{storyTexts[storyIndex]}</p>
          <button
            onClick={handleNextClick}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          >
            {storyIndex < storyTexts.length - 1 ? 'Suivant' : 'Continuer vers l\'expérience'}
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-200 text-sm bg-black bg-opacity-50 text-white p-2 rounded-md">
        <p>Explorez le lien entre la nature et l'humain !</p>
      </footer>
    </div>
  );
};

export default Accueil;
