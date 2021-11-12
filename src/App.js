import './App.css';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
