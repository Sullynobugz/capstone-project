import { useState, useEffect } from 'react';
import HabitSelectComponent from './HabitSelect';

const Implementation = () => {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState('');
  const [goal, setGoal] = useState('');
  const [frequency, setFrequency] = useState('');
  const [intensity, setIntensity] = useState('');
  const [startingPoint, setStartingPoint] = useState('');
  const [weeklyIncrement, setWeeklyIncrement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const implementationDetails = {
      habit,
      goal,
      frequency,
      intensity,
      startingPoint,
      weeklyIncrement,
    };

    const storedImplementationDetails = JSON.parse(localStorage.getItem('implementationDetails')) || {};

    // Save implementation details for the selected habit to Local Storage
    localStorage.setItem('implementationDetails', JSON.stringify({
      ...storedImplementationDetails,
      [habit]: implementationDetails,
    }));
  };

  useEffect(() => {
    const storedHabits = localStorage.getItem('habits');
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

  useEffect(() => {
    const storedImplementationDetails =
      JSON.parse(localStorage.getItem("implementationDetails")) || {};
  
    if (habit && storedImplementationDetails[habit]) {
      const {
        goal,
        frequency,
        intensity,
        startingPoint,
        weeklyIncrement,
      } = storedImplementationDetails[habit];
  
      setGoal(goal || "");
      setFrequency(frequency || "");
      setIntensity(intensity || "");
      setStartingPoint(startingPoint || "");
      setWeeklyIncrement(weeklyIncrement || "");
    } else {
      setGoal("");
      setFrequency("");
      setIntensity("");
      setStartingPoint("");
      setWeeklyIncrement("");
    }
  }, [habit]);
  

  return (
    <div>
      <h1>Implementation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <HabitSelectComponent
            habits={habits}
            habit={habit}
            setHabit={setHabit}
          />

          {[
            ["goal", "Goal:", goal, setGoal],
            ["frequency", "Frequency:", frequency, setFrequency],
            ["intensity", "Intensity:", intensity, setIntensity],
            [
              "startingPoint",
              "Starting Point:",
              startingPoint,
              setStartingPoint,
            ],
            [
              "weeklyIncrement",
              "Weekly Increment:",
              weeklyIncrement,
              setWeeklyIncrement,
            ],
          ].map(([id, label, value, setter]) => (
            <div key={id} className="form-field">
              <label htmlFor={id}>{label}</label>
              <input
                type="text"
                id={id}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="implementation-input"
              />
            </div>
          ))}
        </div>
        <button type="submit">Save Implementation Details</button>
      </form>

      <style jsx>{`
        .form-container {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          max-width: 600px;
          position: relative;
          z-index: 500;
        }

        .form-field {
          align-items: center;
          display: flex;
          margin-bottom: 16px;
        }

        .form-container label {
          margin-right: 16px;
          min-width: 180px;
          text-align: right;
        }

        .form-container select {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Implementation;