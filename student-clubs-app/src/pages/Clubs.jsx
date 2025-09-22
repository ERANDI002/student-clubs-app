import React, { useState } from 'react';
import useFetch from '../components/custom-hooks/useFetch';
import LoadingIndicator from '../components/LoadingIndicator';
import styles from './Clubs.module.css';
import { Link } from 'react-router-dom';

const Clubs = () => {
  const { data: clubs, loading, error } = useFetch('/Data/clubs.json');
  const [expandedClubs, setExpandedClubs] = useState({});

  const toggleExpanded = (id) => {
    setExpandedClubs(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.clubsContainer}>
      <h1 className={styles.pageTitle}>Student Clubs & Societies</h1>
      <div className={styles.clubGrid}>
        {clubs.map(club => {
          const isExpanded = expandedClubs[club.id];
          const description = club.description;
          const truncatedDescription = description.substring(0, 150) + '...';

          return (
            // Wrap the entire club card in a Link component
            <Link to={`/clubs/${club.id}`} key={club.id} className={styles.clubCardLink}>
              <div className={styles.clubCard}>
                <img src={`/images/${club.image}`} alt={club.name} className={styles.clubImage} />
                <div className={styles.cardContent}>
                  <h2 className={styles.clubName}>{club.name}</h2>
                  <p className={styles.clubDescription}>
                    {isExpanded ? description : truncatedDescription}
                  </p>
                  {description.length > 150 && (
                    <button 
                      onClick={(e) => {
                        e.preventDefault(); // Prevent link from navigating
                        toggleExpanded(club.id);
                      }} 
                      className={styles.readMoreButton}
                    >
                      {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                  )}
                  <div className={styles.details}>
                    <p><strong>Contact:</strong> {club.contact}</p>
                    <p><strong>In Charge:</strong> {club.inCharge}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Clubs;