import { useState } from 'react';
import styles from './Contact.module.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import React from 'react';

const Contact = () => {
    // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // State for form validation errors
  const [errors, setErrors] = useState({});
  // State to check if form is successfully submitted
  const [isSubmitted, setIsSubmitted] = useState(false);
 // Handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
// Validate form fields before submitting
  const validate = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

// If no validation errors, process form
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Get in Touch</h2>
        <div className={styles.infoItem}>
          <h3>Location</h3>
          <p>Colombo 12, Sri Lanka</p>
        </div>
        <div className={styles.infoItem}>
          <h3>Contact Number</h3>
          <p>+94 11 333 3333</p>
        </div>
        <div className={styles.infoItem}>
          <h3>Email</h3>
          <p>contact@usc.edu</p>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.contactForm}>
        <h1>Contact Us</h1>
        <p>Have a question or want to get in touch? Fill out the form below!</p>
        {isSubmitted && <p className={styles.successMessage}>Thank you for your message! We'll get back to you shortly.</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className={styles.errorText}>{errors.message}</p>}
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;