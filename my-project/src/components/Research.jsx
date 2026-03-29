import { useEffect } from "react";
import "./Research.css";
import Footer from "./Footer"; 

export default function Research() {
  const researchAreas = [
    { name: "Artificial Intelligence & ML", img: "https://plus.unsplash.com/premium_photo-1676637656277-498f73258bec?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Biotechnology & Genetics", img: "https://images.unsplash.com/photo-1641903202531-bfa6bf0c6419?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Aerospace & Robotics", img: "https://images.unsplash.com/photo-1644420833187-75c8fa0ca0e7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Environmental Engineering", img: "https://images.unsplash.com/photo-1554769945-af468c934022?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Materials Science & Nanotech", img: "https://images.unsplash.com/photo-1675929970731-11970d723740?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cybersecurity & Blockchain", img: "https://images.unsplash.com/photo-1614064850003-13dbfd69fd11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Data Science & Big Data", img: "https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  const labs = [
    { name: "AI Research Lab", img: "https://plus.unsplash.com/premium_photo-1663126888423-382b8904538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Biotech Lab", img: "https://images.unsplash.com/photo-1669216368818-8dcc28259724?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Robotics Lab", img: "https://images.unsplash.com/photo-1661882217431-b64b303fb1d0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Nanotechnology Lab", img: "https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Quantum Computing Lab", img: "https://plus.unsplash.com/premium_photo-1682144482588-a548b7b8592b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Energy & Environment Lab", img: "https://plus.unsplash.com/premium_photo-1764695573427-2929ec411c72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const stats = [
    { title: "Published Papers", count: 200 },
    { title: "Patents Filed", count: 50 },
    { title: "International Conferences", count: 30 },
  ];

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");

    const onScroll = () => {
      faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const slider = document.getElementById("labs-slider");
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (slider) {
        scrollAmount += 300; 
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) scrollAmount = 0;
        slider.scrollLeft = scrollAmount;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    const slider = document.getElementById("labs-slider");
    slider.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    const slider = document.getElementById("labs-slider");
    slider.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
    <section className="research container">
      <h2 className="research-title fade-in">Research & Innovation</h2>
      <p className="research-subtitle fade-in">
        Advancing Knowledge for a Better Tomorrow
      </p>

     
      <div className="research-areas fade-in">
        {researchAreas.map((area, index) => (
          <div className="research-card fade-in" key={index}>
            <img src={area.img} alt={area.name} />
            <h4>{area.name}</h4>
          </div>
        ))}
      </div>

      
      <h3 className="labs-title fade-in">Our Research Labs & Centers</h3>
      <div className="labs-slider-container fade-in">
        <button className="slide-btn left" onClick={scrollLeft}>◀</button>
        <div className="labs-slider" id="labs-slider">
          {labs.map((lab, index) => (
            <div className="lab-card fade-in" key={index}>
              <img src={lab.img} alt={lab.name} />
              <h4>{lab.name}</h4>
            </div>
          ))}
        </div>
        <button className="slide-btn right" onClick={scrollRight}>▶</button>
      </div>

      
      <div className="stats-strip fade-in">
        {stats.map((stat, index) => (
          <div className="stat-card fade-in" key={index}>
            <h3>{stat.count}+</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      
       
    </section>
    <Footer /> 
    </>
  );
}