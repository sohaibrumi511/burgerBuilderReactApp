import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { incrementIngredient, decrementIngredient } from '../reducers/counter';
import { incrementPrice, decrementPrice } from '../reducers/priceCalculator';
import './Home.css';
import Navbar from '../Components/Navbar';
import { displayBurger } from '../utils/displayBurger';

const Burger = () => {
  const lettuce = useSelector((state) => state?.rootReducer?.counter?.lettuce);
  const bacon = useSelector((state) => state?.rootReducer?.counter?.bacon);
  const cheese = useSelector((state) => state?.rootReducer?.counter?.cheese);
  const meat = useSelector((state) => state?.rootReducer?.counter?.meat);
  const price = useSelector(
    (state) => state?.rootReducer?.priceCalculator?.price,
  );

  const dispatch = useDispatch();

  let popup = document.getElementById('popup');
  const openPopup = () => popup.classList.add('openPopup');

  const closePopup = () => popup.classList.remove('openPopup');

  return (
    <>
      <Navbar />
      <div className="popup" id="popup">
        <h3>
          <strong>Your Order Summary:</strong>
        </h3>
        <ul>
          <li>Lettuce: {lettuce}</li>
          <li>Bacon: {bacon}</li>
          <li>Cheese: {cheese}</li>
          <li>Meat: {meat}</li>
        </ul>
        <div className="lowerPopup">
          <p>
            <strong>Total Price: ${price.toFixed(2)}</strong>
          </p>
          <p>Continue to check out?</p>
          <Link to="/checkout">
            <button
              className="continue"
              onClick={() =>
                localStorage.setItem(
                  'burgerData',
                  JSON.stringify({ lettuce, bacon, cheese, meat }),
                )
              }
            >
              Continue
            </button>
          </Link>
          <button className="cancel" onClick={() => closePopup()}>
            Cancel
          </button>
        </div>
      </div>
      <div className="burger">
        <div className="top">
          <div className="seeds1"></div>
          <div className="seeds2"></div>
        </div>
        {displayBurger({ lettuce, bacon, cheese, meat })}
        <div className="bottom"></div>
      </div>
      <div className="builder">
        <p>
          Current price: <strong>$ {price.toFixed(2)} </strong>
        </p>
        <div className="ingredientsBlock">
          <div className="buttonLine">
            <p className="text">
              <strong>Lettuce</strong>
            </p>
            <button
              className="less"
              disabled={lettuce === 0}
              onClick={() => {
                dispatch(decrementIngredient('lettuce'));
                dispatch(decrementPrice('lettuce'));
              }}
            >
              Less
            </button>
            <button
              className="more"
              onClick={() => {
                dispatch(incrementIngredient('lettuce'));
                dispatch(incrementPrice('lettuce'));
              }}
            >
              More
            </button>
          </div>
          <div className="buttonLine">
            <p className="text">
              <strong>Bacon</strong>
            </p>
            <button
              className="less"
              disabled={bacon === 0}
              onClick={() => {
                dispatch(decrementIngredient('bacon'));
                dispatch(decrementPrice('bacon'));
              }}
            >
              Less
            </button>
            <button
              className="more"
              onClick={() => {
                dispatch(incrementIngredient('bacon'));
                dispatch(incrementPrice('bacon'));
              }}
            >
              More
            </button>
          </div>
          <div className="buttonLine">
            <p className="text">
              <strong>Cheese</strong>
            </p>
            <button
              className="less"
              disabled={cheese === 0}
              onClick={() => {
                dispatch(decrementIngredient('cheese'));
                dispatch(decrementPrice('cheese'));
              }}
            >
              Less
            </button>
            <button
              className="more"
              onClick={() => {
                dispatch(incrementIngredient('cheese'));
                dispatch(incrementPrice('cheese'));
              }}
            >
              More
            </button>
          </div>
          <div className="buttonLine">
            <p className="text">
              <strong>Meat</strong>
            </p>
            <button
              className="less"
              disabled={meat === 0}
              onClick={() => {
                dispatch(decrementIngredient('meat'));
                dispatch(decrementPrice('meat'));
              }}
            >
              Less
            </button>
            <button
              className="more"
              onClick={() => {
                dispatch(incrementIngredient('meat'));
                dispatch(incrementPrice('meat'));
              }}
            >
              More
            </button>
          </div>
          <button
            disabled={
              lettuce === 0 && bacon === 0 && cheese === 0 && meat === 0
            }
            className="order"
            type="submit"
            onClick={() => openPopup()}
          >
            Order Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default Burger;
