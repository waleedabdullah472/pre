import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  FaCogs,
  FaLock,
  FaHeadset,
  FaRocket,
  FaBolt,
  FaFire,
  FaArrowRight as ArrowRightIcon,
} from "react-icons/fa";

const Home = () => {
  // Testimonials data
  const testimonials = [
    {
      name: "Alice Cooper",
      text: " I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! ",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Diana Prince",
      text: "I received very good care at Clinicity Clinic, and the doctor took the time to explain the medications he was prescribing and why..",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Bob Marley",
      text: "I received very good care at Clinicity Clinic, and the doctor took the time to explain the medications he was prescribing and why..",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Charlie Chaplin",
      text: "Their platform is a game-changer in the industry.",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Diana Prince",
      text: "I received very good care at Clinicity Clinic, and the doctor took the time to explain the medications he was prescribing and why..",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Ethan Hunt",
      text: "A must-have for any business looking to succeed.",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Diana Prince",
      text: "Fantastic support and incredible value.",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Diana Prince",
      text: "Fantastic support and incredible value.",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Fiona Apple",
      text: "I received very good care at Clinicity Clinic, and the doctor took the time to explain the medications he was prescribing and why.",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "Diana Prince",
      text: "FI received very good care at Clinicity Clinic, and the doctor took the time to explain the medications he was prescribing and why..",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  // Determine items per page based on screen width
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth >= 768 ? 3 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate maximum index (number of "pages")
  const maxIndex =
    testimonials.length > itemsPerPage
      ? testimonials.length - itemsPerPage
      : 0;
  const totalPages = maxIndex + 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home">
      {/* First Section */}
      <section className="home-first-section grid grid-cols-1 md:grid-cols-12 p-10 items-center">
        <div className="col-span-7">
          <h1 className="text-4xl font-bold">
            Sell Smart, Save Big On Commissions!
          </h1>
          <h3 className="mt-4 text-lg">
            Low-cost business brokerage with expert guidance
            <br />
            Save on commissions by handling inspections and
            <br />
            calls yourself.
          </h3>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg">
            Start Selling
          </button>
        </div>
        <div className="col-span-5 mt-6 md:mt-0">
          <img
            src="Businessgoal.png"
            alt="Business"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Second Section - Why Choose Us */}
      <section className="home-why-choose-us text-center p-10">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Business Listing",
              icon: <FaCogs />,
              text: "Post your business with images & details.",
              link: "List Business",
            },
            {
              title: "Call Handling",
              icon: <FaLock />,
              text: "Let buyers reach you directly.",
              link: "More",
            },
            {
              title: "Inspections",
              icon: <FaHeadset />,
              text: "Manage inquiries at your convenience",
              link: "Manage",
            },
          ].map((item, index) => (
            <div key={index} className="home-choose-card border p-6 rounded-lg">
              <div className="text-blue-500 text-3xl mx-auto">{item.icon}</div>
              <h2 className="text-xl font-bold mt-4">{item.title}</h2>
              <p className="mt-2">{item.text}</p>
              <a
                href="#"
                className="text-blue-500 flex items-center justify-center mt-4"
              >
                {item.link} <ArrowRightIcon className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section - Testimonials Carousel */}
      <section className="home-testimonials p-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Customers Say
        </h2>
        <div className="home-testimonial-slider">
          <div
            className="home-testimonial-track"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / itemsPerPage)
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="home-testimonial-item">
                <p className="home-testimonial-text">{testimonial.text}</p>
                <div className="home-testimonial-info">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="home-testimonial-img"
                  />
                  <div className="home-testimonial-meta">
                    <span className="home-testimonial-name">
                      {testimonial.name}
                    </span>
                    <p className="home-testimonial-role">Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Indicators */}
          <div className="home-carousel-indicators">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`home-indicator ${
                  currentIndex === index ? "active-indicator" : ""
                }`}
                onClick={() => handleIndicatorClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="home-section-4 p-10">
        <div className="home-container">
          <div className="home-row">
            {/* Left Side */}
            <div className="home-left-side home-col-6">
              <h2 className="heading">Benefits</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Sed sit amet nulla auctor, vestibulum magna
                <br />
                sed, convallis ex.
              </p>
              <button className="start-button">Get Started</button>
            </div>

            {/* Right Side */}
            <div className="home-right-side home-col-6">
              <div className="home-row">
                {/* First Column */}
                <div className="home-card-column home-col-6">
                  <div className="home-gai-card">
                    <div className="home-icon">
                      <FaRocket />
                    </div>
                    <g>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </g>
                  </div>
                </div>
                {/* Second Column */}
                <div className="home-card-column home-col-6">
                  <div className="home-gai-card">
                    <div className="home-icon">
                      <FaBolt />
                    </div>
                    <h>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h>
                  </div>
                  <div className="home-gai-card">
                    <div className="home-icon">
                      <FaFire />
                    </div>
                    <h>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Side */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
