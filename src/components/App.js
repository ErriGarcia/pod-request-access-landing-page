import '../styles/App.scss';
import logo from "../images/desktop/logo.svg"

function App() {
  return (
    <div>
      <img src={logo}></img>
      <h1>Publish your podcasts everywhere.</h1>
      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
        Apple Podcasts, Google Podcasts, Pocket Casts and more!
        Request access
      </p>
    </div>
  );
}

export default App;
