import React, { useContext, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { HabitsContext } from "../HabitsContext/HabitsContext";

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

const HabitItem = styled.li`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: #f5f5f5;
  padding: 8px;
  cursor: pointer;
`;

const Weekday = () => {
  const { habits } = useContext(HabitsContext);
  const [selectedWeekday, setSelectedWeekday] = useState("Monday");
  const [showDropdown, setShowDropdown] = useState(false);

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
          <WeekdayDropdownLink onClick={() => handleWeekdayClick("Monday")}>
            Monday
          </WeekdayDropdownLink>
          <WeekdayDropdownLink onClick={() => handleWeekdayClick("Tuesday")}>
            Tuesday
          </WeekdayDropdownLink>
          <WeekdayDropdownLink onClick={() => handleWeekdayClick("Wednesday")}>
            Wednesday
          </WeekdayDropdownLink>
          <WeekdayDropdownLink onClick={() => handleWeekdayClick("Thursday")}>
            Thursday
          </WeekdayDropdownLink>
          <WeekdayDropdownLink onClick={() => handleWeekdayClick("Friday")}>
            Friday
          </WeekdayDropdownLink>
          <WeekdayDropdownLink onClick={() => handleWeekdayClick("Saturday")}>
            Saturday
          </WeekdayDropdownLink>
          <WeekdayDropdownLink onClick={() => handleWeekdayClick("Sunday")}>
            Sunday
          </WeekdayDropdownLink>
        </WeekdayDropdownContent>
      </WeekdayDropdownContainer>
      <HabitList>
        {Array.isArray(habits) &&
          habits.map((habit) => (
            <HabitItem key={habit.id}>
              {habit.title}
              <Link href="/progress">
                <ProgressButton>Progress</ProgressButton>
              </Link>
            </HabitItem>
          ))}
      </HabitList>
    </WeekdayContainer>
  );
};

export default Weekday;

          
