import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { GetInterestByPk } from "../services/InterestServices"
import { GetAllPages } from '../services/PageServices'
import PageCards from "./PageCards"
import { GetAllSearches } from '../services/SearchServices'
import SearchCards from './SearchCard'


const InterestCard = () => {
  
  const navigate = useNavigate()

  const [searches, setSearches] = useState([])
  const [interestcard, setInterestCard] = useState([])
  const [pages, setPages] = useState([])

  let { id } = useParams()
  
  const getInterestCard = async (id) => {
    const res = await GetInterestByPk(id)
    setInterestCard(res)
  }

  const getAllPages = async () => {
    const res = await GetAllPages();
    setPages(res)
  }

  const getAllSearches = async () => {
    const res = await GetAllSearches();
    setSearches(res)
  }
  useEffect(() => {
    getInterestCard(id)
    getAllPages()
    getAllSearches()
    //NEED TO TRY AND GET TO REFRESH TO SHOW NEW PAGES AS WELL
  }, [id])

  return (
    <div>
      <h1>{interestcard.topic}</h1>
      <section className='searches-list'>
        <h3>My Searches</h3>
        <Link className="create-new-button" to={`/createsearch/${id}`}><span>Add A Search</span></Link>
        <ul>
          {searches &&
            searches.map((search, index) => (
              search.interestId === interestcard.id
               ? 
               <div key={search.id}>
               <SearchCard interestcard={interestcard} search={search}/>
               </div>
                : null
              ))}
            </ul>
      </section>
      <section className='pages-view'>
      <h3>Pages</h3>
        <Link className="create-new-button" to={`/createpage/${id}`}><span>Create New Page</span></Link>
        </section>
            <ul>
          {pages &&
            pages.map((page, index) => (
              page.interestId === interestcard.id
               ? 
               <div key={page.id}>
               <PageCards interestcard={interestcard} page={page}/>
               </div>
                : null
              ))}
            </ul>
    </div>
  )
}

export default InterestCard