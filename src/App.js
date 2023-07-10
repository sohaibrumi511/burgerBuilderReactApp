import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Signin';
import SignupPage from './Pages/Signup';
import Checkout from './Pages/Checkout';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );  
};

export default App;