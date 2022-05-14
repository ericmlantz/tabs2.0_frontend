import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Register = (props) => {

  
  function RegistrationCompleteAlert() {
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

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    })
    setFormValues({
      name: '',
      email: '',
      password: '',
    })
    AlertDismissibleExample()
  } 

  return (
    <div>
      <div className="signin-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="signin-title">Sign In</h1>
          {/* Email */}
          <div className="form-item">
            <input
              className="reg-box"
              onChange={handleChange}
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              placeholder="Email Address"
              required
            />
          </div>
          {/* Password */}
          <div className="form-item">
            <input
              className="reg-box"
              onChange={handleChange}
              type="password"
              id="passswordd"
              name="password"
              value={formValues.password}
              placeholder="Password"
              required
            />
          </div>
            <button className='signin-button' disabled={!formValues.email || !formValues.password}>
              Log In
            </button>
        </form>
      </div>
    </div>
  )
}

export default Register