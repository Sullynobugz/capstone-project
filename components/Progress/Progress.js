import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { HabitsContext } from "../HabitsContext/HabitsContext";

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #2c2c2c;
  padding: 40px;
`;

const HabitTitle = styled.h1`
  color: #f5f5f5;
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Slider = styled.input.attrs({ type: "range" })`
  width: 100%;
`;

const DoneButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: #f5f5f5;
  padding: 8px;
  cursor: pointer;
  margin-top: 20px;
`;

const Quote = styled.p`
  color: #f5f5f5;
  font-style: italic;
  margin-top: 40px;
  text-align: center;
`;

const ProgressPercentage = styled.span`
  color: #f5f5f5;
`;

const Progress = ({ habitId }) => {
  const { habits, updateHabitProgress } = useContext(HabitsContext);
  const router = useRouter();

  const [sliderValue, setSliderValue] = useState(0);

  const habit = habits.find((h) => h.id === habitId);
  if (!habit) {
    console.warn(`No habit found with id ${habitId}`);
    return null; // or some error handling
  }

  const habitTitle = habit.title;

  const handleDoneClick = () => {
    const sliderNumber = Number(sliderValue);
    if (isNaN(sliderNumber)) {
      console.warn(`Invalid slider value: ${sliderValue}`);
      return;
    }
    const newProgress = Math.min(habit.progress + sliderNumber, 100);
    updateHabitProgress(habitId, newProgress);
    router.push("/weekday");
  };

  return (
    <ProgressContainer>
      <HabitTitle>Progress on {habitTitle}</HabitTitle>
      <SliderContainer>
        <Slider
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
        />
        <span style={{ color: "white" }}>{sliderValue}%</span>
      </SliderContainer>
      <DoneButton onClick={handleDoneClick}>Done</DoneButton>
      <Quote>
        &ldquo;You do not rise to the level of your goals. You fall to the level
        of your systems&rdquo; - James Clear
      </Quote>
    </ProgressContainer>
  );
};

export default Progress;
