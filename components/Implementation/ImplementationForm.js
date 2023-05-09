import { useState, useEffect } from "react";
import styled from "styled-components";
import HabitSelect from "./HabitSelect";
import ImplementationFormField from "./ImplementationFormField";

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
  const [habit, setHabit] = useState("");
  const [goal, setGoal] = useState("");
  const [frequency, setFrequency] = useState("");
  const [intensity, setIntensity] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [weeklyIncrement, setWeeklyIncrement] = useState("");
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(storedHabits);
  }, []);
  useEffect(() => {
    const storedImplementationDetails =
      JSON.parse(localStorage.getItem("implementationDetails")) || {};

    if (habit in storedImplementationDetails) {
      const implementationDetails = storedImplementationDetails[habit];
      setGoal(implementationDetails.goal);
      setFrequency(implementationDetails.frequency);
      setIntensity(implementationDetails.intensity);
      setStartingPoint(implementationDetails.startingPoint);
      setWeeklyIncrement(implementationDetails.weeklyIncrement);
    } else {
      setGoal("");
      setFrequency("");
      setIntensity("");
      setStartingPoint("");
      setWeeklyIncrement("");
    }
  }, [habit]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const implementationDetails = {
      habit,
      goal,
      frequency,
      intensity,
      startingPoint,
      weeklyIncrement,
    };

    const storedImplementationDetails =
      JSON.parse(localStorage.getItem("implementationDetails")) || {};

    const updatedImplementationDetails = {
      ...storedImplementationDetails,
      [habit]: implementationDetails,
    };

    localStorage.setItem(
      "implementationDetails",
      JSON.stringify(updatedImplementationDetails)
    );
  };

  return (
    <div>
      <Title>Implementation</Title>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <HabitSelect habits={habits} habit={habit} onHabitChange={setHabit} />

          <ImplementationFormField
            label="Goal:"
            value={goal}
            setValue={setGoal}
          />
          <ImplementationFormField
            label="Frequency:"
            value={frequency}
            setValue={setFrequency}
          />
          <ImplementationFormField
            label="Intensity:"
            value={intensity}
            setValue={setIntensity}
          />
          <ImplementationFormField
            label="Starting Point:"
            value={startingPoint}
            setValue={setStartingPoint}
          />
          <ImplementationFormField
            label="Weekly Increment:"
            value={weeklyIncrement}
            setValue={setWeeklyIncrement}
          />
        </FormContainer>
        <SaveButton type="submit">Save Implementation Details</SaveButton>
      </form>
    </div>
  );
};

export default ImplementationForm;
