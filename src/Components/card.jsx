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
      setResult("No idea or PRD found. Go back and try again.");
      setLoading(false);
      return;
    }

    sendToAI({ idea, prd }).then((res) => {
      setResult(res);
      setLoading(false);
    });
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 className="text-3xl font-semibold"> App Build Result</h1>
          <p className="text-xl font-semibold mt-6 ">
            Your AI-generated project structure
          </p>
        </header>

        {loading ? (
          <div style={styles.loaderBox}>
            <div style={styles.spinner} />
            <p>Building your app...</p>
          </div>
        ) : (
          <div style={styles.resultCard} className="font-semibold text-white">
            <pre style={styles.code}>{result} </pre>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "white",
    padding: "40px 20px",
    fontFamily: "Inter, sans-serif",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "10px",
  },
  loaderBox: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ddd",
    borderTop: "4px solid #4f46e5",
    borderRadius: "50%",
    margin: "0 auto 16px",
    animation: "spin 1s linear infinite",
  },
  resultCard: {
    background: "black",
    borderRadius: "24px",
    padding: "24px",

    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  code: {
    whiteSpace: "pre-wrap",
    fontFamily: "monospace",
    fontSize: "25px",
    lineHeight: 1.6,
  },
};
