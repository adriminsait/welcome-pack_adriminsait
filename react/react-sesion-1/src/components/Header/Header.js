import React from 'react';

import './Header.css';

class Header extends React.Component {
    render() {
      return (
        <header>
          <img src={this.props.image} alt="User image" />
          <h1>{this.props.fullName}</h1>
        </header>
      );
    }
}

export default Header;