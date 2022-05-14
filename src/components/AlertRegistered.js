import React from 'react'

const AlertRegistered = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
        Registration Complete!
        </Alert.Heading>
        <p>
        You can now sign in to get started!
        </p>
      </Alert>
    );
  }
  return (
    <div></div>
  );
}

export default AlertRegistered