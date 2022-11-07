import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Research from './components/Research';
import CV from './components/CV';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Research />
      <CV />
      <Footer />
    </div>
  );
}

export default App;
