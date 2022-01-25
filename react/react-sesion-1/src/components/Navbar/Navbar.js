import React from 'react';

import './Navbar.css';

const languaje = 'es';
const spanishTitle = 'Bienvenido!';
const englishTitle = 'Welcome!'

const navbarLinks = ['Home', 'About', 'Account'];

const user = {
    fistName: 'Juan',
    lastName: 'González',
    age: 30,
    image: 'https://bit.ly/3e7XhiJ',
    about: 'Soy una persona que siempre está aprendiendo cosas nuevas',
    education: [
        { title: 'Ingeniero civil', company: 'Universidad de Salamanca' },
        { title: 'Máster en Big Data', company: 'Universidad de Madrid' },
    ],
    experience: [
        { title: 'Junior data scientist', company: 'Upgrade Hub' },
        { title: 'Senior data scientist', company: 'Upgrade Hub Labs' },
    ],
};

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <h1>{languaje === 'es' ? spanishTitle : englishTitle}</h1>
        <ul>
          {navbarLinks.map((link) => {
              return <li key={link}>{link}</li>
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;