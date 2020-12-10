import './App.css';
import MyNavBar from './components/MyNavBar'
import Carrousell from './components/Carrousell'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList'


function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Carrousell />
      <div className="browseProducts">Browse Products</div>
      <ProductList />
    </div>
  );
}

export default App;
