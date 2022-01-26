import React, {Component} from 'react';

import './Example.css';

export default class Example extends Component {
    componentWillUnmount() {
      console.log('Example componentWillUnmount - ¡Desmontando componente!');
    }
  
    render() {
      return <h3>¡Este componente puede desmontarse!</h3>;
    }
  }