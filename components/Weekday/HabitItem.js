import styled, { keyframes, css } from "styled-components";
import { useRouter } from "next/router";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50, 0 0 20px #4caf50;
  }
  100% {
    box-shadow: 0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50, 0 0 20px #4caf50;
  }
`;

const HabitItemContainer = styled.li`
  position: relative;
  background-color: transparent;
  border: 1px solid #777;
  color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  /* Apply the glow animation if the progress is 100% */
  box-shadow: ${({ isComplete }) =>
    isComplete
      ? "0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50, 0 0 20px #4caf50"
      : "none"};
  animation: ${({ isComplete }) =>
    isComplete &&
    css`
      ${glow} 2s ease-in-out infinite
    `};
`;

const ProgressIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: green;
  width: ${({ progress }) => `${progress}%`};
  z-index: -1;
`;

const ProgressButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: #f5f5f5;
  padding: 8px;
  cursor: pointer;
`;

const HabitItem = ({ habit }) => {
  const router = useRouter();

  const navigateToProgress = () => {
    router.push(`/Progress?habitId=${habit.id}`);
  };

  return (
    <HabitItemContainer isComplete={habit.progress === 100}>
      <ProgressIndicator progress={habit.progress} />
      {habit.title} - {habit.progress}%
      <ProgressButton onClick={navigateToProgress}>Progress</ProgressButton>
    </HabitItemContainer>
  );
};

export default HabitItem;
