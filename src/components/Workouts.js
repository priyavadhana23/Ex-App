// src/components/workout.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Workouts.css';

function Workouts() {
  // Array of exercises with their names and routes
  const exercises = [
    { name: 'Cardio', path: 'cardio' },
    { name: 'Chest', path: 'chest' },
    { name: 'Lower Legs', path: 'lower-legs' },
    { name: 'Lower Arms', path: 'lower-arms' },
    { name: 'Neck', path: 'neck' },
    { name: 'Shoulder', path: 'shoulder' },
    { name: 'Upper Arms', path: 'upper-arms' },
    { name: 'Upper Legs', path: 'upper-legs' },
    { name: 'Waist', path: 'waist' },
  ];
  

  return (
    <div className="workouts-container">
      {exercises.map((exercise) => (
        <div key={exercise.name} className="exercise-card">
          <h3>{exercise.name}</h3>
          <Link to={exercise.path} className="explore-button">
            Explore {exercise.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Workouts;
