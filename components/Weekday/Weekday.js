import React, { useContext, useState } from "react";
import styled from "styled-components";
import { HabitsContext } from "../HabitsContext/HabitsContext";
import HabitItem from "./HabitItem";

const WeekdayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #2c2c2c;
  padding: 40px;
`;

const WeekdayDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 2;
`;

const WeekdayDropdownButton = styled.button`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  padding: 8px;
  font-size: 1.2rem;
  cursor: pointer;
`;

const WeekdayDropdownContent = styled.div`
  display: ${(props) => (props.showDropdown ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const WeekdayDropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const HabitList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
`;

const Weekday = () => {
  const { habits } = useContext(HabitsContext);
  const [selectedWeekday, setSelectedWeekday] = useState("Monday");
  const [showDropdown, setShowDropdown] = useState(false);

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleWeekdayClick = (weekday) => {
    setSelectedWeekday(weekday);
    setShowDropdown(false);
  };

  return (
    <WeekdayContainer>
      <h1 style={{ color: "#f5f5f5" }}>Weekday</h1>
      <WeekdayDropdownContainer>
        <WeekdayDropdownButton onClick={() => setShowDropdown(!showDropdown)}>
          {selectedWeekday}
        </WeekdayDropdownButton>
        <WeekdayDropdownContent showDropdown={showDropdown}>
          {weekdays.map((weekday) => (
            <WeekdayDropdownLink
              key={weekday}
              onClick={() => handleWeekdayClick(weekday)}
            >
              {weekday}
            </WeekdayDropdownLink>
          ))}
        </WeekdayDropdownContent>
      </WeekdayDropdownContainer>
      <HabitList>
        {habits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} />
        ))}
      </HabitList>
    </WeekdayContainer>
  );
};

export default Weekday;
