import React, { useState } from "react"; // Assure-toi d'importer useState

const Accueil: React.FC = () => {
  const [wasteCount, setWasteCount] = useState(0); // Utilisation correcte de useState

  const increaseWaste = () => {
    setWasteCount(wasteCount + 1);
  };

  const decreaseWaste = () => {
    if (wasteCount > 0) {
      setWasteCount(wasteCount - 1);
    }
  };

  // Déterminer l'apparence du personnage en fonction du nombre de déchets
  const getCharacterState = () => {
    if (wasteCount === 0) return "healthy";
    if (wasteCount <= 5) return "slightlySick";
    if (wasteCount <= 10) return "sick";
    return "verySick";
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <h2>🌊 Déchets dans la mer 🌊</h2>
        <div style={styles.counter}>
          <button onClick={decreaseWaste} style={styles.button}>
            -
          </button>
          <span style={styles.count}>{wasteCount}</span>
          <button onClick={increaseWaste} style={styles.button}>
            +
          </button>
        </div>
        <p>
          {wasteCount === 0
            ? "La mer est propre pour l'instant!"
            : `Il y a maintenant ${wasteCount} déchets dans la mer.`}
        </p>
      </div>

      <div style={styles.rightContainer}>
        <div style={styles.character[getCharacterState()]}>
          {getCharacterState() === "healthy" && <p>🙂 Le personnage est en bonne santé!</p>}
          {getCharacterState() === "slightlySick" && <p>😷 Le personnage se sent un peu mal.</p>}
          {getCharacterState() === "sick" && <p>🤢 Le personnage est malade.</p>}
          {getCharacterState() === "verySick" && <p>🤢💀 Le personnage est très malade !</p>}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  },
  leftContainer: {
    textAlign: "center" as "center" | "left" | "right",
    width: "50%",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f0f8ff",
  },
  rightContainer: {
    width: "50%",
    height:"100%",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f0f8ff",
    textAlign: "center" as "center" | "left" | "right",
  },
  counter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  },
  button: {
    fontSize: "20px",
    padding: "10px",
    margin: "0 10px",
    cursor: "pointer",
    border: "1px solid #007BFF",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
  },
  count: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  character: {
    healthy: {
      fontSize: "40px",
      color: "green",
    },
    slightlySick: {
      fontSize: "40px",
      color: "yellow",
    },
    sick: {
      fontSize: "40px",
      color: "orange",
    },
    verySick: {
      fontSize: "40px",
      color: "red",
    },
  },
};

export default Accueil;


