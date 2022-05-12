const Profile = ({user, setUser}) => {

  return (
    <div>
    <div>
      <h1>Profile</h1>
      <button type="button" data-toggle="modal" data-target="#exampleModal">Launch modal</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          <section>
            <h2>Email: {user.user.email}</h2>
          </section>
        </div>
        </div>
  )
}

export default Profile