import React from "react";
import { Header } from "./Header";
import { useState } from "react";
import { mockIdeas } from "../data/tempoary";
import { IdeaGrid } from "./idea";

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
