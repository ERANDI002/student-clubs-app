import React from 'react';
import useFetch from '../components/custom-hooks/useFetch';
import LoadingIndicator from '../components/LoadingIndicator';
import styles from './Home.module.css';

const Home = () => {
    // Use custom hook to fetch upcoming events
  const { data: upcomingEvents, loading: upcomingLoading, error: upcomingError } = useFetch('/Data/upcomingEvents.json');
  // Use custom hook to fetch past events
  const { data: pastEvents, loading: pastLoading, error: pastError } = useFetch('/Data/pastEvents.json');
 // Show the loading indicator
  if (upcomingLoading || pastLoading) {
    return <LoadingIndicator />;
  }

  if (upcomingError || pastError) {
    return <div className={styles.container}>Error loading events.</div>;
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeSection}>
        <h1>Welcome to the University Student Clubs</h1>
        <p className={styles.welcomeText}>
          Discover a wide range of student clubs and societies designed to enrich your
          university experience. Whether you are passionate about technology, arts,
          sports, or leadership, this portal will help you connect with like-minded
          peers, develop new skills, and make lifelong memories.
        </p>
      </div>

      <div className={styles.upcomingEventsSection}> 
        <h2 className={styles.whiteHeading}>Upcoming Events</h2>
    
        {upcomingEvents.length > 0 ? (
          <ul className={styles.eventList}>
            {upcomingEvents.map(event => (
              <li key={event.id} className={styles.eventItem}>
                <h3>{event.name}</h3>
                <p><strong>Club:</strong> {event.club}</p>
                <p><strong>Type:</strong> {event.type}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Venue:</strong> {event.venue}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noEvents}>No upcoming events at this time.</div>
        )}
      </div>
      
      <div className={styles.pastEventsSection}>
        <h2>Past Events</h2>
        {pastEvents.length > 0 ? (
          <ul className={styles.pastEventList}>
            {pastEvents.map(event => (
              <li key={event.id} className={styles.pastEventItem}>
                <img src={`/images/${event.image}`} alt={event.name} className={styles.pastEventImage} />
                <div className={styles.pastEventDetails}>
                  <h3>{event.name}</h3>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Club:</strong> {event.club}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noEvents}>No past events to display.</div>
        )}
      </div>
    </div>
  );
};

export default Home;