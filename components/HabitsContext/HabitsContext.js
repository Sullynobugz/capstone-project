import React, { createContext, useState } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const deleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <HabitsContext.Provider value={{ habits, addHabit, deleteHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};
