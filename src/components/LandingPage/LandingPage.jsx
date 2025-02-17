import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LandingPage/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/question-1'); 
    };

    return (
        <div className="landing-page">
            <button className="click-button" onClick={handleClick}>Click Here!</button> {/*change text here*/}
        </div>
    );
};

export default LandingPage;
