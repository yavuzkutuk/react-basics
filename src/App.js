import './assets/css/app.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div>
      <Header/>
      <Main />
      <Footer />
    </div>
/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
