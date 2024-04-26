import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { RecoilRoot } from 'recoil';
import Cart from './pages/Cart';
import { SingleItem } from './pages/SingleItem';
import Order from './pages/Order';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/user/signin" element={<Signin />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item" element={<SingleItem />} />
        <Route path="/order" element={<Order></Order>}/>
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
