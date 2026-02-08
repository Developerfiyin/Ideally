import { useState } from "react";
import { mockIdeas } from "../data/mockIdeas";

export default function Dashboard() {
  const [ideas, setIdeas] = useState(mockIdeas);

  return (
    <div style={{ padding: "2rem" }}>
      <Header />
      {ideas.length === 0 ? <EmptyState /> : <IdeaGrid ideas={ideas} />}
    </div>
  );
}
