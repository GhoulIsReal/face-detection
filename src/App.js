import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const particlesParams = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 80
        }
      }
    }
  }

function App() {
  return (
    <div className="App">
        <Particles className='particles'
              params={particlesParams}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
    </div>
  );
}

export default App;
