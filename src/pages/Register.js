import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
// import AlertRegistered from '../components/AlertRegistered'


const Register = () => {

  const navigate = useNavigate()

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
    alert(`Registration complete. Click 'Ok' to continue and sign in!`)
    navigate('/signin')
    // setShow(true)
  }

  // if (!show) {
  //   return null
  // }
  
  return (
    <div>
      {/* <AlertRegistered setShow={setShow} show={show} onClose={() => setShow(false)}/> */}
      <div className="signin-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="signin-title">Register</h1>
          {/* Name */}
          <div className="form-item">
            <input
              className="reg-box"
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              placeholder="Your Name"
              required
            />
          </div>
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