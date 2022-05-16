import React from 'react';
import {useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Register from '../pages/Register';

const AlertRegistered = (props) => {

  if (props.show) {
    return (
      <div></div>
    );
  }
  return (
    <Alert variant="success" onClose={() => props.setShow(false)} dismissible>
    <Alert.Heading>
    Registration Complete!
    </Alert.Heading>
    <p>
    You can now sign in to get started!
    </p>
  </Alert>
  );
}

export default AlertRegistered