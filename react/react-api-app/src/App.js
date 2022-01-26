import React from 'react';

import './App.css';
import Example from './components/Example';

class App extends React.Component {
  state = {
    text: 'Este texto cambiara en 2 segundos',
    showExample: true,
    characterList: [],
  }

  constructor(props) {
    super(props);

    console.log('¡Construyendo el componente!');
  }

  UNSAFE_componentWillMount() {
    console.log('¡El componente va a montarse!');
  }

  componentDidMount() {
    console.log('componentDidMount - ¡El componente se ha montado!');
    setTimeout(
      () =>
        this.setState({ text: '¡El texto ha cambiado en componentDidMount!' }),
      2000
    );

    setTimeout(() => {
      fetch('https://rickandmortyapi.com/api/character/')
        .then((res) => res.json())
        .then((response) => {
          // La petición trae los personajes en el array results...
          this.setState({
            characterList: response.results,
          });
        });
    }, 2000);
  }

  hideExample = () => {
    this.setState({
      showExample: false,
    });
  };

  render() {
    console.log('render - Pintando el componente en el DOM');

    return (
      <div className="App">
        <h1>Componente App</h1>
        <h2>{this.state.text}</h2>

        <button onClick={this.hideExample}>Desmontar componente Example</button>
        {this.state.showExample ? <Example /> : null}

        <div>
          {this.state.characterList.length ? (
            this.state.characterList.map((character) => (
              <div key={JSON.stringify(character)}>
                <h4>Id: {character.id}</h4>
                <h4>Name: {character.name}</h4>

                <img src={character.image} alt={character.name} />

                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            ))
          ) : (
            <h3>¡No hay personajes cargados!</h3>
          )}
        </div>

      </div>
    );
  }
}

export default App;