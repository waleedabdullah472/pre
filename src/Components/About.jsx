import React   from 'react';
import './About.css'; // Ensure you create a separate CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      {/* About Section */}
      <div className="about-section">
        <h4 className="about-heading">About Us
        </h4>
        <h2>Revolutionizing Business Sales - A Smarter Way To Sell
</h2>
        <div className="about-text-container">
          <p className="about-text">
      Traditional brokens chorga Ngh commissions We offer a low cost alternatiue with the same exposure
          </p>
        </div>
      </div>

      {/* Transactional vs Prepo Section */}
      <div className="transactional-vs-prepo">
        <h2 className="section-heading">Transactional VS Prepo</h2>

        <div className="prepo-transactional-container">
          {/* Row 1 */}
          <div className="prepo-transactional-row">
            <div className="prepo col-8">
              <h3>Prepo</h3>
              <p>
                Prepo provides a more hands-on, personalized approach. It's not just about the transaction, but about managing the entire process with care.
              </p>
              <div className="prepo-icon">🚀</div>
            </div>
            <div className="transactional col-4">
              <h3>Transactional</h3>
              <p>
                Traditional transactional methods focus on the deal but often miss out on fostering a meaningful relationship, leaving crucial details unattended.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="prepo-transactional-row">
            <div className="transactional col-4">
              <h3>Transactional</h3>
              <p>
                Fast and straightforward, transactional approaches focus on closing deals quickly, but with less attention to the finer details that matter.
              </p>
            </div>
            <div className="prepo col-8">
              <h3>Prepo</h3>
              <p>
                With Prepo, every step is taken with care, from initial interaction to the final sale. We focus on understanding your needs and making it work for you.
              </p>
              <div className="prepo-icon">🌟</div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="prepo-transactional-row">
            <div className="prepo col-8">
              <h3>Prepo</h3>
              <p>
                Prepo provides a more hands-on, personalized approach. It's not just about the transaction, but about managing the entire process with care.
              </p>
              <div className="prepo-icon">🚀</div>
            </div>
            <div className="transactional col-4">
              <h3>Transactional</h3>
              <p>
                Traditional transactional methods focus on the deal but often miss out on fostering a meaningful relationship, leaving crucial details unattended.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How Prepo Works Section */}
      <div className="icons-row-container">
      <div className="icon-circle">
        <span className="icon">✔</span>
        <p className="icon-label">Icon 1</p>
      </div>
      <div className="icon-circle">
        <span className="icon">✖</span>
        <p className="icon-label">Icon 2</p>
      </div>
      <div className="icon-circle">
        <span className="icon">➕</span>
        <p className="icon-label">Icon 3</p>
      </div>
      <div className="icon-circle">
        <span className="icon">➖</span>
        <p className="icon-label">Icon 4</p>
      </div>
      <div className="icon-circle">
        <span className="icon">➡</span>
        <p className="icon-label">Icon 5</p>
      </div>
    </div>





      {/* Sign-up Section */}
      <section className="signup-section">
  <div className="signup-info">
    <div className="signup-header">
      <div className="signup-icon">✔️</div>
    </div>
    <h3 className="signup-heading">Sign Up Here</h3> 
    
    <p>Register your business and list your services to advance</p>
  </div>
  <button className="signup-button">Sign Up</button>
</section> 
    
    </div>
  );
};

export default About;
