import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetInterestByPk } from "../services/InterestServices"
import PageCards from './PageCards'

const InterestCard = ({interest, pages, getAllPages}) => {

  const navigate = useNavigate()

  const [interestCard, setInterestCard] = useState({})

  let { id } = useParams({})
  
  const getInterestCard = async (id) => {
    const res = await GetInterestByPk(id)
    console.log(res)
    setInterestCard(res)
  }

  useEffect(() => {
    getInterestCard(id)
  }, [id])

  const HandleCreatePage = () => {
    navigate('/createpage');
  }
  return (
    <div>
      <h1>Interest Name</h1>
      <section className='searches-list'>
        <h3>Searches List</h3>
        <button>Make New Search</button>
        <li>
          Search 1 Link
        </li>
        <li>
          Search 2 Link
        </li>
      </section>
      <section className='pages-view'>
      <h3>Pages</h3>
        <button onClick={HandleCreatePage}>Create new Page</button>
        <div>     
        {pages.map((page, index) => (
          <PageCards interest={interest} pages={pages} getAllPages={getAllPages}/>
        ))}
          <p>URL Displayed</p>
          <img src='https://websavers.ca/wp-content/uploads/2014/02/preview-website-plesk-wordpress-websavers.jpg' alt='website preview' />
          <section className='Notes'>
            <h5>Note Title</h5>
            <p>Note Body</p>
          </section>
        </div>
        <div>
          <h4>Page 1</h4>
          <p>URL Displayed</p>
          <img src='https://websavers.ca/wp-content/uploads/2014/02/preview-website-plesk-wordpress-websavers.jpg' alt='website preview' />
          <section className='Notes'>
            <h5>Note Title</h5>
            <p>Note Body</p>
          </section>
        </div>
      </section>
    </div>
  )
}

export default InterestCard