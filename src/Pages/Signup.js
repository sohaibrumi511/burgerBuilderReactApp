import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './SignupPage.module.css';
import Navbar from '../Components/Navbar';

const SignupPage = () => {
  const navigation = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    history: [],
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let allData = JSON.parse(localStorage.getItem('userData'));
    if (allData === null) {
      allData = [];
    }
    let index = allData.findIndex((user) => user.email === userData.email);
    if (index !== -1) {
      alert('User already exists.');
      return;
    }
    allData.push(userData);
    localStorage.setItem('userData', JSON.stringify(allData));
    alert('User created successfully.');
    navigation('/home');
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form className={styles.form}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={styles.input}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={styles.input}
            onChange={handleChange}
          />
          <button className={styles.button} onClick={submitForm}>
            Sign Up
          </button>
        </form>
        <p className={styles.link}>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </>
  );
};

export default SignupPage;
