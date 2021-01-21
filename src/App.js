import './App.css';
import PhotoCard from './PhotoCard';
import PhotoGallery from './PhotoGallery';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!!!</h1>
        <p className="message">Wow! That's cool!</p>
        <PhotoGallery  />
      </header>
    </div>
  );
}

export default App;


/*
To use an Emmet shortcut:
-type what you would in a CSS files:
  -example: p.message 
- then press the Tab key to expand into:
  - <p className="mesage"></p>
*/