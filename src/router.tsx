import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "Accueil";
import Apprendre from "Apprendre";

function AppRouter() {

  return (
<Router>
    <div className="App">
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apprendre" element={<Apprendre />} />

        <Route path="*" element={<Navigate to="/accueil" />} /> {/* Redirection par défaut */}

      </Routes>
    </div>
    </Router>

  );
}

export default AppRouter;
