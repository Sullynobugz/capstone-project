import React, { useState } from "react";
import styled from "styled-components";

const HabitSelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;
`;

const HabitSelectButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;

const HabitSelectDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 2000;
  display: ${(props) => (props.showDropdown ? "block" : "none")};
`;

const HabitDropdownItem = styled.a`
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

const HabitSelect = ({ habits, habit, onHabitChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleHabitDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleHabitChange = (habit) => {
    onHabitChange(habit);
    setShowDropdown(false);
  };

  return (
    <HabitSelectContainer>
      <HabitSelectButton onClick={toggleHabitDropdown}>
        {habit || "Select a habit..."} {showDropdown ? "▲" : "▼"}
      </HabitSelectButton>
      <HabitSelectDropdown showDropdown={showDropdown}>
        {habits &&
          habits.map((habit) => (
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

export default HabitSelect;
