import { useRouter } from "next/router";
import styled from "styled-components";

import AddHabits from "../components/AddHabits/AddHabits";
import HabitForm from "../components/Implementation/HabitForm";
import TextInput from "../components/Implementation/TextInput";
import ImplementationForm from "../components/Implementation/ImplementationForm";
import Navbar from "../components/Navbar/Navbar";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <AddHabits />
    </div>
  );
}
