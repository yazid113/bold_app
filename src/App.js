import Header from './components/Header/Header';
import './App.css';
import ListaVentas from './components/Ventas/ListaVentas';
import data from './data'
import TotalVentas from './components/Ventas/TotalVentas';

function App() {
  return (
    <div className="App">
      <Header />
      <TotalVentas />
      
    </div>
  );
}

export default App;
