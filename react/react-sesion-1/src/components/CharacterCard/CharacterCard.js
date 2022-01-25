import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CharacterCard.css';

class CharacterCard extends Component {
    render() {
      const { name, imageUrl, movie, description } = this.props.character;
  
      return (
        <div
          style={{
            border: '1px solid grey',
            borderRadius: '0.25rem',
            padding: '0.5rem',
            maxWidth: '250px'
          }}
        >
          <h3>Name: {this.props.character.name}</h3>
          <img width="100px" src={this.props.character.imageUrl} alt={this.props.character.name} />
          <h3>Movie: {this.props.character.movie}</h3>
          <h3>Description: {this.props.character.description}</h3>
        </div>
      );
    }
  }
  
  CharacterCard.propTypes = {
    character: PropTypes.shape({
      name: PropTypes.string,
      movie: PropTypes.string,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  };
  
  export default CharacterCard;