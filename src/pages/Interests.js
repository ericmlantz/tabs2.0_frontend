import { useState, useEffect} from 'react'
import { GetAllInterests } from '../services/InterestServices'
import { Link } from 'react-router-dom'


const Interests = ({theUserId}) => {
  let [interests, setInterests] = useState([])
  const getAllInterests = async () => {
    const res = await GetAllInterests();
    setInterests(res)
  }
  useEffect(() => {
    getAllInterests()
  }, [])
  return (
    <div>
      <h1 className='webpage-title'>Interests</h1>
      <Link className="create-new-button" to={'/createinterest'}><span>Create New Interest</span></Link>
      {interests &&
      interests.map((interest) => (
        interest.userId === theUserId
        ?
        <div key={interest.id}>
          <section className='interest-box'>
            <Link className='interest-card-topic' to={`/interests/${interest.id}`}>{interest.topic}</Link>
            <h4 className='interest-card-description'>{interest.description}</h4>
          </section>
        </div>
        : null
      ))}
    </div>
  )
}

export default Interests