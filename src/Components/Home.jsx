import { useNavigate } from "react-router-dom";
//import { useIdeaFlow } from "../hooks/Ideaflow";

export default function SubmitIdea() {
  const { idea, setIdea } = useIdeaFlow();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setIdea({ ...idea, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Submit Your Idea</h2>

      <input name="title" placeholder="Idea title" onChange={handleChange} />
      <br />

      <textarea
        name="problem"
        placeholder="What problem does it solve?"
        onChange={handleChange}
      />
      <br />

      <input
        name="users"
        placeholder="Target users (comma separated)"
        onChange={handleChange}
      />
      <br />

      <select name="platform" onChange={handleChange}>
        <option value="">Select platform</option>
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
        <option value="both">Both</option>
      </select>
      <br />

      <textarea
        name="features"
        placeholder="Core features (comma separated)"
        onChange={handleChange}
      />
      <br />

      <button onClick={() => navigate("/prd")}>Next</button>
    </div>
  );
}
