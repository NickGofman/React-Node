import React from 'react';

function Card(props) {
  const { eventName, date, time, style, income } = props;
  return (
    <div className="card">
      <h3 className="card-title">{eventName}</h3>
      <p className="card-text">
        <strong>Date:</strong> {date}
      </p>
      <p className="card-text">
        <strong>Time:</strong> {time}
      </p>
      <p className="card-text">
        <strong>Style:</strong> {style}
      </p>
      <p className="card-text">
        <strong>Income:</strong> {income}
      </p>
    </div>
  );
}

export default Card;
