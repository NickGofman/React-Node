import CreateEventForm from '../components/newEventForm/CreateEventForm';
import React, { useEffect, useState } from 'react';
import Card from '../components/cardEvent/Card';
import axios from 'axios';
import Input from '../components/input/Input';
import Button from '../components/Button/Button';
import styles from '../pagesStyles/activities.module.css';
import { v4 as uuidv4 } from 'uuid';
function Activities() {
  // const [events, setEvents] = useState([]);

  const [events, setEvents] = useState([]);
  const [inputs, setInputs] = useState({ eventStyleId: '1' });
  const [musicalStyleList, setMusicalStyleList] = useState([]);

  useEffect(() => {
    // Fetch the event style list using Axios
    axios
      .get('/api/eventStyles')
      .then((response) => {
        setMusicalStyleList(response.data);
      })
      .catch((error) => {
        console.log('Error fetching event styles:', error);
      });
  }, []);
  useEffect(() => {
    // Fetch all events data from the server using Axios
    axios
      .get('/api/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log('Error fetching events:', error);
      });
  }, []);

  const handleDelete = () => {
    // Make a request to delete events by eventStyleName
    axios
      .delete(`/api/events/${inputs.eventStyleId}`)
      // Include the data property with eventStyleName
      .then((response) => {
        console.log('Delete response:', response.data);
        // Update the events list after successful deletion
        setEvents(
          events.filter((event) => event.eventStyleId != inputs.eventStyleId)
        );
      })
      .catch((error) => {
        console.log('Error deleting events:', error);
      });
  };

  const handleCreate = (eventData) => {
    // Make a request to create a new event
    eventData.eventId = uuidv4(); // Generate a unique event ID using uuidv4

    axios
      .post('/api/events', eventData) // Adjust the API endpoint URL as needed
      .then((response) => {
        console.log('Create response:', response.data);
        // Update the events list after successful creation
        const newEvent = {
          ...response.data,
          eventStyleName: eventData.eventStyleName,
        };
        setEvents((prevEvents) => [...prevEvents, newEvent]);
      })
      .catch((error) => {
        console.log('Error creating event:', error);
      });
  };
  const handleChangeStyle = (e) => {
    // names = names.split('\n');
    const selectedStyleId = e.target.value;
    setInputs((prevState) => ({
      ...prevState,
      eventStyleId: selectedStyleId, // Update the eventStyleId with the selected value
    }));
  };
  console.log('events', events);

  return (
    <div className={styles.activities}>
      <h2>Activities</h2>
      <CreateEventForm
        handleCreate={handleCreate}
        musicalStyleList={musicalStyleList}
      />

      <div className={styles.controls}>
        <h3>Delete event by style: </h3>
        <div>
          <select name="eventStyleId" onChange={handleChangeStyle}>
            {musicalStyleList?.map((style) => (
              <option
                key={style.eventStyleId}
                value={style.eventStyleId.toString()}
              >
                {style.eventStyleName}
              </option>
            ))}
          </select>
          <Button
            text="Delete"
            className={styles.deleteButton}
            handleClick={handleDelete}
          />
        </div>
      </div>

      <div className={styles.cardContainer}>
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
    </div>
  );
}

export default Activities;
