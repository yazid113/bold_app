import Header from './components/Header/Header';
import './App.css';
import ListaVentas from './components/Ventas/ListaVentas';
import VentasInfo from './components/Ventas/VentasInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <VentasInfo />
      <ListaVentas />
    </div>
  );
}

export default App;
