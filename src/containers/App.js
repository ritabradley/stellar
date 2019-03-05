import React, { Component } from 'react';
import './App.css';
import Nav from '../components/Nav/Nav';
import Logo from '../components/Logo/Logo';
import ImageForm from '../components/ImageForm/ImageForm';
import Rank from '../components/Rank/Rank';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Logo />
        <h1 className='title'>Stellar</h1>
        <Rank />
        <ImageForm />
      </div>
    );
  }
}

export default App;
