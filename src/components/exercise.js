import React from 'react';
import { Link } from 'react-router-dom';
import './Exercise.css'; // Importing the CSS

function Exercise() {
  return (
    <>
      <div className="exercise-content">
        {/* Motivational Quote */}
        <p className="exercise-quote">
          "The only bad workout is the one that didn't happen."
        </p>

        {/* Explore Workouts Button */}
        <Link to="/workouts" className="explore-button">
          Explore Workouts
        </Link>
      </div>
    </>
  );
}

export default Exercise;
