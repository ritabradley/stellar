import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Nav from '../components/Nav/Nav';
import Logo from '../components/Logo/Logo';
import ImageForm from '../components/ImageForm/ImageForm';
import Rank from '../components/Rank/Rank';
import FaceRecognizer from '../components/FaceRecoginzer/FaceRecognizer';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
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
    const { input } = this.state;
    const { id } = this.state.user;
    this.setState({ imageUrl: input });
    fetch('https://sleepy-crag-47754.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://sleepy-crag-47754.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id,
            }),
          })
            .then(response => response.json())
            .then(count => {
              this.setState(
                Object.assign(this.state.user, {
                  entries: count,
                }),
              );
            });
        }
        this.displayFaceDetectionBox(this.calcFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  onRouteChange = route => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    const { name, entries } = this.state.user;
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
        <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' ? (
          <div>
            <Logo />
            <h1 className='title'>Stellar</h1>
            <Rank name={name} entries={entries} />
            <ImageForm
              onInputChange={this.onInputChange}
              onDetectButtonSubmit={this.onDetectButtonSubmit}
            />
            <FaceRecognizer box={box} imageUrl={imageUrl} />
          </div>
        ) : route === 'signin' || route === 'signout' ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
