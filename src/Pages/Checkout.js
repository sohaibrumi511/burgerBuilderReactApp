import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { resetIngredient } from '../reducers/counter';
import { resetPrice } from '../reducers/priceCalculator';

import './Home.css';
import Navbar from '../Components/Navbar';
import { displayBurger } from '../utils/displayBurger';

const Checkout = () => {
  const navigation = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: '',
    street: '',
    zipCode: '',
    country: '',
    email: '',
  });
  const lettuce = useSelector((state) => state?.rootReducer?.counter?.lettuce);
  const bacon = useSelector((state) => state?.rootReducer?.counter?.bacon);
  const cheese = useSelector((state) => state?.rootReducer?.counter?.cheese);
  const meat = useSelector((state) => state?.rootReducer?.counter?.meat);
  const price = useSelector(
    (state) => state?.rootReducer?.priceCalculator?.price,
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    if (window.confirm('Burger bs pohuncha smjho.')) {
      dispatch(resetIngredient('lettuce'));
      dispatch(resetIngredient('bacon'));
      dispatch(resetIngredient('cheese'));
      dispatch(resetIngredient('meat'));
      dispatch(resetPrice());
      navigation('/home');
    }
  };
  return (
    <>
      <Navbar />
      <div className="burger">
        <h1>We hope it tastes well!</h1>
        <div className="top">
          <div className="seeds1"></div>
          <div className="seeds2"></div>
        </div>
        {displayBurger(JSON.parse(localStorage.getItem('burgerData')))}
        <div className="bottom"></div>
      </div>
      <div>
        <form className="form">
          <h2>Enter your contact details</h2>
          {/* Apply Mapping on it. */}
          <input
            name="name"
            type="name"
            placeholder="Name"
            className="input"
            onChange={handleChange}
          />
          <input
            name="street"
            type="street"
            placeholder="Street"
            className="input"
            onChange={handleChange}
          />
          <input
            name="zipCode"
            type="zipCode"
            placeholder="Zip Code"
            className="input"
            onChange={handleChange}
          />
          <input
            name="country"
            type="country"
            placeholder="Country"
            className="input"
            onChange={handleChange}
          />
          <input
            name="email"
            type="Email"
            placeholder="E-mail"
            className="input"
            onChange={handleChange}
          />
          <button className="order2" onClick={submitForm}>
            Order
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
