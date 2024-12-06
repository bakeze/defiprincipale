import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CorpHumain from './CorpHumain';
import Apprendre from './Apprendre';
import Accueil from 'Accueil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/corphumain" element={<CorpHumain />} />
        <Route path="/apprendre" element={<Apprendre />} />
      </Routes>
    </Router>
  );
}

export default App;
