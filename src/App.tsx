import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Accueil from "Accueil";
import  Apprendre from "Apprendre";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apprendre />} />
      </Routes>
    </Router>
  );
}

export default App;

