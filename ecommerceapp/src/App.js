import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage';
import Checkout from "./pages/Checkout";
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
</Router>
  );
}

export default App;