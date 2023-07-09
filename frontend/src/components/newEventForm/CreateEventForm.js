import React, { useState } from 'react';
import styles from './createNewEventForm.module.css';
import Button from '../Button/Button';
import Input from '../input/Input';

function CreateEventForm({ handleCreate, musicalStyleList }) {
  const [inputs, setInputs] = useState({
    eventDate: '',
    income: '',
    eventName: '',
    eventTime: '',
    eventStyleId: '1',
    eventStyleName: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeStyle = (e) => {
    const selectedStyleId = e.target.value;
    const selectedStyleName = e.target.options[selectedStyleId - 1].text;

    setInputs((prevState) => ({
      ...prevState,
      eventStyleName: selectedStyleName,
      eventStyleId: selectedStyleId,
    }));
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (
      inputs.eventDate !== '' &&
      inputs.eventTime !== '' &&
      inputs.eventStyleId !== ''
    ) {
      handleCreate(inputs);
      setError('Event Create!');
      setInputs({
        eventDate: '',
        income: '',
        eventName: '',
        eventTime: '',
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
          value={inputs.date}
          onChange={handleChange}
        />
        <Input
          name="eventTime"
          type="time"
          label="Time"
          value={inputs.time}
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
        <select
          className={styles.select}
          name="eventStyleId"
          onChange={handleChangeStyle}
        >
          {musicalStyleList?.map((style) => (
            <option
              key={style.eventStyleId}
              value={style.eventStyleId.toString()}
            >
              {style.eventStyleName}
            </option>
          ))}
        </select>
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
