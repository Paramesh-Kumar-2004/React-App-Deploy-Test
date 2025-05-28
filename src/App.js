import logo from "./VP.jpeg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>By VP</b>
          <br />
          <a href="https://github.com/Paramesh-Kumar-2004" target="_b">Github</a>
          &#160;&#160;&#160;
          <a href="https://www.linkedin.com/in/paramesh-kumar-s-047632249/" target="_b">LinkedIn</a>
          <br /><br />
          This repository is created to test the deployment of a React application using GitHub Pages (gh-pages). It demonstrates how to set up a React project for deployment, configure the gh-pages package, and host the build output on GitHub Pages for public access.
          <br />
          Thank You
        </p>
      </header>
    </div>
  );
}

export default App;
