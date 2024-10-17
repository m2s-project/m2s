import React, { useState } from 'react';
import './stepper.css'; // Fichier CSS

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper-container">
      <div className="steps-header">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item ${currentStep === index ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-label">{step.label}</div>
          </div>
        ))}
      </div>

      <div className="step-content">
        {steps[currentStep].content}
      </div>

      <div className="stepper-buttons">
        <button onClick={goToPreviousStep} disabled={currentStep === 0}>
          Précédent
        </button>
        <button onClick={goToNextStep} disabled={currentStep === steps.length - 1}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Stepper;
