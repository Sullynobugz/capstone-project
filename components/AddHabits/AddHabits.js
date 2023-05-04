import { useState, useEffect } from 'react';
import Link from 'next/link';

const AddHabits = () => {
  const [habits, setHabits] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    const newHabit = { id: Math.random().toString(), title: inputValue };
    setHabits([...habits, newHabit]);
    setInputValue('');

    localStorage.setItem('habits', JSON.stringify([...habits, newHabit]));
  };

  const deleteHabit = (idToDelete) => {
    setHabits(habits.filter((habit) => habit.id !== idToDelete));
  };

  useEffect(() => {
    const storedHabits = localStorage.getItem('habits');
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

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
      <div>
        <Link href="/implementation">
          <div>Implementation</div>
        </Link>
      </div>
    </div>
  );
};

export default AddHabits;
