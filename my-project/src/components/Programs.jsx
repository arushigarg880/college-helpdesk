import { useEffect } from "react";
import "./Programs.css";
import Footer from "./Footer";

export default function Programs() {
  const departments = [
    { name: "Computer Science & Engineering", img: "https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Biotechnology Engineering", img: "https://images.unsplash.com/photo-1580795479025-93d13fd9aa6c?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Aerospace Engineering", img: "https://plus.unsplash.com/premium_photo-1661963560267-da3f70a3f84f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Automobile Engineering", img: "https://plus.unsplash.com/premium_photo-1664304163284-9c844b50b439?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Chemical Engineering", img: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Civil Engineering", img: "https://plus.unsplash.com/premium_photo-1664474927853-900d5ee1fd80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Information Technology Engineering", img: "https://plus.unsplash.com/premium_photo-1681823259377-2e0028c9c3be?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Electrical Engineering", img: "https://plus.unsplash.com/premium_photo-1661717298200-aecf7ff55544?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Electronics & Comm. Engineering", img: "https://plus.unsplash.com/premium_photo-1663040598592-9f3e311f9841?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mechatronics Engineering", img: "https://plus.unsplash.com/premium_photo-1681426666763-ed28d7310edf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mechanical Engineering", img: "https://plus.unsplash.com/premium_photo-1750847494794-80981034b6d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Food Technology Engineering", img: "https://plus.unsplash.com/premium_photo-1764099530127-18e9c11d83fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const programFees = [
    { name: "Computer Science & Engineering", fee: "₹2,00,000 / year" },
    { name: "Biotechnology Engineering", fee: "₹1,80,000 / year" },
    { name: "Aerospace Engineering", fee: "₹2,20,000 / year" },
    { name: "Automobile Engineering", fee: "₹2,10,000 / year" },
    { name: "Chemical Engineering", fee: "₹1,90,000 / year" },
    { name: "Civil Engineering", fee: "₹1,80,000 / year" },
    { name: "Information Technology Engineering", fee: "₹2,00,000 / year" },
    { name: "Electrical Engineering", fee: "₹1,95,000 / year" },
    { name: "Electronics & Comm. Engineering", fee: "₹2,05,000 / year" },
    { name: "Mechatronics Engineering", fee: "₹2,10,000 / year" },
    { name: "Mechanical Engineering", fee: "₹2,00,000 / year" },
    { name: "Food Technology Engineering", fee: "₹1,85,000 / year" },
  ];


  useEffect(() => {
    const slider = document.getElementById("dept-slider");
    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (slider) {
        scrollAmount += 320;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) scrollAmount = 0;
        slider.scrollLeft = scrollAmount;
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    const slider = document.getElementById("dept-slider");
    slider.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    const slider = document.getElementById("dept-slider");
    slider.scrollBy({ left: 320, behavior: "smooth" });
  };

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
      <section className="programs container">
        <h2 className="programs-main-title fade-in">
          <span> Opportunities That Transform </span>
        </h2>

        <h3 className="programs-subtitle fade-in">
          Programs Offered at <span>Chandigarh University</span>
        </h3>

        <p className="programs-info fade-in">
          <strong>Level of Study:</strong> Under-Graduate, Post-Graduate & LEET Programs <br />
          <strong>Admissions:</strong> Chandigarh University Engineering Admissions | Engineering Departments
        </p>

        
        <div className="slider-container fade-in">
          <button className="slide-btn left" onClick={scrollLeft}>◀</button>
          <div className="slider" id="dept-slider">
            {departments.map((dept, index) => (
              <div className="department-card fade-in" key={index}>
                <img src={dept.img} alt={dept.name} />
                <h4>{dept.name}</h4>
              </div>
            ))}
          </div>
          <button className="slide-btn right" onClick={scrollRight}>▶</button>
        </div>

      
        <section className="program-fees fade-in">
          <h2>Annual Fee Structure</h2>
          <table>
            <thead>
              <tr>
                <th>Program</th>
                <th>Annual Fee</th>
              </tr>
            </thead>
            <tbody>
              {programFees.map((program, index) => (
                <tr key={index}>
                  <td>{program.name}</td>
                  <td>{program.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        
        <section className="industry-partners fade-in">
          <h2>Our Industry Partners</h2>
          <div className="partners-slider" id="partners-slider">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/IBM-logo.png" alt="IBM" />
            <img src="https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg" alt="Amazon" />
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png" alt="Microsoft" />
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png" alt="Adobe" />
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Intel-logo.png" alt="Intel" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/960px-Tata_Consultancy_Services_old_logo.svg.png" alt="TCS" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" alt="Google" />
          </div>
        </section>
      </section>

      
      <Footer />
    </>
  );
}