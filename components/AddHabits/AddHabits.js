import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

const Input = styled.input`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  padding: 8px;
  margin: 8px;
`;

const Button = styled.button`
  background-color: #444;
  border: 1px solid #777;
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

const DeleteButton = styled.button`
  background-color: #f44336; /* Rote Schaltfläche */
  border: none;
  color: #f5f5f5;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
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

const AddHabits = () => {
  const [habits, setHabits] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    const newHabit = { id: Math.random().toString(), title: inputValue };
    setHabits([...habits, newHabit]);
    setInputValue("");

    localStorage.setItem("habits", JSON.stringify([...habits, newHabit]));
  };

  const deleteHabit = (idToDelete) => {
    setHabits(habits.filter((habit) => habit.id !== idToDelete));
  };

  useEffect(() => {
    const storedHabits = localStorage.getItem("habits");
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

  return (
    <Container>
      <Title>Hatrack</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new habit"
        />
        <Button type="submit">Add Habit</Button>
      </form>
      <List>
        {habits.map((habit) => (
          <ListItem key={habit.id}>
            {habit.title}
            <DeleteButton type="button" onClick={() => deleteHabit(habit.id)}>
              Delete
            </DeleteButton>
          </ListItem>
        ))}
      </List>
      <div>
        <Link href="/implementation">
          <div>Implementation</div>
        </Link>
      </div>
    </Container>
  );
};

export default AddHabits;
