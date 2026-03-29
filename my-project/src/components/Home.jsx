import { useEffect } from "react";
import Footer from "./Footer";

export default function Home() {

  const scrollLeft = () => {
    const slider = document.getElementById("slider");

    if (slider.scrollLeft <= 0) {
      slider.scrollTo({
        left: slider.scrollWidth,
        behavior: "smooth"
      });
    } else {
      slider.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    const slider = document.getElementById("slider");

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      slider.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Future Leaders</h1>
          <p>World-class education, innovation, and research excellence.</p>
          <button>Apply Now</button>
        </div>
      </section>

      
      <section className="quick-links container">
        <h2 className="section-title">Explore Campus</h2>

        <div className="slider-wrapper">
          <button className="slide-btn left" onClick={scrollLeft}>◀</button>

          <div className="slider" id="slider">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b" />
              <h3>Admissions</h3>
              <p>Apply now for 2026 intake</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" />
              <h3>Courses</h3>
              <p>Explore 100+ programs</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc" />
              <h3>Scholarships</h3>
              <p>Financial support available</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b" />
              <h3>Campus Life</h3>
              <p>Experience vibrant student life</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479" />
              <h3>Faculty</h3>
              <p>Learn from experienced professors</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0" />
              <h3>Placements</h3>
              <p>Top companies hiring students</p>
            </div>
          </div>

          <button className="slide-btn right" onClick={scrollRight}>▶</button>
        </div>
      </section>

      
      <section className="stats">
        <div><h2>50K+</h2><p>Students</p></div>
        <div><h2>500+</h2><p>Faculty</p></div>
        <div><h2>100+</h2><p>Programs</p></div>
        <div><h2>200+</h2><p>Recruiters</p></div>
      </section>

     
      <section className="events container">
        <h2 className="section-title">Upcoming Events</h2>

        <div className="event-grid">
          <div className="event-card">
            <div className="event-date"><span>3</span><p>April</p></div>
            <div className="event-info">
              <div>
                <h3>Tech Fest 2026</h3>
                <p>Coding competitions, hackathons & workshops.</p>
              </div>
              
            </div>
          </div>

          <div className="event-card">
            <div className="event-date"><span>30</span><p>April</p></div>
            <div className="event-info">
              <div>
                <h3>Annual Cultural Fest</h3>
                <p>Music, dance & art performances.</p>
              </div>
              
            </div>
          </div>

          <div className="event-card">
            <div className="event-date"><span>2</span><p>May</p></div>
            <div className="event-info">
              <div>
                <h3>Startup Summit</h3>
                <p>Meet entrepreneurs and industry experts.</p>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </>
  );
}