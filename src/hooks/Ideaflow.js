import { useState } from "react";

export function useIdeaFlow() {
  const [idea, setIdea] = useState({
    title: "",
    problem: "",
    users: "",
    platform: "",
    features: ""
  });

  return { idea, setIdea };
}



