import { useState, useEffect } from 'react';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// Custom hook: useFetch
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        await delay(500); 

  // Fetch data from the provided URL
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

    // Convert response into JSON    
        const result = await response.json();
        setData(result);
      } catch (e) {
        console.error("Failed to fetch data:", e);
        setError(e.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };
// Call the async function
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;