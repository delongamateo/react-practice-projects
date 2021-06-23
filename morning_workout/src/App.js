import Header from './components/Header';
import Search from './components/Search';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id="page">

        <Header />

        <div id="main">
            <Search />

            <div className="content">
                <h1>Products</h1>

                <ProductList />

            </div>

        </div>

        <Footer />

    </div>
  );
}

export default App;
