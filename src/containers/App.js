import React, { Component } from 'react';
import './App.css';
import Nav from '../components/Nav/Nav';
import Logo from '../components/Logo/Logo';
import ImageForm from '../components/ImageForm/ImageForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Logo />
        <ImageForm />
      </div>
    );
  }
}

export default App;
