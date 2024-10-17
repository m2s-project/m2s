import React, { useState } from "react";
import "./stepper.css"
const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="stepper">
      <div className="steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep === index ? "active" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handlePrev} disabled={currentStep === 0}>
          Précédent
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Stepper;
