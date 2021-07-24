import React from 'react';
import './style.css';
import logolinkedin from '../../images/Linkedin.png';
import logogithub from '../../images/github.png';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Projeto desenvolvido para o desafio #2 Programa Hiring Coders 2021 - Por Ana Melo</p>
      <a href="https://github.com/anamelotm" target='_blank'><img src= {logogithub} className="icon"/></a>
      <a href="https://www.linkedin.com/in/analuisatmelo/" target='_blank' ><img src={logolinkedin} className="icon"/></a>
    </footer>
  );
}
 
export default Footer;