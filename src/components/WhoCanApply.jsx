import React from 'react';
import './WhoCanApply.css';
import { Package, Cloud, Briefcase, ShoppingCart, Factory, MapPin } from 'lucide-react';

const categories = [
  { icon: <Package />, title: 'D2C Brands', desc: 'Direct-to-consumer brands building the next generation of consumer products.' },
  { icon: <Cloud />, title: 'SaaS Startups', desc: 'Software-as-a-service platforms solving real-world business problems.' },
  { icon: <Briefcase />, title: 'MSMEs', desc: 'Tech-enabled micro, small, and medium enterprises seeking scale.' },
  { icon: <ShoppingCart />, title: 'Consumer Tech', desc: 'Startups building engaging digital experiences and platforms for everyday consumers.' },
  { icon: <Factory />, title: 'Manufacturing', desc: 'Innovative manufacturing startups leveraging new tech and processes.' },
  { icon: <MapPin />, title: 'Bharat-focused', desc: 'Solutions specifically built for the next 500 million internet users in Tier 2/3 cities.' },
];

const WhoCanApply = () => {
  return (
    <section id="startups" className="section section-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Who Can <span className="text-gradient">Apply</span></h2>
          <p className="section-subtitle">
            We're sector-agnostic but highly curated. If you're building something exceptional, we want to hear from you.
          </p>
        </div>

        <div className="categories-grid grid grid-3">
          {categories.map((cat, idx) => (
            <div className="category-card light-card" key={idx}>
              <div className="cat-icon-wrapper">{cat.icon}</div>
              <h3 className="cat-title">{cat.title}</h3>
              <p className="cat-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
