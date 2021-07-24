import React from 'react';
import './style.css';
import imagem from '../../images/icon.png';


const Header: React.FC = () => {
  return (
    <header>
      <div>
      <img src={imagem} />
      <h1>Se exercite em casa</h1>
      <h2>Ofertas imperdíveis!</h2> 
    </div>
    <nav>
        <a href="#">Home</a>
        <a href="#">Promoções</a>
        <a href="#">Contato</a>
    </nav>
    </header>
  );
}
 
export default Header;