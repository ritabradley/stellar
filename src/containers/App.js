import React, { Component } from 'react';
import './App.css';
import Nav from '../components/Nav/Nav';
import Logo from '../components/Logo/Logo';
import ImageForm from '../components/ImageForm/ImageForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Particles
          className='particles'
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.07,
              },
              move: {
                direction: 'none',
                speed: 0.8,
              },
              shape: {
                type: 'star',
              },
              size: {
                value: 2,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'push',
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
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
