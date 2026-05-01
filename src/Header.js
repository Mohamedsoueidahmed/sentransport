import './Header.css';
 
function Header() {
  const dateAujourdhui = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
 
  return (
    <header className="header">
      <h1>SénTransport</h1>
      <h2>Votre application de transport au Sénégal</h2>
      <p className="date">{dateAujourdhui}</p>
    </header>
  );
}
 
export default Header;
 