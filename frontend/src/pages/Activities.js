import CreateEventForm from '../components/newEventForm/CreateEventForm';
import React, { useEffect, useState } from 'react';
import Card from '../components/cardEvent/Card';
import axios from 'axios';
import Input from '../components/input/Input';
import Button from '../components/Button/Button';

function Activities() {
  // const [events, setEvents] = useState([]);

  const [events, setEvents] = useState([
    {
      eventId: 1,
      eventName: 'Event 1',
      eventDate: '2022-12-31',
      eventTime: '20:00',
      eventStyleName: 'Rock',
      income: 1000,
    },
    {
      eventId: 2,
      eventName: 'Event 2',
      eventDate: '2022-11-15',
      eventTime: '19:30',
      eventStyleName: 'Pop',
      income: 1500,
    },
    // Add more dummy event objects as needed
  ]);
  const [inputs, setInputs] = useState('');
  const handleChange = (event) => {
    setInputs(event.target.value);
  };

  // useEffect(() => {
  //   // Fetch events data from the database using Axios
  //   axios
  //     .get('/api/getAllevents') // Adjust the API endpoint URL as needed
  //     .then((response) => {
  //       setEvents(response.data);
  //     })
  //     .catch((error) => {
  //       console.log('Error fetching events:', error);
  //     });
  // }, []);

// TODO make a request to delete all the event in that musical type
    const handleClick = (e) => {

      
    };
console.log('inputs', inputs);
  return (
    <div>
      <h2>Activities</h2>
      <div className="card-container">
        {events.map((event) => (
          <Card
            key={event.eventId}
            eventName={event.eventName}
            date={event.eventDate}
            time={event.eventTime}
            style={event.eventStyleName}
            income={event.income}
          />
        ))}
      </div>
      <div>
        <Input
          name="style"
          handleChange={handleChange}
          label="Remove By Style"
        />
        <Button text="Delete" handleClick={handleClick} />
      </div>
      <CreateEventForm />
    </div>
  );
}

export default Activities;
