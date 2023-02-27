import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const AddCurriculum = () => {
  const [ReqName, setReqName] = useState('');
  const [trainingArea, setTrainingArea] = useState('');
  const [reqCategory, setReqCategory] = useState('');
  const [institution, setInstitution] = useState('');
  const [duration, setDuration] = useState('');

  const handleTrainingAreaChange = (event) => {
    setTrainingArea(event.target.value);
  };

  const handleReqCategoryChange = (event) => {
    setReqCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      ReqName,
      trainingArea,
      reqCategory,
      institution,
      duration,
    };

    axios
      .post('http://localhost:8080/add', data)
      .then((res) => {
        alert('Data added successfully');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert('Error in adding data');
      });
  };

  return (
    <div>
      <h3>Add Curriculum</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="ReqName">
          <Form.Label>Requirement Name</Form.Label>
          <Form.Control
            type="text"
            value={ReqName}
            onChange={(event) => setReqName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="trainingArea">
          <Form.Label>Area where training is required</Form.Label>
          <Form.Control
            as="select"
            value={trainingArea}
            onChange={handleTrainingAreaChange}
            required
          >
            <option value="">Select an option</option>
            <option value="FSD">FSD</option>
            <option value="ML-AI">ML-AI</option>
            <option value="DSA">DSA</option>
            <option value="RPA">RPA</option>
            <option value="ST">ST</option>
            <option value="CSA">CSA</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="reqCategory">
          <Form.Label>Category of Requirement</Form.Label>
          <Form.Control
            as="select"
            value={reqCategory}
            onChange={handleReqCategoryChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Retail">Retail</option>
            <option value="Academic">Academic</option>
            <option value="Corporate">Corporate</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="institution">
          <Form.Label>Institution</Form.Label>
          <Form.Control
            type="text"
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="duration">
          <Form.Label>Duration (in hours)</Form.Label>
          <Form.Control
            type="number"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddCurriculum;