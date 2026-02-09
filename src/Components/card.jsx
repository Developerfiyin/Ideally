// src/pages/BuildPage.jsx
import { useEffect, useState } from "react";
import { sendToAI } from "./AiService";

export default function BuildPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const idea = sessionStorage.getItem("idea");
    const prd = sessionStorage.getItem("prd");

    if (!idea || !prd) {
      setLoading(false);
      setResult("No idea or PRD found.");
      return;
    }

    // ✅ FUNCTION CALL — NOT JSX
    sendToAI({ idea, prd }).then((res) => {
      setResult(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>AI is building your app...</p>;
  }

  return (
    <div>
      <h1>Your App Is Ready</h1>
      <pre>{result}</pre>
    </div>
  );
}
