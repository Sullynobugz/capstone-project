import { useState } from 'react';


const AddHabits = () => {
  const [habits, setHabits] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (inputValue.trim() === '') {
      return;
    }
  
    setHabits([...habits, { id: Math.random().toString(), title: inputValue }]);
    setInputValue('');
  };
  

  const deleteHabit = (idToDelete) => {
    setHabits(habits.filter((habit) => habit.id !== idToDelete));
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
  {habits.map((habit) => (
    <li key={habit.id}>
      {habit.title}
      <button type="button" onClick={() => deleteHabit(habit.id)}>
        Delete
      </button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default AddHabits;
