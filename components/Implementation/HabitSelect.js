import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { HabitsContext } from "../HabitsContext/HabitsContext";

const HabitSelectContainer = styled.div`
  position: relative;
  display: inline-block;
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
  width: 100%;
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

const HabitSelect = ({ selectedHabitId, onHabitIdChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const { habits } = useContext(HabitsContext);

  const getHabitTitleById = (id) => {
    const habit = habits.find((habit) => habit.id === id);
    return habit ? habit.title : "";
  };

  const toggleHabitDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleClickOutsideDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  const handleHabitChange = (newHabitId) => {
    onHabitIdChange(newHabitId);
    setShowDropdown(false);
  };

  return (
    <HabitSelectContainer ref={dropdownRef}>
      <HabitSelectButton onClick={toggleHabitDropdown}>
        {getHabitTitleById(selectedHabitId) || "Select a habit..."}{" "}
        {showDropdown ? "▲" : "▼"}
      </HabitSelectButton>
      <HabitSelectDropdown showDropdown={showDropdown}>
        {habits.map((habit) =>
          habit.title ? (
            <HabitDropdownItem
              key={habit.id}
              onClick={() => handleHabitChange(habit.id)} // Pass habit.id instead of habit.title
            >
              {habit.title}
            </HabitDropdownItem>
          ) : null
        )}
      </HabitSelectDropdown>
    </HabitSelectContainer>
  );
};

export default HabitSelect;
