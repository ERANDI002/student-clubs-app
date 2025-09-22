import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../components/custom-hooks/useFetch';
import LoadingIndicator from '../components/LoadingIndicator';
import styles from './ClubDetails.module.css';

const ClubDetails = () => {
  const { id } = useParams();
  // Use custom hook to fetch all club data from JSON
  const { data: clubs, loading, error } = useFetch('/Data/clubs.json');
  // State to store the current club's details
  const [club, setClub] = useState(null);

  useEffect(() => {
    if (clubs) {
      const foundClub = clubs.find(c => c.id === id);
      setClub(foundClub);
    }
  }, [clubs, id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className={styles.container}>Error: {error}</div>;
  }

  if (!club) {
    return <div className={styles.container}>Club not found.</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>
        <img src={`/images/${club.image}`} alt={club.name} className={styles.detailsImage} />
        <h1>{club.name}</h1>
      </div>
      <div className={styles.detailsContent}>
        <h2>About this Club</h2>
        <p className={styles.description}>{club.description}</p>
        <h3 className={styles.subHeading}>Purpose</h3>
        <p className={styles.purpose}>{club.purpose}</p>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <p><strong>Practice Days:</strong> {club.practiceDays.join(', ')}</p>
          </div>
          <div className={styles.infoItem}>
            <p><strong>Practice Time:</strong> {club.practiceTime}</p>
          </div>
          <div className={styles.infoItem}>
            <p><strong>In Charge:</strong> {club.inCharge}</p>
          </div>
          <div className={styles.infoItem}>
            <p><strong>Contact:</strong> {club.contact}</p>
          </div>
        </div>
      </div>
      <div className={styles.backButtonContainer}>
        <Link to="/clubs" className={styles.backButton}>&larr; Back to Clubs</Link>
      </div>
    </div>
  );
};

export default ClubDetails;