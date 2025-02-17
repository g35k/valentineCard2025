import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/OpenPage/OpenCard.css';
import cardImage2 from '../../assets/placeholder2.png';

const OpenCard = () => {
  const navigate = useNavigate();

  const handleGoAgain = () => {
    navigate('/');  // Navigate back to the landing page
  };

  return (
    <div className="open-card">
      <img src={cardImage2} alt="Open Card" className="card-image2" />
      <button className="go-again-button" onClick={handleGoAgain}>Play again?</button> {/*change text here*/}
    </div>
  );
};

export default OpenCard;
