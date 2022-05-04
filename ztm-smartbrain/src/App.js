import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import 'tachyons';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/*<ImageLinkForm />
      <FaceRecognition />*/}
    </div>
  );
}

export default App;
