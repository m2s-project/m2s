import React from 'react';
import './VerticalTimeline.css'; // Fichier CSS pour les styles

const VerticalTimeline = ({ events }) => {
  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
            <h3>{event.title}</h3>
            <span className="timeline-date">{event.date}</span>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
