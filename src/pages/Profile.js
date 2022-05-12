const Profile = ({user, setUser}) => {

  return (
    <div>
      <h1>Profile</h1>
          <section>
            <h2>Email: {user.user.email}</h2>
          </section>
        </div>
  )
}

export default Profile