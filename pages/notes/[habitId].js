import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import Notes from "../../components/Notes/Notes";
import { HabitsContext } from "../../components/HabitsContext/HabitsContext";

const NotePage = () => {
  const router = useRouter();
  const { habitId } = router.query;
  const { habits } = useContext(HabitsContext);
  const [habitTitle, setHabitTitle] = useState("");
  const [initialNote, setInitialNote] = useState(""); // new state variable for the initial note

  useEffect(() => {
    const habit = habits.find((habit) => habit.id === habitId);
    if (habit) {
      setHabitTitle(habit.title);
    }

    // load the initial note from localStorage
    const storedNote = localStorage.getItem(habitId);
    if (storedNote) {
      setInitialNote(storedNote);
    }
  }, [habitId, habits]);

  const handleBack = () => {
    router.back();
  };

  return (
    <Notes
      habitId={habitId}
      habitTitle={habitTitle}
      initialNote={initialNote}
      onBack={handleBack}
    />
  );
};

export default NotePage;
