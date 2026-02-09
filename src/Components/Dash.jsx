import React from "react";
import { useState } from "react";
import { mockIdeas } from "../data/tempoary";

const Dash = () => {
  const [ideas, setIdeas] = useState(mockIdeas);

  return (
    <div style={{ padding: "2rem" }}>
      <Header />
      {ideas.length === 0 ? <EmptyState /> : <IdeaGrid ideas={ideas} />}
    </div>
  );
};

export default Dash;
