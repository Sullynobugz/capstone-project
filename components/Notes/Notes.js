import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { HabitsContext } from "../HabitsContext/HabitsContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2c2c2c;
  color: #f5f5f5;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 80%;
  margin-bottom: 2rem;
  background-color: #444;
  color: #f5f5f5;
  border: none;
  border-radius: 4px;
  padding: 1rem;
`;

const Button = styled.button`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  width: 8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Notes = ({ habitId, habitTitle }) => {
  const { updateHabitNotes } = useContext(HabitsContext);
  const [note, setNote] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedNote = localStorage.getItem(habitId);
    if (savedNote) {
      setNote(savedNote);
    }
  }, [habitId]);

  const handleBack = () => {
    router.back();
  };

  const handleSaveNote = () => {
    localStorage.setItem(habitId, note);
    updateHabitNotes(habitId, note);
  };

  return (
    <Container>
      <h1>Notes for {habitTitle}</h1>
      <TextArea value={note} onChange={(e) => setNote(e.target.value)} />
      <ButtonContainer>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleSaveNote}>Save Note</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Notes;
