import React, { useState } from 'react';
import styled from 'styled-components';

const HabitSelectContainer = styled.div`
  position: relative;
  height: 48px;
  padding-left: 8px;
`;

const HabitSelectButton = styled.button`
  // Styling für den Habit-Auswahl-Button
`;

const HabitSelectDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 8px;
  display: ${(props) => (props.showDropdown ? 'block' : 'none')};
  z-index: 1000;
`;


const HabitDropdownItem = styled.div`
  cursor: pointer;
  padding: 5px;
  text-decoration: none;
  display: block;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  border-radius: 3px;
  margin-bottom: 8px;
  font-size: 1.2rem;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const HabitSelectComponent = ({ habits, habit, setHabit }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleHabitDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleHabitChange = (habit) => {
    setHabit(habit);
    setShowDropdown(false);
  };

  return (
    <HabitSelectContainer>
      <HabitSelectButton onClick={toggleHabitDropdown}>
        {habit || 'Select a habit...'} {showDropdown ? '▲' : '▼'}
      </HabitSelectButton>
      <HabitSelectDropdown showDropdown={showDropdown}>
        {habits.map((habit) => (
          <HabitDropdownItem
            key={habit.id}
            onClick={() => handleHabitChange(habit.title)}
          >
            {habit.title}
          </HabitDropdownItem>
        ))}
      </HabitSelectDropdown>
    </HabitSelectContainer>
  );
};

export default HabitSelectComponent;
