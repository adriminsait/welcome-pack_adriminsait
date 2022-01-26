import React, { useState, useEffect } from 'react';

import List from './components/List'
import Form from './components/Form';
import Counter from './components/Counter';

import './App.css';

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    console.log('Yo me comporto como componentDidMount!');

    // Simulamos una request a una API
    fetch('https://rickandmortyapi.com/api/character/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

      function scrollHandler() {
        console.log('Scrolling!');
      }
      document.addEventListener('scroll', scrollHandler);
      return () => {
        document.removeEventListener('scroll', scrollHandler);
      };
  }, []);


  function handleAddMessage(newMessage) {
    setMessageList([...messageList, newMessage]);
  }

  return (
    <div className="App">
      <h1>Mostramos la lista de mensajes:</h1>
      <Form handleCreateMessage={handleAddMessage} />
      <List list={messageList} />
      <Counter />
    </div>
  );
}

export default App;
