import './App.css';
import Home from './components/Home';
import { ThemeProvider} from './contexts/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/Cart/CartContext';
import AuthChecker from './components/AuthChecker';
import UserAccount from './components/UserAccount';
import HeaderFooter from './components/HeaderFooter';
import NotFound from './components/NotFound';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart';


function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element = {<HeaderFooter />}>
                <Route index element = {<Home />} />
                <Route exact path="/Shop" element={<Shop />} />
                <Route path="/Login" element = {<Login />} />
                <Route path="/Cart" element = {<Cart />} />
                <Route path="/UserAccount" element = {
                  <AuthChecker>
                    <UserAccount />
                  </AuthChecker>
                } />
                <Route path="*" element = {<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
