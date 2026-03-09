import React from 'react';
import './HowItWorks.css';
import { FileEdit, ClipboardCheck, Mic, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <FileEdit className="step-icon-svg" />,
    title: 'Apply with your pitch deck',
    description: 'Submit your startup details, traction metrics, and a well-crafted pitch deck through our simple application form.'
  },
  {
    icon: <ClipboardCheck className="step-icon-svg" />,
    title: 'Get shortlisted by KaroStartup',
    description: 'Our expert panel reviews applications and shortlists the most promising startups for the upcoming pitch session.'
  },
  {
    icon: <Mic className="step-icon-svg" />,
    title: 'Pitch live to investors',
    description: 'Present your business directly to a curated audience of active venture capitalists, angel investors, and family offices.'
  },
  {
    icon: <TrendingUp className="step-icon-svg" />,
    title: 'Raise funding and scale',
    description: 'Connect with interested investors post-pitch, secure your funding round, and scale your startup to the next level.'
  }
];

const HowItWorks = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">How <span className="text-gradient">It Works</span></h2>
          <p className="section-subtitle">
            A simple, transparent 4-step process to get you in front of the right investors.
          </p>
        </div>

        <div className="steps-container grid grid-4">
          {steps.map((step, index) => (
            <div className="step-card glass-card" key={index}>
              <div className="step-number">Step {index + 1}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
