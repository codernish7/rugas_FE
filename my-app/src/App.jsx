import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Function to update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => new Date(prevTime.getTime() - 1000)); // Reduce 1 second
    }, 1);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Reset function to reset time to the latest time
  const handleReset = () => {
    setCurrentTime(new Date());
  };

  // Format time to HH:mm:ss
  const formattedTime = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`;

  return (
    <>
      <div>{formattedTime}</div>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
