import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutSection}>
        <h1 className={styles.aboutHeading}>Our Mission</h1>
        <p className={styles.aboutText}>
          The University Students Clubs is your gateway to campus life. Our mission is to seamlessly connect students with a wide range of vibrant clubs and societies. By providing a centralized platform, we aim to empower students to explore their passions, build essential leadership skills, and forge lasting connections with like-minded peers.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <h1 className={styles.aboutHeading}>The Team</h1>
        <p className={styles.aboutText}>
          This portal was professionally designed and developed by a dedicated team of students committed to enhancing the university experience. We believe that technology can create stronger communities, and our goal is to provide a reliable, intuitive platform that serves as the foundation for student success.
        </p>
      </section>
    </div>
  );
};

export default About;