import React, { useState } from 'react';

import './style.css';

import Swal from 'sweetalert2';

const Cadastro: React.FC = () => {
  const [user,setUser] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState(['','']);

  const handleUser = ( e:any ) => {
    e.preventDefault();
    
    setData([user, email]);
    localStorage.setItem("nome e email", JSON.stringify(data));
    Swal.fire('Cadastro realizado!');
    setUser('');
    setEmail('');
  }

    return (
      <section className="cadastro">
            <h3>Cadastre-se aqui para receber mais promoções!</h3>
            <form id="form">
                <input  onChange={e => setUser(e.target.value)}  placeholder= "Nome" type="text" value={user} />
                <input  onChange={e => setEmail(e.target.value)}  placeholder="E-mail" type="text" value={email} />
                <input type="submit" value="Cadastrar" id="buttom" onClick={handleUser}/>
            </form>
      </section>
    );
}
   
export default Cadastro;
