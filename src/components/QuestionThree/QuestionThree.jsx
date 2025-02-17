import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QuestionThree/QuestionThree.css';

const QuestionThree = () => {
    const navigate = useNavigate();

    const handleClick = (button) => {
        if (button === 'small') {
            navigate('/question-4'); 
        } else {
            alert('Loser!'); {/*change alert here*/}
        }
    };

    return (
        <div className="q-page3">
            <h2 className="q-question">Do you want to be my Valentine?</h2> {/*change text here*/}
            <div className="q-buttons">
                <button className="q-button-small" onClick={() => handleClick('small')}>Yes</button> {/*change text here*/}
                <button className="q-button-large" onClick={() => handleClick('large')}>No</button> {/*change text here*/}
            </div>
        </div>
    );
};

export default QuestionThree;
