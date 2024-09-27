import React from "react";
import './Cardio.css'; // Assuming you want to style it separately

function Cardio() {
  return (
    <>
      <div className="cardio-container">
        <h1 className="cardio-title">Cardio Workouts</h1>

        <p className="cardio-description">
          Cardio exercises are a great way to burn calories, improve your heart health, and boost your overall endurance. Here are some popular cardio exercises you can try:
        </p>

        <ul className="cardio-exercise-list">
          <li>Running</li>
          <li>Jump Rope</li>
          <li>Cycling</li>
          <li>Swimming</li>
          <li>Rowing</li>
          <li>High-Intensity Interval Training (HIIT)</li>
          <li>Stair Climbing</li>
          <li>Elliptical Training</li>
        </ul>

        <p className="cardio-tip">
          <strong>Tip:</strong> Start slow and increase intensity over time to avoid injury. Aim for at least 30 minutes of cardio exercise 3-5 times a week.
        </p>
      </div>
    </>
  );
}

export default Cardio;
