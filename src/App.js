import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Recherche from './Recherche';
import LigneBus from './LigneBus';
import DetailLigne from './DetailLigne';
import Footer from './Footer';

function App(){

  // 1. Les états
  const [lignes, setLignes] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

  // 2. Charger les données au démarrage
  useEffect(() => {

    fetch("http://localhost:5000/lignes")

      .then(response => {

        if (!response.ok) {
          throw new Error(
            "Erreur serveur : " + response.status
          );
        }

        return response.json();
      })

      .then(data => {
        setLignes(data);
        setChargement(false);
      })

      .catch(error => {
        setErreur(error.message);
        setChargement(false);
      });
  }, []);
  
  // 3. Filtrer les lignes selon la recherche
  const lignesFiltrees = lignes.filter(ligne => {
    const texteRecherche = recherche.toLowerCase();
    return (
      ligne.numero.toLowerCase().includes(texteRecherche) ||
      ligne.depart.toLowerCase().includes(texteRecherche) ||
      ligne.arrivee.toLowerCase().includes(texteRecherche)
    );
  });
  const [nombreRecherches, setNombreRecherches] = useState(0);


  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null);
    } else {
      setLigneSelectionnee(ligne);
    }
  }

      // Écran de chargement
    if (chargement) {
      return (
        <div className="App">
          <Header />

          <main className="contenu">
            <p className="message-chargement">
              Chargement des lignes...
            </p>
          </main>
        </div>
      );
    }

    // Écran d'erreur
    if (erreur) {
      return (
        <div className="App">
          <Header />

          <main className="contenu">
            <div className="message-erreur">

              <p>Impossible de charger les lignes.</p>

              <p className="erreur-detail">
                {erreur}
              </p>

              <p>
                Vérifiez que le serveur Flask est lancé
                (python api/app.py).
              </p>

            </div>
          </main>
        </div>
      );
    }

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <p>
         Vous avez effectué {nombreRecherches} recherche(s)
        </p>
        <Recherche
          valeur={recherche}
         onChange={(value) => {
            setRecherche(value);
           setNombreRecherches(nombreRecherches + 1);
         }}
        />
        <button onClick={() => setRecherche("")}>
           Effacer
        </button>

        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne
          {lignesFiltrees.length > 1 ? "s" : ""} trouvee
          {lignesFiltrees.length > 1 ? "s" : ""}
        </p>

        {lignesFiltrees.length === 0 && (
          <p>Aucune ligne trouvée</p>
        )}

        {lignesFiltrees.map(ligne => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={
              ligneSelectionnee && ligneSelectionnee.id === ligne.id
            }
            onClick={() => handleClickLigne(ligne)}
          />
        ))}

        {ligneSelectionnee && (
          <DetailLigne ligne={ligneSelectionnee} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;