import React from 'react';
import '../styles/styles.css';

const Services = () => {
  return (
    <section id="services" className="py-5 services-section">
      <div className="container">
        <h2 className="text-center text-white">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service-card">
              <h4>Personal Styling</h4>
              <p>Receive tailored fashion advice and outfit recommendations from our expert stylists to elevate your wardrobe.</p>
              <img src={'Services.png'} alt="Logo" className="service-logo" />

            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <h4>Custom Tailoring</h4>
              <p>Get your clothing perfectly fitted with our custom tailoring services to ensure you look and feel your best.</p>
              <img src={'Services.png'} alt="Logo" className="service-logo" />

            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <h4>Fashion Consultations</h4>
              <p>Join our exclusive fashion consultations to stay updated on the latest trends and styles that suit you.</p>
              <img src={'Services.png'} alt="Logo" className="service-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
