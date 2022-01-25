import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Form from './components/Form';
import CharacterCard from './components/CharacterCard';

import './App.css';

class App extends React.Component {

  state = {
    count: 0,

    isEditing: false,
    user: {
      firstName: 'Juan',
      lastName: 'González',
      age: 30,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      about: 'Soy una persona que siempre está aprendiendo cosas nuevas',
      education: [
        { title: 'Ingeniero civil', company: 'Universidad de Salamanca' },
        { title: 'Máster en Big Data', company: 'Universidad de Madrid' },
      ],
      experience: [
        { title: 'Junior data scientist', company: 'Upgrade Hub' },
        { title: 'Senior data scientist', company: 'Upgrade Hub Labs' },
      ],
    },

    characterList: [],
  }

  constructor(props) {
    super(props);
  }

  // Usamos arrow functions para mantener la referencia a this
  add = e => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }

  // Usamos arrow functions para mantener la referencia a this
  substract = e => {
    const newCount = this.state.count - 1;
    this.setState({
      count: newCount
    });
  }

  handleChangeUserValue = (fieldName, value) => {
    const newUser = { ...this.state.user, [fieldName]: value };

    this.setState({
      user: newUser,
    })
  }

  setIsEditing = e => {
    const newIsEditing = !this.state.isEditing; // Invertimos isEditing
    this.setState({
      isEditing: newIsEditing  
    })
  }

  addCharacter = character => {
    const aux = this.state.characterList;
    this.setState({
      characterList: [...aux, character],
    });
  }

  render(){
    const { user } = this.state;

      return (
        <div className="App">
          <Navbar />
          <h1>¡Hola mundo!</h1>

          {this.state.isEditing
            ? <div></div>
            : (<div>
              <Header image={user.image} fullName={user.firstName + ' ' + user.lastName} />
              <Section elements={user.education} />
              <Section elements={user.experience} />
              </div>
            )}
          <button onClick={this.setIsEditing}>Editar perfil</button>

          <h2>The count is {this.state.count}</h2>
          <button onClick={this.substract}>Substract one</button>
          <button onClick={this.add}>Add one</button>

          <Form onSubmitForm={this.addCharacter} />
          <div>
              {this.state.characterList.map((character) => (
                <CharacterCard
                  key={`${character.name}${character.movie}`}
                  character={character}
                />
              ))}
          </div>
          
        </div>
      );
    }
}

export default App;
