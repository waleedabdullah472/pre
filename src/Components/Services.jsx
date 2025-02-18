import React, { useState } from 'react';
import './Services.css'; // Import the CSS file
import { FaCheckCircle, FaLightbulb, FaTools, FaChevronDown } from 'react-icons/fa';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Preppo offer?",
      answer: "Preppo provides affordable, efficient, and professional business sales assistance, including expert guidance and 24/7 support."
    },
    {
      question: "How does Preppo differ from traditional brokers?",
      answer: "Preppo offers a modern, technology-driven approach to business sales, reducing costs and increasing efficiency."
    },
    {
      question: "Is customer support available 24/7?",
      answer: "Yes, our team is available round the clock to assist with any inquiries or issues."
    },
    {
      question: "Is customer support available 24/7?",
      answer: "Yes, our team is available round the clock to assist with any inquiries or issues."
    }
  ];

  return (
    <div className="services-container">
      {/* Left Side Heading */}
      <div className="service-section">
        <h4 className="service-heading">Preppo's Services</h4>
        <h2 className="service-title">Affordable, Efficient & Professional Business Sales Assistance</h2>
        <div className="service-text-container">
          <p className="service-text">Instantly conveys Preppo's value proposition</p>
        </div>
      </div>
      
      {/* Center First Row - Single Card */}
      <div className="service-card single-card">
        <FaCheckCircle className="service-icon" />
        <h3 className="service-card-title">Expert Assistance</h3>
        <p className="service-card-text">We provide expert business sales assistance tailored to your needs.</p>
      </div>
      
      {/* Center Second Row - Three Cards */}
      <div className="service-card-container">
        <div className="service-card">
          <FaLightbulb className="service-icon" />
          <h3 className="service-card-title">Innovative Solutions</h3>
          <p className="service-card-text">Stay ahead with our cutting-edge business strategies.</p>
        </div>
        <div className="service-card">
          <FaTools className="service-icon" />
          <h3 className="service-card-title">24/7 Support</h3>
          <p className="service-card-text">Our team is available round the clock to assist you.</p>
        </div>
        <div className="service-card">
          <FaCheckCircle className="service-icon" />
          <h3 className="service-card-title">Proven Success</h3>
          <p className="service-card-text">Our track record speaks for itself in business sales.</p>
        </div>
      </div>

      {/* Cost Breakdown Table */}
      <section className="table-container">
        <h1>Cost Breakdown</h1>
        <table>
          <thead>
            <tr>
              <th><h3>Service</h3></th>
              <th><h3>Traditional Broker</h3></th>
              <th><h3>New Model</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><h3>Service 1</h3></td>
              <td><h3>Data 1</h3></td>
              <td><h3>Data 2</h3></td>
            </tr>
            <tr>
              <td><h3>Service 2</h3></td>
              <td><h3>Data 3</h3></td>
              <td><h3>Data 4</h3></td>
            </tr>
            <tr>
              <td><h3>Service 3</h3></td>
              <td><h3>Data 5</h3></td>
              <td><h3>Data 6</h3></td>
            </tr>
            <tr>
              <td><h3>Service 4</h3></td>
              <td><h3>Data 5</h3></td>
              <td><h3>Data 6</h3></td>
            </tr>
            <tr>
              <td><h3>Service 5</h3></td>
              <td><h3>Data 5</h3></td>
              <td><h3>Data 6</h3></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ Section */}
      <section className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
              <FaChevronDown className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} />
            </div>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
