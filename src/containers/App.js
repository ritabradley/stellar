import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Nav from '../components/Nav/Nav';
import Logo from '../components/Logo/Logo';
import ImageForm from '../components/ImageForm/ImageForm';
import Rank from '../components/Rank/Rank';
import FaceRecognizer from '../components/FaceRecoginzer/FaceRecognizer';
import Signin from '../components/Signin/Signin';
import './App.css';

const app = new Clarifai.App({
  apiKey: '5e6319488c3e4d4188e84f5844603111',
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
    };
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  displayFaceDetectionBox = box => {
    this.setState({ box });
  };

  calcFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  onDetectButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceDetectionBox(this.calcFaceLocation(response)),
      )
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    this.setState({ route });
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
        <Nav onRouteChange={this.onRouteChange} />
        {this.state.route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Logo />
            <h1 className='title'>Stellar</h1>
            <Rank />
            <ImageForm
              onInputChange={this.onInputChange}
              onDetectButtonSubmit={this.onDetectButtonSubmit}
            />
            <FaceRecognizer
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
