import React from "react";
import { useRouter } from "next/router";
import Progress from "../components/Progress/Progress";

const ProgressPage = () => {
  const router = useRouter();
  const { habitId } = router.query;

  return <Progress habitId={habitId} />;
};

export default ProgressPage;
