import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// const { uuid } = require('uuidv4');

function Form({ handleCreateMessage }) {
    const [value, setValue] = useState('');
  
    function handleSubmitForm(ev) {
      ev.preventDefault();
  
      handleCreateMessage({
        id: uuidv4(),
        text: value,
      });
    }
  
    function handleChangeInput(ev) {
      setValue(ev.target.value);
    }
  
    return (
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={value} onChange={handleChangeInput} />
        <button type="submit">Crear mensaje</button>
      </form>
    );
  }

export default Form;