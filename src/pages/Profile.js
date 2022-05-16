import { GetUser, UpdateUser, DeleteUser } from '../services/UserServices'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Profile = ({ user, theUserId, setUser, username, email, handleLogOut}) => {
  const [formStatus, setFormStatus] = useState(true)
  const [updateBtn, setUpdateBtn] = useState('Enable Update')
  const [updateClass, setUpdateClass] = useState('profile-input')
  const [deleteBtn, setDeleteBtn] = useState('delete-hiding')

  const navigate = useNavigate()
  
  const {id} = useParams()

  const updateUser = async (id, data) => {
    await UpdateUser(id, data)
    setUser(user)
  }

  useEffect(() => {
    setUser(theUserId)
  }, [])

  const enableUpdate = (e) => {
    e.preventDefault()

    if (updateBtn === 'Update') {
      updateUser(id, user)
      setUpdateClass('profile-input')
      setDeleteBtn('delete-hiding')
      setFormStatus(true)
      setUpdateBtn('Enable Update')
      navigate(`/users/${id}`)
    }

    if (formStatus) {
      setFormStatus(false)
      setUpdateClass('profile-input-updating')
      setDeleteBtn('delete-showing')
      setUpdateBtn('Update')
    } else {
      setFormStatus(true)
    }
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleDelete = (e) => {
    DeleteUser(user.id)
    handleLogOut()
    navigate('/register')
    }
  return (
    <div className='delete-wrapper'>
    <div className="profile-page">
      <div className="initial-box">
        <p className="welcome-name">
          Welcome
        </p>
      </div>
      <form className="profile-form">
        <label className="profile-item" htmlFor="name">
          Name
          <br />
          <input
            className={updateClass}
            onChange={handleChange}
            id="name"
            type="text"
            name="name"
            value={user.name}
            readOnly={formStatus}
            maxLength="45"
          />
        </label>
        <label className="profile-item" htmlFor="email">
          E-mail
          <br />
          <input
            className={updateClass}
            onChange={handleChange}
            type="text"
            id="email"
            name="email"
            value={user.email}
            readOnly
          />
        </label>
        <button className="profile-button" onClick={enableUpdate}>
          {updateBtn}
        </button>
      </form>
      <div>
      </div>
      </div>
      <button className={deleteBtn} id='delete' name='delete' onClick={handleDelete}>Delete User</button>
    </div>
  )
}

export default Profile




// const Profile = ({username}) => {
//   return (
//     <div>
//       <h1>Profile</h1>
//           <section>
//             <h2>Email:{username}</h2>
//           </section>
//         </div>
//   )
// }

// export default Profile