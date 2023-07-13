import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignupPage.module.css';
import { useState } from 'react';
import Navbar from '../Components/Navbar';

const SigninPage = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    history: [],
  });
  const navigation = useNavigate();

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
      alert("User doesn't exist.");
      return;
    } else {
      let index = allData.findIndex(
        (user) =>
          user.email === userData.email && user.password === userData.password,
      );
      if (index !== -1) {
        alert('Logging in');
        navigation('/home');
      } else alert("User doesn't exist.");
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Sign In</h1>
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
            Sign In
          </button>
        </form>
        <p className={styles.link}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </>
  );
};

export default SigninPage;
