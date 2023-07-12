import './Home.css';
import Navbar from '../Components/Navbar';
import { displayBurger } from '../utils/displayBurger';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigation = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: '',
    street: '',
    zipCode: '',
    country: '',
    email: '',
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    // const burgerData = JSON.parse(localStorage.getItem('burgerData'));
    // const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log("Before")
    // console.log(userData)
    // if(userData !== null)

    // {
    //     let index = userData.findIndex((user) => user.email === userData.email[index])

    //     if (index !== -1) {
    //         console.log("After After")
    //         console.log(userData[index  ])
    //         userData[index]?.history?.push(burgerData);
    //
    //     }
    // }
    // localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    if (window.confirm('Burger bs pohuncha smjho.')) {
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
