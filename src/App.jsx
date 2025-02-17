import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import QuestionOne from './components/QuestionOne/QuestionOne.jsx';
import QuestionTwo from './components/QuestionTwo/QuestionTwo.jsx';
import QuestionThree from './components/QuestionThree/QuestionThree.jsx';
import QuestionFour from './components/QuestionFour/QuestionFour.jsx';
import QuestionFive from './components/QuestionFive/QuestionFive.jsx';
import CardPage from './components/CardPage/ClosedCard.jsx';
import OpenPage from './components/OpenPage/OpenCard.jsx';

function App(){
    return(

      <Router>
        <Routes>
          {/* Main Routes for different screens */}
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/question-1" element={<QuestionOne/>} /> 
          <Route path="/question-2" element={<QuestionTwo/>} /> 
          <Route path="/question-3" element={<QuestionThree/>} /> 
          <Route path="/question-4" element={<QuestionFour/>} /> 
          <Route path="/question-5" element={<QuestionFive/>} />
          <Route path="/closed-card" element={<CardPage />} /> 
          <Route path="/open-card" element={<OpenPage />} /> 
          </Routes>
        </Router>
    )

}

export default App
