import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Nav from '../components/Nav/Nav';
import Logo from '../components/Logo/Logo';
import ImageForm from '../components/ImageForm/ImageForm';
import Rank from '../components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '5e6319488c3e4d4188e84f5844603111',
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
    };
  }

  onInputChange = e => {
    console.log(e.target.value);
  };

  onDetectButtonSubmit = () => {
    console.log('click');
    app.models
      .predict(
        'a403429f2ddf4b49b307e318f00e528b',
        'https://samples.clarifai.com/face-det.jpg',
      )
      .then(
        function(response) {
          // do something with response
          console.log(response);
        },
        function(err) {
          // there was an error
        },
      );
  };

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
        <ImageForm
          onInputChange={this.onInputChange}
          onDetectButtonSubmit={this.onDetectButtonSubmit}
        />
      </div>
    );
  }
}

export default App;
