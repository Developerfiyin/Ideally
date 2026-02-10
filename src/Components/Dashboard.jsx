import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = ({ loading }) => {
  const navigate = useNavigate();

  const [idea, setIdea] = useState("");
  const [prd, setPrd] = useState("");

  const handleGenerate = () => {
    if (!idea || !prd) {
      alert(" Please fill in both fields to generate your app");
      return;
    }

    // Save data for next screen
    sessionStorage.setItem("idea", idea);
    sessionStorage.setItem("prd", prd);
    navigate("/build");
  };

  return (
    <div
      style={styles.card}
      className="bg-black h-screen py-8 px-8 mx-auto grid"
    >
      <label className="text-3xl font-medium mt-8 text-purple-400">
        App Idea
      </label>
      <textarea
        className="resize-none border-2  rounded-md mt-5 border-purple-500 outline-purple-400  text-purple-400 text-2xl "
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your app idea..."
        rows={5}
        style={styles.textarea}
      />

      <label className="text-3xl mt-3 font-medium text-purple-400  ">
        PRD (Product Requirements)
      </label>
      <textarea
        className="border-2 mt-5 resize-none rounded-md border-purple-500  outline-purple-400  font-semibold text-2xl  text-purple-400  "
        value={prd}
        onChange={(e) => setPrd(e.target.value)}
        placeholder="Features, users, flows, tech stack..."
        rows={6}
        style={styles.textarea}
      />

      <button
        className="border border-purple-400 text-purple-400 mt-9 hover:bg-purple-500 mx-auto rounded-2xl font-semibold text-2xl hover:text-black "
        onClick={handleGenerate}
        disabled={loading}
        style={styles.button}
      >
        {loading ? "Building..." : "Generate App"}
      </button>
    </div>
  );
};

export default Dashboard;

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
