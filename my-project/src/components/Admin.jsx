import { useEffect, useState } from "react";

export default function Admin() {
  const [queries, setQueries] = useState([]);

  // ✅ Fetch queries
  useEffect(() => {
    fetch("http://localhost:5000/api/queries")
      .then(res => res.json())
      .then(data => {
        if (data && data.data) {
          setQueries(data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  // ✅ Send response (UPDATED API)
 const sendResponse = async (_id) => {
  const responseText = prompt("Enter response:");

  if (!responseText) return;

  try {
    const res = await fetch("http://localhost:5000/api/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        queryId: _id,
        response: responseText
      })
    });

    const data = await res.json();
    console.log("Response API result:", data); // 🔥 DEBUG

    // 🔥 REFRESH DATA FROM DB
    const updated = await fetch("http://localhost:5000/api/queries");
    const updatedData = await updated.json();

    setQueries(updatedData.data);

  } catch (err) {
    console.error("Error:", err);
  }
};
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      {queries.length === 0 ? (
        <p>No queries yet</p>
      ) : (
        queries.map(q => (
          <div
            key={q.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px"
            }}
          >
            <p><b>Query:</b> {q.message}</p>
            <p><b>Status:</b> {q.status}</p>
            <p><b>Response:</b> {q.response || "Not responded yet"}</p>

            {q.status !== "resolved" && (
              <button onClick={() => sendResponse(q._id)}>
                Respond
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}