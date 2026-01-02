
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Info from './pages/BrandInfo'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="product" element={<Product/>} />
              <Route path="brandinfo" element={<Info />} />
         
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;







