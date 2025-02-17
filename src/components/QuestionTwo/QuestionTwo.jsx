import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QuestionTwo/QuestionTwo.css';

const QuestionTwo = () => {
    const navigate = useNavigate();

    // Handle button clicks
    const handleClick = (buttonIndex) => {
        if (buttonIndex === 2) {
            navigate('/question-3'); // Navigate to Question Three page
        } else {
            alert('You really don\'t know?'); {/*change alert here*/}
        }
    };

    return (
        <div className="q-page2">
            <h2 className="q2-question">How much wood could a wood chuck chuck? </h2> {/*change text here*/}
            <button className="q2-button" onClick={() => handleClick(1)}>A lot</button> {/*change text here*/}
            <button className="q2-button" onClick={() => handleClick(2)}>Like a lot a lot</button> {/*change text here*/}
            <button className="q2-button" onClick={() => handleClick(3)}>Three?</button> {/*change text here*/}
            <button className="q2-button" onClick={() => handleClick(4)}>IDK</button> {/*change text here*/}
        </div>
    );
};

export default QuestionTwo;
