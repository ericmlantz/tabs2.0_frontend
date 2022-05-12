import { useState, useEffect} from 'react'
import { GetAllInterests } from '../services/InterestServices'
import InterestCard from '../components/InterestCard'
import { GetAllPages } from '../services/PageServices'
import { Link } from 'react-router-dom'


const Interests = (user, authenticated) => {
  let [interests, setInterests] = useState([])
  let [pages, setPages] = useState([])

  const getAllInterests = async () => {
    const res = await GetAllInterests();
    setInterests(res)
  }
  const getAllPages = async () => {
    const res = await GetAllPages();
    setPages(res)
  }

  useEffect(() => {
    getAllInterests()
    getAllPages()
  }, [])

  return (
    <div>
      <h1>Interests</h1>
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