import React, { useState } from "react";
import styled from "styled-components";
import HabitSelect from "./HabitSelect";

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

const Subtitle = styled.h3`
  color: #f5f5f5;
  text-align: center;
  margin-bottom: 16px;
`;

const HabitForm = ({ habits, selectedHabitId, onHabitIdChange }) => {
  return (
    <FormContainer>
      <Subtitle>Goal</Subtitle>
      <HabitSelect
        habits={habits}
        selectedHabitId={selectedHabitId}
        onHabitIdChange={onHabitIdChange}
      />
    </FormContainer>
  );
};

export default HabitForm;
