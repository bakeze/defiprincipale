import React from 'react';

const Accueil: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative bg-cover bg-center h-3/5" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?ocean,sea)' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white p-6">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 text-shadow-lg">Plongez dans l'aventure marine</h1>
          <p className="text-xl md:text-2xl font-light mb-6">Vivez une expérience immersive entre l'humain et la mer.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
            Explorer
          </button>
        </div>
      </header>

      {/* Section Nos Valeurs */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-10">Nos Valeurs</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-teal-100 p-8 rounded-xl shadow-lg w-full sm:w-1/2 md:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Respect de l'Océan</h3>
            <p className="text-gray-700 text-lg">Nous valorisons la préservation des écosystèmes marins et la biodiversité.</p>
          </div>
          <div className="bg-teal-100 p-8 rounded-xl shadow-lg w-full sm:w-1/2 md:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Connexions Humaines</h3>
            <p className="text-gray-700 text-lg">Créer des liens durables entre les hommes et leur environnement naturel.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <p className="text-center text-sm">© 2024 - Projet Mer et Humain</p>
      </footer>
    </div>
  );
}

export default Accueil;
