import { useRouter } from "next/router";
import Link from "next/link";

import AddHabits from "../components/AddHabits/AddHabits";
import HabitForm from "../components/Implementation/HabitForm";
import TextInput from "../components/Implementation/TextInput";
import ImplementationForm from "../components/Implementation/ImplementationForm";
import Navbar from "../components/Navbar/Navbar";

export default function HomePage() {
  const router = useRouter();

  const handleImplementationClick = () => {
    router.push("/implementation");
  };

  return (
    <div>
      <Navbar />
      <AddHabits />
    </div>
  );
}
