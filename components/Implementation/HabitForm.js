import styled from "styled-components";
import HabitSelectComponent from "./HabitSelect";

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

const Title = styled.h2`
  color: #f5f5f5;
  text-align: center;
  margin-bottom: 16px;
`;

const HabitForm = ({ habits, habit, setHabit }) => {
  return (
    <FormContainer>
      <Title>Select a Habit</Title>
      <HabitSelectComponent habits={habits} habit={habit} setHabit={setHabit} />
    </FormContainer>
  );
};

export default HabitForm;
