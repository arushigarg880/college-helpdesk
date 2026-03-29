import { useState } from "react";
import Footer from "./components/Footer";
import "./Admissions.css"; 

export default function Admissions() {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const onlineSteps = [
    {
      title: "Step 1 - Register at CUCET",
      content:
        "Create your account by filling in basic details like name, email, and contact number. Save your login credentials for future use during application and updates.",
    },
    {
      title: "Step 2 - Download E-Prospectus",
      content:
        "Access the detailed E-Prospectus to check courses, eligibility, important dates, and guidelines. Read carefully to avoid mistakes while filling your application form.",
    },
    {
      title: "Step 3 - Pay your fee online",
      content:
        "Complete the registration by paying the required fee using secure online payment methods. Ensure the payment is successful and save the receipt for reference.",
    },
  ];

  const offlineSteps = [
    {
      title: "Step 1 - Download Admission Form",
      content:
        "Download the admission form in PDF format, print it, and carefully fill in all required personal and academic details before submission.",
    },
    {
      title: "Step 2 - Submit Admission Form",
      content:
        "Submit the filled form at the designated admission center along with necessary documents before the last date to ensure successful processing.",
    },
    {
      title: "Step 3 - Email / SMS",
      content:
        "You can also send your filled form and required documents via email or SMS as instructed, keeping confirmation for your records.",
    },
  ];

  return (
    <>
      <section className="section container admissions">
        <h1 className="admissions-title">
          Chandigarh University Admissions 2026-27
        </h1>

        <h2 className="admissions-subtitle">
          How to Apply Chandigarh University Admissions 2026-27
        </h2>

        
        <div className="admission-mode">
          <h3>Online Mode – CUCET Registration</h3>
          {onlineSteps.map((step, index) => (
            <div className="accordion-item" key={index}>
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion(index)}
              >
                {step.title}
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <p>{step.content}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="admission-mode">
          <h3>Offline Mode</h3>
          {offlineSteps.map((step, index) => (
            <div className="accordion-item" key={index}>
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion(index + 10)} 
              >
                {step.title}
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index + 10 ? "open" : ""
                }`}
              >
                <p>{step.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cucet-strip">
  <div className="cucet-text">
    Apply for CUCET 2026
  </div>
</div>

        
        <section className="section scholarships">
          <h2 className="section-title">CU Scholarships</h2>
          <div className="scholarship-cards">
            
            <div className="scholarship-card">
              <h3>CUCET Score Based Scholarship</h3>
              <table>
                <thead>
                  <tr>
                    <th>CUCET Percentile</th>
                    <th>Scholarship %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>&gt;=95%</td><td>100%</td></tr>
                  <tr><td>&gt;=90% to &lt;95%</td><td>80%</td></tr>
                  <tr><td>&gt;=80% to &lt;90%</td><td>70%</td></tr>
                  <tr><td>&gt;=70% to &lt;80%</td><td>50%</td></tr>
                  <tr><td>&gt;=60% to &lt;70%</td><td>25%</td></tr>
                </tbody>
              </table>
            </div>

            
            <div className="scholarship-card">
              <h3>NEET Rank Based Scholarship (UG)</h3>
              <table>
                <thead>
                  <tr>
                    <th>NEET Rank</th>
                    <th>Scholarship %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1-50,000</td><td>100%</td></tr>
                  <tr><td>50,001-80,000</td><td>80%</td></tr>
                  <tr><td>80,001-1,00,000</td><td>70%</td></tr>
                  <tr><td>1,00,001-1,50,000</td><td>50%</td></tr>
                  <tr><td>1,50,001-1,75,000</td><td>25%</td></tr>
                </tbody>
              </table>
            </div>

           
            <div className="scholarship-card">
              <h3>JEE Score Based Scholarship</h3>
              <table>
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Scholarship %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>&gt;95% or 1st Rank Holders / JEE Rank 1-50,000</td><td>100%</td></tr>
                  <tr><td>90% to &lt;95% / JEE Rank 50,001-80,000</td><td>90%</td></tr>
                  <tr><td>80% to &lt;90% / JEE Rank 80,001-1,00,000</td><td>75%</td></tr>
                  <tr><td>70% to &lt;80% / JEE Rank 1,00,001-1,50,000</td><td>50%</td></tr>
                  <tr><td>65% to &lt;70% / JEE Rank 1,50,001-1,75,000</td><td>25%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </section>

      <Footer />
    </>
  );
}