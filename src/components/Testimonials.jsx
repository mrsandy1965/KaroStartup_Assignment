import React from 'react';
import './Testimonials.css';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Karo Pitch helped us connect with investors we would never have reached otherwise. The exposure was game-changing for our seed round.",
      author: "Founder",
      company: "FarmLink"
    },
    {
      quote: "The platform gives founders from Tier-2 cities a real opportunity to pitch. It levels the playing field for ambitious entrepreneurs.",
      author: "Founder",
      company: "UrbanThread"
    },
    {
      quote: "Great exposure and valuable mentorship from experienced investors. They don't just provide funding, they provide a roadmap to scale.",
      author: "Founder",
      company: "FinAI"
    }
  ];

  return (
    <section className="testimonials section section-alt bg-dot-pattern">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What Founders Say About Karo Pitch</h2>
          <p className="section-subtitle">Hear from the entrepreneurs who found their path to success through our platform.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-info">
                <div className="testimonial-avatar">
                  {t.company.charAt(0)}
                </div>
                <div>
                  <h4 className="testimonial-author">{t.author}</h4>
                  <p className="testimonial-company">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
