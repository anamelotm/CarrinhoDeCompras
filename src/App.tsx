import React from 'react';

import Home from './components/Home';
import Header from './components/Header';
import Cadastro from './components/Cadastro';
import Footer from './components/Footer/Footer';
 
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Cadastro />
      <Footer />
    </>
  )
};
 
export default App;