import React, { createContext, useState } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    newHabit.progress = newHabit.progress || 0;
    newHabit.notes = newHabit.notes || "";
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const deleteHabit = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.filter((habit) => habit.id !== habitId)
    );
  };

  const updateHabit = (updatedHabit) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit
      )
    );
  };

  const updateHabitProgress = (habitId, newProgress) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId ? { ...habit, progress: newProgress } : habit
      )
    );
  };

  const updateHabitNotes = (habitId, notes) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId ? { ...habit, notes } : habit
      )
    );
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        addHabit,
        deleteHabit,
        updateHabit,
        updateHabitProgress,
        updateHabitNotes,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
