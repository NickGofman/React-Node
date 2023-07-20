import React, { useState } from 'react';
import styles from './createNewEventForm.module.css';
import Button from '../Button/Button';
import Input from '../input/Input';
import Select from '../Select/Select';

function CreateEventForm({ handleCreate, musicalStyleList }) {
  const [inputs, setInputs] = useState({
    eventDate: '',
    income: '',
    eventName: '',
    eventTime: '21:00',
    eventStyleId: '1',
    eventStyleName: '',
  });
  const [error, setError] = useState('');

  //handle inputs state change
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  //handle musical style state change
  const handleChangeStyle = (e) => {
    const selectedStyleId = e.target.value;
    const selectedStyleName = e.target.options[selectedStyleId - 1].text;

    setInputs((prevState) => ({
      ...prevState,
      eventStyleName: selectedStyleName,
      eventStyleId: selectedStyleId,
    }));
  };

  //handle the create event- make a request to the backend
  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (
      inputs.eventDate !== '' &&
      inputs.eventTime !== '' &&
      inputs.eventStyleId !== '' &&
      inputs.eventName !== '' &&
      inputs.income !== ''
    ) {
      handleCreate(inputs);
      setError('Event Created!');
      setInputs({
        eventDate: '',
        income: '',
        eventName: '',
        eventTime: '21:00',
        eventStyleId: '1',
        eventStyleName: '',
      });
    } else {
      setError('Invalid input');
    }
  };

  return (
    <>
      <h2>Create New Event</h2>

      <form className={styles.form}>
        <Input
          name="eventDate"
          type="date"
          label="Date"
          value={inputs.eventDate}
          onChange={handleChange}
        />
        <Input
          name="eventTime"
          type="time"
          label="Time"
          value={inputs.eventTime}
          onChange={handleChange}
        />
        <Input
          name="eventName"
          type="text"
          label="Event Name"
          value={inputs.eventName}
          onChange={handleChange}
        />
        <Input
          name="income"
          type="text"
          label="Event Income"
          value={inputs.income}
          onChange={handleChange}
        />
        <label>Select Musical Style</label>
        <Select
          name="eventStyleId"
          onChange={handleChangeStyle}
          musicalStyleList={musicalStyleList}
        />
        <p>{error}</p>
      </form>

      <Button
        className={styles.button}
        handleClick={handleCreateEvent}
        text="Add New Event"
      />
    </>
  );
}

export default CreateEventForm;
