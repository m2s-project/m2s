import React, { useState } from 'react';
import './EventModal.css';

const EventModal = ({ date, events, onClose, onEventAdd }) => {
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventColor, setNewEventColor] = useState('#007bff');

  const handleAddEvent = () => {
    if (newEventTitle.trim()) {
      onEventAdd({
        title: newEventTitle,
        date: date.toISOString(),
        color: newEventColor,
      });
      setNewEventTitle('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Événements pour le {date.toDateString()}</h3>
        {events.length > 0 ? (
          <ul className="event-list">
            {events.map((event, index) => (
              <li key={index} style={{ backgroundColor: event.color }}>
                {event.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun événement pour cette journée.</p>
        )}
        <div className="add-event-section">
          <input
            type="text"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            placeholder="Ajouter un événement"
          />
          <input
            type="color"
            value={newEventColor}
            onChange={(e) => setNewEventColor(e.target.value)}
            title="Couleur de l'événement"
          />
          <button onClick={handleAddEvent}>Ajouter</button>
        </div>
        <button className="close-button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default EventModal;
