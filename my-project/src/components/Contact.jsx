import "./Contact.css";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function Contact() {

  // ✅ State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Send feedback to backend
  const sendFeedback = (e) => {
    e.preventDefault(); // prevent page reload

    fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: formData.message
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert("Feedback sent successfully ✅");

      // clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    })
    .catch(err => console.log(err));
  };

  // ✅ Animation (your existing code)
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="contact">
        <h2 className="contact-title fade-in">Get In Touch</h2>
        <p className="contact-subtitle fade-in">
          We'd love to hear from you! Reach out for admissions, queries, or support.
        </p>

        <div className="contact-container fade-in">

          <div className="contact-info fade-in">
            <h3>Contact Information</h3>
            <p>📍 Chandigarh University, Mohali, Punjab</p>
            <p>📞 +91 172 509 0900</p>
            <p>📧 info@chandigarhuniversity.edu.in</p>

            <div className="contact-socials">
              <p>Follow Us:</p>
              <div>
                <span>🌐 Website</span>
                <span>📘 Facebook</span>
                <span>🐦 Twitter</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Message</h3>

            {/* ✅ FORM CONNECTED TO BACKEND */}
            <form onSubmit={sendFeedback}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Send Message</button>
            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}