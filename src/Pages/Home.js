import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { incrementIngredient, decrementIngredient } from '../reducers/counter';
import { incrementPrice, decrementPrice } from '../reducers/priceCalculator';

import './Home.css';
import { displayBurger } from '../utils/displayBurger';
import Navbar from '../Components/Navbar';
import { CombinerPopup } from '../Components/styles/popup.styled';
import { CombinerBurger } from '../Components/styles/burger.styled';
import { CombinerBuilder } from '../Components/styles/builder.styled';

const Burger = () => {
  const [showPopup, setShowPopup] = useState(false);

  const lettuce = useSelector((state) => state?.rootReducer?.counter?.lettuce);
  const bacon = useSelector((state) => state?.rootReducer?.counter?.bacon);
  const cheese = useSelector((state) => state?.rootReducer?.counter?.cheese);
  const meat = useSelector((state) => state?.rootReducer?.counter?.meat);
  const price = useSelector(
    (state) => state?.rootReducer?.priceCalculator?.price,
  );
  /*
  this is a long comment that i am going to put here and later remove just to keep me awake.
  maybe i should standup for today and stop working and come tomorrow. but no, i really want to
  test my limits and really want to work till 01:00am at least. oh, this is 01:00am already. so..
  now i woulDOM in react
  - what is the difference between class components and function components
  - how to implement class components and how to to do functional components
  - what are life cycle methods.
  */
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      {showPopup && (
        <CombinerPopup.StyledPopup>
          <h2>
            <strong>Your Order Summary:</strong>
          </h2>
          <ul>
            <li>Lettuce: {lettuce}</li>
            <li>Bacon: {bacon}</li>
            <li>Cheese: {cheese}</li>
            <li>Meat: {meat}</li>
          </ul>
          <CombinerPopup.LowerPopup>
            <p>
              <strong>Total Price: ${price.toFixed(2)}</strong>
            </p>
            <p>Continue to check out?</p>
            <Link to="/checkout">
              <CombinerPopup.StyledContinue
                onClick={() =>
                  localStorage.setItem(
                    'burgerData',
                    JSON.stringify({ lettuce, bacon, cheese, meat }),
                  )
                }
              >
                Continue
              </CombinerPopup.StyledContinue>
            </Link>
            <CombinerPopup.StyledCancel onClick={() => setShowPopup(false)}>
              Cancel
            </CombinerPopup.StyledCancel>
          </CombinerPopup.LowerPopup>
        </CombinerPopup.StyledPopup>
      )}
      {showPopup || (
        <CombinerBurger.StyledBurger>
          <CombinerBurger.StyledTop>
            <CombinerBurger.StyledSeeds1></CombinerBurger.StyledSeeds1>
            <CombinerBurger.StyledSeeds2></CombinerBurger.StyledSeeds2>
          </CombinerBurger.StyledTop>
          {displayBurger({ lettuce, bacon, cheese, meat })}
          <CombinerBurger.StyledBottom></CombinerBurger.StyledBottom>
        </CombinerBurger.StyledBurger>
      )}
      <CombinerBuilder.StyledBuilder>
        <p>
          Current price: <strong>$ {price.toFixed(2)} </strong>
        </p>
        <CombinerBuilder.StyledIngredientsBlock>
          <CombinerBuilder.StyledButtonLine>
            <CombinerBuilder.StyledText>
              <strong>Lettuce</strong>
            </CombinerBuilder.StyledText>
            <CombinerBuilder.StyledButtonLess
              disabled={lettuce === 0}
              onClick={() => {
                dispatch(decrementIngredient('lettuce'));
                dispatch(decrementPrice('lettuce'));
              }}
            >
              Less
            </CombinerBuilder.StyledButtonLess>
            <CombinerBuilder.StyledButtonMore
              onClick={() => {
                dispatch(incrementIngredient('lettuce'));
                dispatch(incrementPrice('lettuce'));
              }}
            >
              More
            </CombinerBuilder.StyledButtonMore>
          </CombinerBuilder.StyledButtonLine>
          <CombinerBuilder.StyledButtonLine>
            <CombinerBuilder.StyledText>
              <strong>Bacon</strong>
            </CombinerBuilder.StyledText>
            <CombinerBuilder.StyledButtonLess
              disabled={bacon === 0}
              onClick={() => {
                dispatch(decrementIngredient('bacon'));
                dispatch(decrementPrice('bacon'));
              }}
            >
              Less
            </CombinerBuilder.StyledButtonLess>
            <CombinerBuilder.StyledButtonMore
              onClick={() => {
                dispatch(incrementIngredient('bacon'));
                dispatch(incrementPrice('bacon'));
              }}
            >
              More
            </CombinerBuilder.StyledButtonMore>
          </CombinerBuilder.StyledButtonLine>
          <CombinerBuilder.StyledButtonLine>
            <CombinerBuilder.StyledText>
              <strong>Cheese</strong>
            </CombinerBuilder.StyledText>
            <CombinerBuilder.StyledButtonLess
              disabled={cheese === 0}
              onClick={() => {
                dispatch(decrementIngredient('cheese'));
                dispatch(decrementPrice('cheese'));
              }}
            >
              Less
            </CombinerBuilder.StyledButtonLess>
            <CombinerBuilder.StyledButtonMore
              onClick={() => {
                dispatch(incrementIngredient('cheese'));
                dispatch(incrementPrice('cheese'));
              }}
            >
              More
            </CombinerBuilder.StyledButtonMore>
          </CombinerBuilder.StyledButtonLine>
          <CombinerBuilder.StyledButtonLine>
            <CombinerBuilder.StyledText>
              <strong>Meat</strong>
            </CombinerBuilder.StyledText>
            <CombinerBuilder.StyledButtonLess
              disabled={meat === 0}
              onClick={() => {
                dispatch(decrementIngredient('meat'));
                dispatch(decrementPrice('meat'));
              }}
            >
              Less
            </CombinerBuilder.StyledButtonLess>
            <CombinerBuilder.StyledButtonMore
              onClick={() => {
                dispatch(incrementIngredient('meat'));
                dispatch(incrementPrice('meat'));
              }}
            >
              More
            </CombinerBuilder.StyledButtonMore>
          </CombinerBuilder.StyledButtonLine>
          <CombinerBuilder.StyledOrder
            disabled={
              lettuce === 0 && bacon === 0 && cheese === 0 && meat === 0
            }
            type="submit"
            onClick={() => {
              setShowPopup(true);
            }}
          >
            Order Now!
          </CombinerBuilder.StyledOrder>
        </CombinerBuilder.StyledIngredientsBlock>
      </CombinerBuilder.StyledBuilder>
    </>
  );
};

export default Burger;
