import './App.css';
import NavbarForm from './components/NavbarForm';
import Header from './components/Header';
import FormProduct from './components/FormProduct';
import ListProduct from './components/ListProduct';

function App() {
  return (
    <div className="App">
      <NavbarForm/>
      <Header/>
      <FormProduct/>
      <ListProduct/>
    </div>
  );
}

export default App;
