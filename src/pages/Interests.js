import { useState, useEffect} from 'react'
import { GetAllInterests } from '../services/InterestServices'
import { Link } from 'react-router-dom'
import CreateInterestForm from '../components/CreateInterestForm'


const Interests = () => {
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
      <Link className="create-new-button" to={'/createinterest'}><span>Create New Interest</span></Link>
      {interests &&
      interests.map((interest, index) => (
        <div key={interest.id}>
          <section className='interest-box'>
            <h4>{interest.id}</h4>
            <Link to={`/interests/${interest.id}`}>{interest.topic}</Link>
            <h4>{interest.description}</h4>
            {/* <ul>
            {pages &&
            pages.map((page, index) => (
              page.interestId === interest.id
               ? (<div className='interest-box'>
                  <h1>{page.title}</h1>
                </div>)
                : null
              ))}
            </ul> */}
          </section>
        </div>
      ))}
    </div>
  )
}

export default Interests