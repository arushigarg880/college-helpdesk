import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import { useEffect } from "react";
import Admissions from "./Admissions"; 
import Programs from "./components/Programs";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Admin from "./components/Admin";
function App() {

  // ✅ Your backend fetch (FIXED POSITION)
  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log("Backend:", data));
  }, []);

  // ✅ Your scroll animation (already correct)
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    window.addEventListener("scroll", () => {
      cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      

      <Chatbot />
    </BrowserRouter>
  );
}

export default App;