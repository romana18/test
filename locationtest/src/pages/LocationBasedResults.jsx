import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationBasedResults = () => {
  const [location, setLocation] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [radius, setRadius] = useState(10); // Default radius in kilometers

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Set location state
        setLocation({ latitude, longitude });

        // Fetch location-based results
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
          );

          // Extract location name from the response
          const locationName = response.data.results[0].formatted_address;

          // Set results state
          setResults([{ name: locationName }]); // Assuming we want to display the location name

          // Filter results based on radius
          const filteredResults = response.data.results.filter((result) => {
            // Calculate distance between current result and target location
            const distance = calculateDistance(
              latitude,
              longitude,
              result.geometry.location.lat,
              result.geometry.location.lng
            );

            // Check if the distance is within the specified radius
            return distance <= radius;
          });

          setResults(filteredResults);
        } catch (error) {
          console.error('Error fetching results:', error);
          setError('Error fetching results');
        }
      },
      (error) => {
        console.error('Error getting user location:', error);
        setError('Error getting user location. Please enable location services.');
      }
    );
  }, [radius]); // Run whenever the radius changes

  // Function to calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      <h1>Location Based Results</h1>
      {error && <p>{error}</p>}
      {location && (
        <p>
          Your current location: {location.latitude}, {location.longitude}
        </p>
      )}
      <input
        type="number"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
        placeholder="Enter radius in kilometers"
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationBasedResults;
