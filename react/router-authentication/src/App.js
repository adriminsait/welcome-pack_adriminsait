import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import Home from './components/Home/Home';
import LoginForm from './components/LoginForm';
import SecureRoute from './components/SecureRoute/SecureRoute';
import Secret from './components/Secret/Secret';
import NoUserRoute from './components/NoUserComponent';

import './App.css';

class App extends Component {
  state = {
    user: true,
    isLoading: false,
  }

  handleInitUser = (userData) => {
    this.setState({ user: true });
  };

  render(){
    const hasUser = !this.state.user;

    return (
      <BrowserRouter>
        <div className="App">
          {this.state.isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <Routes>
              <SecureRoute
                hasUser={hasUser}
                path="/secret"
                exact element={(props) => (
                  <Secret {...props} handleLogout={this.handleLogout} />
                )}
              />
              <NoUserRoute
                hasUser={hasUser}
                path="/register"
                exact element={(props) => (
                  <RegisterForm {...props} handleInitUser={this.handleInitUser} />
                )}
              />
              <NoUserRoute
                hasUser={hasUser}
                path="/login"
                exact element={(props) => (
                  <LoginForm {...props} handleInitUser={this.handleInitUser} />
                )}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          )}
        </div>
          {/* <Routes>
            <Route path="/register" exact element={<RegisterForm />} />
            <Route path="/login" exact element={<LoginForm />} />
            <Route path="/" element={<Home />} />
          </Routes> */}
      </BrowserRouter>
    );
  }
}

export default App;
