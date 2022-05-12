import { useState, useEffect } from 'react'
import { GetAllInterests } from '../services/InterestServices'
import InterestCard from '../components/InterestCard'


const Interests = (user, authenticated) => {
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
      <h1>Interests</h1>
      <InterestCard/>
      {interests &&
      interests.map((interest, index) => (
        <div key={interest.id}>
          <section className='interest-box'>
            <h2>{interest.topic}</h2>
            <h4>{interest.description}</h4>
            <li>
              {interest.searches}
            </li>
          </section>
        </div>
      ))}
    </div>
  )
}

export default Interests