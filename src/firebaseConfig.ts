import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from 'firebase/auth'; 

// Votre configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBYjHK9ffe1AWpbgYdOG3c4VtYZUe7Bj6c",
    authDomain: "maison-magenta.firebaseapp.com",
    projectId: "maison-magenta",
    storageBucket: "maison-magenta.appspot.com",
    messagingSenderId: "762832517362",
    appId: "1:762832517362:web:3dbb49a3abd2963d41f86b",
    measurementId: "G-6S24795MFT"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Si vous utilisez Google Analytics, vous pouvez l'initialiser ici
const analytics = getAnalytics(app);

// Initialiser Firestore
const db = getFirestore(app);

// Connexion à l'émulateur Firestore
if (window.location.hostname === "localhost") {
    connectFirestoreEmulator(db, "localhost", 8081); // Assurez-vous que l'émulateur fonctionne sur le port 8080
}

// Initialiser l'authentification
const auth = getAuth(app);

// Connexion à l'émulateur d'authentification
if (window.location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://localhost:9099"); // Assurez-vous que l'émulateur fonctionne sur le port 9099
}

// Fonction pour obtenir la configuration Firebase
export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
        'Add your web app\'s configuration object to firebase-config.ts');
    } else {
        return firebaseConfig;
    }
}

// Exportez les instances db et auth pour les utiliser dans d'autres parties de votre application
export { db, auth }; 
