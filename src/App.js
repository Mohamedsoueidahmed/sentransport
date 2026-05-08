import './App.css';
import Header from './Header';
import ListeLignes from './ListeLignes';
import Footer from './Footer';

const lignes = [
  { id: 1,  numero: "1",  depart: "Parcelles Assainies", arrivee: "Plateau",      arrets: 14, couleur: "#0a6e31" },
  { id: 2,  numero: "7",  depart: "Guediawaye",          arrivee: "Place Obé",    arrets: 18, couleur: "#e74c3c" },
  { id: 3,  numero: "15", depart: "Pikine",              arrivee: "Médina",       arrets: 12, couleur: "#2980b9" },
  { id: 4,  numero: "23", depart: "Ouakam",              arrivee: "Grand Dakar",  arrets: 10, couleur: "#8e44ad" },
  { id: 5,  numero: "8",  depart: "Almadies",            arrivee: "Colobane",     arrets: 16, couleur: "#d35400" },
  { id: 6,  numero: "12", depart: "Yoff",                arrivee: "Sandaga",      arrets: 11, couleur: "#16a085" },
  // Exercice 3 : 4 nouvelles lignes
  { id: 7,  numero: "31", depart: "Fann",                arrivee: "Liberté 6",   arrets:  9, couleur: "#c0392b" },
  { id: 8,  numero: "44", depart: "HLM Grand Yoff",      arrivee: "Dieuppeul",   arrets: 13, couleur: "#1abc9c" },
  { id: 9,  numero: "52", depart: "Sicap Liberté",       arrivee: "Colobane",    arrets:  8, couleur: "#f39c12" },
  { id: 10, numero: "67", depart: "Médina",              arrivee: "Thiaroye",    arrets: 20, couleur: "#2c3e50" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <ListeLignes lignes={lignes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;