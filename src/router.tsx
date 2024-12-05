import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "Accueil";


function AppRouter() {

  return (
<Router>
    <div className="App">
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="*" element={<Navigate to="/accueil" />} /> {/* Redirection par défaut */}

      </Routes>
    </div>
    </Router>

  );
}

export default AppRouter;
