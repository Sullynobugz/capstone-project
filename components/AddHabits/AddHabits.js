import React, { useContext, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { HabitsContext } from "../HabitsContext/HabitsContext";

const Input = styled.input`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  padding: 8px;
  margin: 8px;
`;

const Label = styled.label`
  color: #f5f5f5;
`;

const CommonButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#444"};
  border: ${(props) => (props.noBorder ? "none" : "1px solid #777")};
  color: #f5f5f5;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  background-color: #2c2c2c;
  min-height: 100vh;
  padding: 16px;
`;

const Title = styled.h1`
  color: #f5f5f5;
  text-align: center;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  color: #f5f5f5;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #f5f5f5;
  }
`;

const AddHabits = () => {
  const [inputValue, setInputValue] = useState("");
  const { habits, addHabit, deleteHabit } = useContext(HabitsContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    const newHabit = { id: uuidv4(), title: inputValue };
    addHabit(newHabit);
    setInputValue("");
  };

  const handleDelete = (id) => {
    deleteHabit(id);
  };

  return (
    <Container>
      <Title>Hatrack</Title>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="new-habit-input">Enter a new habit:</Label>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new habit"
          id="new-habit-input"
        />
        <CommonButton type="submit">Add Habit</CommonButton>
      </form>
      <List role="list">
        {habits.map((habit) => (
          <ListItem key={habit.id}>
            {habit.title}
            <CommonButton
              type="button"
              onClick={() => handleDelete(habit.id)}
              backgroundColor="#f44336"
              noBorder
            >
              Delete
            </CommonButton>
          </ListItem>
        ))}
      </List>
      <NavigationButton>
        <Link href="/implementation">Go to Implementation</Link>
      </NavigationButton>
    </Container>
  );
};

export default AddHabits;
