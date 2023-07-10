import './Home.css';
import Navbar from '../Components/Navbar';
import { displayBurger } from '../utils/displayBurger';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const navigation = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        street: '',
        zipCode: '',
        country: '',
        email: ''
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    const submitForm = (e) => {
        e.preventDefault();
        localStorage.setItem('usersData', JSON.stringify(userData));
        if(window.confirm('Burger bs pohuncha smjho.'))
        {
            navigation('/');
        }
    }
    return (
        <>
            <Navbar />
            <div className="burger">
                <h1>We hope it tastes well!</h1>
                <div className="top">
                    <div className="seeds1"></div>
                    <div className="seeds2"></div>
                </div>
                {displayBurger(JSON.parse(localStorage.getItem('data')))}
                <div className="bottom"></div>
            </div>
            <div>
                <form className='form'>
                    <h2>Enter your contact detail</h2>
                    <input name='name' type="name" placeholder="Name" className='input' onChange={handleChange} />
                    <input name='street' type="street" placeholder="Street" className='input' onChange={handleChange} />
                    <input name='zipCode' type="zipCode" placeholder="Zip Code" className='input' onChange={handleChange} />
                    <input name='country' type="country" placeholder="Country" className='input' onChange={handleChange} />
                    <input name='email' type="Email" placeholder="E-mail" className='input' onChange={handleChange} />
                    <button className='order2' onClick={submitForm}>Order</button>
                </form>
            </div>
        </>
    )
}

export default Checkout;
