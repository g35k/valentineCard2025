import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QuestionFour/QuestionFour.css';

const QuestionFour = () => {
  const navigate = useNavigate();
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  // Function to move the button to a random position
  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90% for vertical movement
    const randomLeft = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90% for horizontal movement
    setButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveButton();
    }, 1000); // Move the button every second

    return () => clearInterval(interval); 
  }, []);

  const handleClick = () => {
    navigate('/question-5'); 
  };

  return (
    <div className="q-page4">
      <h2 className="question-text">Catch me!</h2> {/*change text here*/}
      <button
        className="q-button"
        style={{ top: buttonPosition.top, left: buttonPosition.left }}
        onClick={handleClick}
      >
        ^////^
      </button>
    </div>
  );
};

export default QuestionFour;
