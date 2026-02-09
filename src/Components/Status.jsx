import React from "react";

const Status = ({ status }) => {
  const colors = {
    draft: "#facc15",
    ready: "#22c55e",
    built: "#3b82f6",
  };
  return (
    <span
      style={{
        display: "inline-block",
        marginTop: "0.5rem",
        padding: "0.25rem 0.5rem",
        borderRadius: "6px",
        background: colors[status],
        color: "#000",
        fontSize: 16,
      }}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default Status;
