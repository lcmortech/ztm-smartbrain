import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import ImageLinkForm from './components/ImageLinkform';
import Logo from './components/Logo';
import Rank from './components/Rank';
import 'tachyons';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const App = () => {
  return (
    <div className="App">
      <Particles className='particles' 
            		params= {particlesOptions}

            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
