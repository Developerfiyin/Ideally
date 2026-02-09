export function IdeaCard({ idea }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>

      <StatusBadge status={idea.status} />

      <button style={{ marginTop: "1rem" }}>Open</button>
    </div>
  );
}
