import React, { useState } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import { Link} from 'react-router-dom';
import { displayBurger } from '../utils/displayBurger';
const Burger = () => {
    const [lettuce, setLettuce] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);
    const [price, setPrice] = useState(3);

    const prices = {
        lettuce: 0.5,
        bacon: 0.7,
        cheese: 0.4,
        meat: 1.3
    };

    const makeBurger = (action, ingredient) => {
        let turneryVar;
        if (action === 'more') {
            turneryVar = 1;
            setPrice(price + prices[ingredient]);
        } else {
            turneryVar = -1;
            price > 3 ? setPrice(price - prices[ingredient]) : setPrice(3);
        }
        switch (ingredient) {
            case 'lettuce':
                lettuce + turneryVar > 0 ? setLettuce(lettuce + turneryVar) : setLettuce(0);
                break;
            case 'bacon':
                bacon + turneryVar > 0 ? setBacon(bacon + turneryVar) : setBacon(0);
                break;
            case 'cheese':
                cheese + turneryVar > 0 ? setCheese(cheese + turneryVar) : setCheese(0);
                break;
            case 'meat':
                meat + turneryVar > 0 ? setMeat(meat + turneryVar) : setMeat(0);
                break;
            default:
                break;
        }
    };

    const returnPrice = () => {
        return price.toFixed(2);
    };


    let popup = document.getElementById('popup');
    const openPopup = () => {
        popup.classList.add("openPopup");        
    };
    const closePopup = () => {
        popup.classList.remove("openPopup");
    };

    return (
        <>
            <Navbar />
            <div className='popup' id='popup'>
                <h3><strong>Your Order Summary:</strong></h3>
                <ul>
                    <li>
                        Lettuce: {lettuce}
                    </li>
                    <li>
                        Bacon: {bacon}
                    </li>
                    <li>
                        Cheese: {cheese}
                    </li>
                    <li>
                        Meat: {meat}
                    </li>
                </ul>
                <br></br>
                <div className='lowerPopup'>
                    <p><strong>Total Price: ${returnPrice()}</strong></p>
                    <p>Continue to check out?</p>
                    <Link to='/checkout'><button className='continue' onClick={JSON.parse(localStorage.getItem('data'))}>Continue</button></Link>
                    <button className='cancel' onClick={() => closePopup()} >Cancel</button>
                </div>
            </div>
            <div className="burger">
                <div className="top">
                    <div className="seeds1"></div>
                    <div className="seeds2"></div>
                </div>
                {displayBurger({lettuce, bacon, cheese, meat})}
                <div className="bottom"></div>
            </div>
            <div className="builder">
                <p>Current price: <strong>$ {returnPrice()}</strong></p>
                <div className="ingredientsBlock">
                    <div className="buttonLine">
                        <p className="text"><strong>Lettuce</strong></p>
                        <button className="less"  onClick={() => makeBurger('', 'lettuce')}>
                            Less
                        </button>
                        <button className="more" onClick={() => makeBurger('more', 'lettuce')}>
                            More
                        </button>
                    </div>
                    <div className="buttonLine">
                        <p className="text"><strong>Bacon</strong></p>
                        <button className="less" onClick={() => makeBurger('', 'bacon')}>
                            Less
                        </button>
                        <button className="more" onClick={() => makeBurger('more', 'bacon')}>
                            More
                        </button>
                    </div>
                    <div className="buttonLine">
                        <p className="text"><strong>Cheese</strong></p>
                        <button className="less" onClick={() => makeBurger('', 'cheese')}>
                            Less
                        </button>
                        <button className="more" onClick={() => makeBurger('more', 'cheese')}>
                            More
                        </button>
                    </div>
                    <div className="buttonLine">
                        <p className="text"><strong>Meat</strong></p>
                        <button className="less" onClick={() => makeBurger('', 'meat')}>
                            Less
                        </button>
                        <button className="more" onClick={() => makeBurger('more', 'meat')}>
                            More
                        </button>
                    </div>
                    <button disabled={lettuce === 0 || bacon === 0 || cheese === 0 || meat === 0}
                    className="order" type="submit" onClick={() => openPopup()}>Order Now!</button>
                    {/* <Link to='checkout'><button className="order" type="submit" onClick={JSON.parse(localStorage.getItem('data'))}>Order Now!</button></Link> */}
                </div>
            </div>
        </>
    );
};

export default Burger;
