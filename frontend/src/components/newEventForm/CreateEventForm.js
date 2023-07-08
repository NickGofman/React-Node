import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import axios from '../../api/axios';
import Input from '../input/Input';

function CreateEventForm() {
  const [musicalStyleList, setMusicalStyleList] = useState([]);

  //TODO get events style list
  // useEffect(() => {
  //   // Fetch the event style list using Axios
  //   axios
  //     .get('/api/eventStyles') // Adjust the API endpoint URL as needed
  //     .then((response) => {
  //       setMusicalStyleList(response.data);
  //     })
  //     .catch((error) => {
  //       console.log('Error fetching event styles:', error);
  //     });
  // }, []);

  const [inputs, setInputs] = useState({
    date: '',
    income: '',
    eventName: '',
    time: '21:00',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeStyle = (e) => {
    // console.log('INDEX', selectedIndex);
    setInputs((prevState) => ({ ...prevState, eventStyleId: e }));
  };

  //create new event
  const handleCreateEvent = () => {
    if (
      inputs.date !== '' &&
      inputs.time !== '' &&
      inputs.eventStyleId !== undefined
    ) {
      // TODO make axios call add the data to events table
    } else {
      console.log('else:');
      return;
    }
  };
  console.log(inputs);
  return (
    <>
      <h2>Create New Event</h2>

      <div>
        <p>Pick A Date:</p>

        <Input
          name="date"
          type="date"
          label="Date"
          value={inputs.date}
          handleChange={handleChange}
        />
        <Input
          name="time"
          label="Time"
          type="time"
          value={inputs.time}
          handleChange={handleChange}
        />
        <Input
          label="Event Name"
          name="eventName"
          type="text"
          value={inputs.eventName}
          handleChange={handleChange}
        />
        <Input
          label="Event Income"
          name="income"
          type="text"
          value={inputs.income}
          handleChange={handleChange}
        />

        <select name="musicalStyle" onChange={handleChangeStyle}>
          {musicalStyleList?.data?.map((style) => (
            <option
              name="musicalStyle"
              key={style.eventStyleId}
              value={style.eventStyleId.toString()}
            >
              {style.eventStyleName}
            </option>
          ))}
        </select>
      </div>

      <Button text="Add New Event" onClick={handleCreateEvent} />
    </>
  );
}

export default CreateEventForm;
