import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import HabitSelect from "./HabitSelect";
import TextInput from "./TextInput";
import { HabitsContext } from "../HabitsContext/HabitsContext";

const FormContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  z-index: 500;
  background-color: #2c2c2c;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h1`
  color: #f5f5f5;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  color: #f5f5f5;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const SaveButton = styled.button`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  border-radius: 4px;
`;

const ImplementationForm = () => {
  const [habitId, setHabitId] = useState("");
  const [frequency, setFrequency] = useState("");
  const [intensity, setIntensity] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [weeklyIncrement, setWeeklyIncrement] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [volume, setVolume] = useState("");

  const { habits, updateHabit } = useContext(HabitsContext);

  useEffect(() => {
    if (frequency && intensity) {
      setVolume(frequency * intensity);
    }
  }, [frequency, intensity]);

  useEffect(() => {
    const selectedHabit = habits.find((habit) => habit.id === habitId);

    if (selectedHabit) {
      setFrequency(selectedHabit.frequency || "");
      setIntensity(selectedHabit.intensity || "");
      setStartingPoint(selectedHabit.startingPoint || "");
      setWeeklyIncrement(selectedHabit.weeklyIncrement || "");
      setCurrentLevel(selectedHabit.currentLevel || "");
      setVolume(selectedHabit.volume || "");
    } else {
      setFrequency("");
      setIntensity("");
      setStartingPoint("");
      setWeeklyIncrement("");
      setCurrentLevel("");
      setVolume("");
    }
  }, [habitId, habits]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const habit = habits.find((habit) => habit.id === habitId);

    if (!habit) {
      console.error("No habit found with id:", habitId);
      return;
    }

    const updatedHabit = {
      ...habit,
      frequency,
      intensity,
      startingPoint,
      weeklyIncrement,
      currentLevel,
      volume,
    };

    updateHabit(updatedHabit);
  };

  return (
    <div>
      <Title>Implementation</Title>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <HabitSelect selectedHabitId={habitId} onHabitIdChange={setHabitId} />

          <Subtitle>Daily Goal</Subtitle>
          <TextInput
            label="Frequency:"
            value={frequency}
            setValue={setFrequency}
          />
          <TextInput
            label="Intensity:"
            value={intensity}
            setValue={setIntensity}
          />
          <TextInput
            label="Volume:"
            value={volume}
            setValue={setVolume}
            disabled
          />

          <Subtitle>WIP</Subtitle>
          <TextInput
            label="Starting Point:"
            value={startingPoint}
            setValue={setStartingPoint}
          />
          <TextInput
            label="Weekly Increment:"
            value={weeklyIncrement}
            setValue={setWeeklyIncrement}
          />
          <TextInput
            label="Current Level:"
            value={currentLevel}
            setValue={setCurrentLevel}
          />
        </FormContainer>
        <SaveButton type="submit">Save Implementation Details</SaveButton>
      </form>
    </div>
  );
};

export default ImplementationForm;
