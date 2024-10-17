import React, { useState } from 'react';
import './CustomCalendar.css';

import EventModal from './EventModal';
import Icon from '@mdi/react';
import { mdiChevronDoubleRight } from '@mdi/js';
import { mdiChevronDoubleLeft } from '@mdi/js';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CustomCalendar = ({ events, onEventAdd }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fonction pour changer de mois
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + direction));
    setCurrentDate(newDate);
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = getDaysInMonth(currentDate);

    // Ajoute des jours vides avant le début du mois
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day" />);
    }

    // Génère les jours du mois avec les événements
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const eventForDay = events.filter((event) => new Date(event.date).toDateString() === date.toDateString());
console.log(events);

      days.push(
        <div
          key={day}
          className={`calendar-day ${eventForDay.length > 0 ? 'has-event' : ''}`}
          onClick={() => setSelectedEvent({ date, eventForDay })}
        >
          <span className="day-number">{day}</span>
          {eventForDay.length > 0 && (
            <div className="event-markers">
              {eventForDay.map((event, index) => (
                <span key={index} className="event-marker" style={{ backgroundColor: event.color }}>
                  {event.title}
                </span>
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)} className="nav-button">
        <Icon path={mdiChevronDoubleLeft} size={1} />
          
        </button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)} className="nav-button">
            <Icon path={mdiChevronDoubleRight} size={1} />
          
        </button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-label">
            {day}
          </div>
        ))}
        {generateCalendarDays()}
      </div>

      {selectedEvent && (
        <EventModal
          date={selectedEvent.date}
          events={selectedEvent.eventForDay}
          onClose={() => setSelectedEvent(null)}
          onEventAdd={onEventAdd}
        />
      )}
    </div>
  );
};

export default CustomCalendar;
