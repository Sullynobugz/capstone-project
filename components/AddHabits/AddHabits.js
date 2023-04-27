import React, { useState } from 'react';

const AddHabits = () => {
  const [habits, setHabits] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    setHabits([...habits, inputValue]);
    setInputValue('');
  };

  const deleteHabit = (indexToDelete) => {
    setHabits(habits.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h1>Hatrack</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new habit"
        />
        <button type="submit">Add Habit</button>
      </form>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            {habit}
            <button onClick={() => deleteHabit(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddHabits;
