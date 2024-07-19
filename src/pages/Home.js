import React from 'react';
import Mountains from '../assets/mountains.jpg';
import styles from './Home.module.css'; // Import the CSS module

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={Mountains} alt='error' className={styles.image} />
      <div className={styles.overlay}>
        <h1 className={styles.title}>Building Responsive Landing Page</h1>
        <p className={styles.description}>
          This is a responsive landing page navbar implemented for the internship using React.js, Bootstrap, and React Router DOM
        </p>
        <button className={styles.button}>Start Now</button>
      </div>
    </div>
  );
}

export default Home;
