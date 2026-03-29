import { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you?", type: "bot" }
  ]);
  const [input, setInput] = useState("");

  const faqs = [
    "How to apply?",
    "What are fees?",
    "Placement details?"
  ];

  // 🔁 CHECK FOR ADMIN RESPONSE
  const checkForResponse = (id) => {
    const interval = setInterval(() => {
      fetch(`http://localhost:5000/api/queries/${id}`)
        .then(res => res.json())
        .then(data => {
          if (data.data.status === "resolved") {
            setMessages(prev => [
              ...prev,
              { text: data.data.response, type: "bot" }
            ]);

            clearInterval(interval);
          }
        })
        .catch(err => console.log(err));
    }, 2000);
  };

  // 📤 SEND QUERY TO ADMIN (fallback)
  const sendToAdmin = (message) => {
    fetch("http://localhost:5000/api/queries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    })
      .then(res => res.json())
      .then(data => {
        const queryId = data.data._id;

        setMessages(prev => [
          ...prev,
          { text: "Waiting for admin response...", type: "bot" }
        ]);

        checkForResponse(queryId);
      })
      .catch(err => console.log(err));
  };

  // 🤖 MAIN CHAT FUNCTION (IMPORTANT)
  const handleChat = async (message) => {
    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      // ✅ If chatbot gives answer
      if (data.method !== "fallback") {
        setMessages(prev => [
          ...prev,
          { text: data.response, type: "bot" }
        ]);
      } 
      // ❌ If fallback → send to admin
      else {
        sendToAdmin(message);
      }

    } catch (error) {
      console.log(error);
      // safety fallback
      sendToAdmin(message);
    }
  };

  // 📌 FAQ CLICK
  const handleFAQ = (question) => {
    setMessages(prev => [...prev, { text: question, type: "user" }]);
    handleChat(question);
  };

  // 📩 USER SEND MESSAGE
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages(prev => [...prev, { text: userMessage, type: "user" }]);

    handleChat(userMessage);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <div className="chatbot-btn" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Box */}
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>Ask Us</span>
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={msg.type}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="chatbot-faq">
            {faqs.map((q, i) => (
              <button key={i} onClick={() => handleFAQ(q)}>
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}