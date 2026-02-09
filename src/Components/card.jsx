import React from 'react'
import { useEffect, useState } from "react";
import { sendToAI } from "../services/aiService";


const card = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const idea = sessionStorage.getItem("idea");
    const prd = sessionStorage.getItem("prd");

    if (!idea || !prd) {
      return;
    }

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
  )
}

export default card




export default function BuildPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const idea = sessionStorage.getItem("idea");
    const prd = sessionStorage.getItem("prd");

    if (!idea || !prd) {
      return;
    }

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
