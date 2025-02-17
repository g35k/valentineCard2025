import React from 'react';
import '../../styles/CardPage/ClosedCard.css';
import cardImage from '../../assets/placeholder1.jpg';
import { useNavigate } from 'react-router-dom';

const ClosedCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/open-card'); 
  };

  return (
    <div className="closed-card">
      <div className="text-left">Valentine's Day Card for You!</div> {/*change text here*/}
      <div className="click-here-text">Open!</div> {/*change text here*/}
      <img src={cardImage} alt="Valentine's Day Card" className="card-image" />
      <button className="arrow-button" onClick={handleClick}>--&gt;</button>
    </div>
  );
};

export default ClosedCard;
