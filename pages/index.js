import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import AddHabits from "../components/AddHabits/AddHabits";
import HabitForm from "../components/Implementation/HabitForm";
import TextInput from "../components/Implementation/TextInput";
import ImplementationForm from "../components/Implementation/ImplementationForm";
import Navbar from "../components/Navbar/Navbar";
import { HabitsProvider } from "../components/HabitsContext/HabitsContext";

export default function HomePage() {
  const router = useRouter();
  const [habits, setHabits] = useState([]);

  const handleImplementationClick = () => {
    router.push("/implementation");
  };

  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  return (
    <HabitsProvider>
      <div>
        <Navbar />
        <AddHabits addHabit={addHabit} />
      </div>
    </HabitsProvider>
  );
}
