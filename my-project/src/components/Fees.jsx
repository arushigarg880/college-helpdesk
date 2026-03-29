import "./Fees.css";

export default function Fees() {
  const programsFees = [
    { program: "B.Tech – Computer Science & Engineering", fee: "₹2,50,000 / Year" },
    { program: "B.Tech – Mechanical Engineering", fee: "₹2,20,000 / Year" },
    { program: "B.Tech – Civil Engineering", fee: "₹2,00,000 / Year" },
    { program: "B.Tech – Electrical Engineering", fee: "₹2,10,000 / Year" },
    { program: "MBA – Finance / Marketing", fee: "₹3,00,000 / Year" },
    { program: "MCA", fee: "₹1,80,000 / Year" },
    { program: "BBA / BCA", fee: "₹1,50,000 / Year" },
  ];

  return (
    <section className="fees container">
      <h2 className="fees-title">Annual Fee Structure</h2>
      <div className="fees-cards">
        {programsFees.map((item, index) => (
          <div className="fee-card" key={index}>
            <h3>{item.program}</h3>
            <p>{item.fee}</p>
          </div>
        ))}
      </div>
    </section>
  );
}