import React from "react";
import { useNavigate } from "react-router-dom";
import { useIdeaFlow } from "../hooks/Ideaflow";

const Home = () => {
  const { idea, setIdea } = useIdeaFlow();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setIdea({ ...idea, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{ padding: 40 }}
      className="py-6 gap-3 px-4 items-center grid text-center w-full bg-black  text-purple-500 "
    >
      <h2 className="text-3xl font-bold text-left">Write Down Your Idea</h2>
      <input
        name="title"
        placeholder="eg, Favour can be a goat sometimes.."
        onChange={handleChange}
        className='w-full h-11 pl-10 focus:outline-blue-400 border-purple-500 pr-3 border rounded-md text-sm leading-none"'
      />
      <br />

      <textarea
        name="problem"
        placeholder="What problem does it solve?"
        onChange={handleChange}
        data-max-words="70"
        className="resize-none w-full textarea:placeholder pt-4 pl-10 focus:outline-blue-400 border-purple-500 pr-3 border rounded-md text-xl leading-none"
      />
      <br />

      <input
        name="users"
        placeholder="Target users (comma separated)"
        onChange={handleChange}
        className='w-full h-10  pl-10 focus:outline-blue-400 border-purple-500 pr-3 border rounded-md text-sm leading-none"'
      />
      <br />

      <select
        name="platform"
        onChange={handleChange}
        className=" w-full h-11 pl-10 focus:outline-blue-400  border-purple-500 pr-3 border rounded-md text-sm leading-none "
      >
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
        className=" resize-none w-full h-11 pl-10 focus:outline-blue-400 border-purple-500 pr-3 border rounded-md text-sm leading-none text-center placeholder:mr-3 "
      />
      <br />

      <button
        onClick={() => navigate("/prd")}
        className="py-3 px-6 rounded-2xl border border-purple-400 mx-auto  hover:text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Home;
