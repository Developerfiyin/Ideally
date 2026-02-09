import React from "react";

const Dash = ({ idea, prd, setIdea, setPrd, onGenerate, loading }) => {
  return (
    <div style={styles.card} className="bg-red-600 py-8  px-6">
      <label className="text-3xl font-medium text-purple-400">App Idea</label>
      <textarea
        className="resize-none border-none outline-purple-400 mx-10 text-purple-400 text-2xl"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your app idea..."
        rows={5}
        style={styles.textarea}
      />

      <label className="text-3xl font-medium text-purple-400  ">
        PRD (Product Requirements)
      </label>
      <textarea
        className="border-none outline-purple-400 mx-10 font-semibold text-2xl  text-purple-400  "
        value={prd}
        onChange={(e) => setPrd(e.target.value)}
        placeholder="Features, users, flows, tech stack..."
        rows={6}
        style={styles.textarea}
      />

      <button
        className="border border-purple-400 mx-auto rounded-2xl font-semibold text-2xl hover:text-black "
        onClick={onGenerate}
        disabled={loading}
        style={styles.button}
      >
        {loading ? "Building..." : "Generate App"}
      </button>
    </div>
  );
};

export default Dash;

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "30px",
  },
  textarea: {
    padding: "10px",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
