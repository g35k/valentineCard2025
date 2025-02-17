import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QuestionOne/QuestionOne.css';

const QuestionOne = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/question-2'); //change route if needed
    };

    return (
        <div className="question 1 page">
            <button className="click-button-1" onClick={handleClick}>Over here!!</button>
        </div>
    );
};

export default QuestionOne;
