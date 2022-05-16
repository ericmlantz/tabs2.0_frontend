import { useEffect, useState, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { GetInterestByPk } from "../services/InterestServices"
import { GetAllPages } from '../services/PageServices'
import PageCards from "./PageCards"
import { GetAllSearches } from '../services/SearchServices'
import SearchCard from './SearchCard'
import { DeletePage } from "../services/PageServices"
import GSearch from "./GSearch"
import ClientOnly from "../hooks/ClientOnly"

const InterestCard = () => {
  
  const navigate = useNavigate()

  let { id } = useParams()

  const [searches, setSearches] = useState([])
  const [interestcard, setInterestCard] = useState([])
  const [pages, setPages] = useState([])

  const getInterestCard = async (id) => {
    const res = await GetInterestByPk(id)
    setInterestCard(res)
  }

  const getAllPages = async () => {
    const res = await GetAllPages();
    setPages(res)
  }
  const handleRemove = (pk) => {
    DeletePage(pk)
    const newPages = pages.filter((page) => page.id !== pk);
    setPages(newPages);
    navigate(`/interests/${interestcard.id}`)
  }

  const getAllSearches = async () => {
    const res = await GetAllSearches();
    setSearches(res)
  }

  useEffect(() => {
    getInterestCard(id)
    getAllPages()
    getAllSearches()
  }, [id])
    
  return (
    <div>
      <h1 className='webpage-title'>{interestcard.topic}</h1>
      <section className='searches-list'>
        <p className='section-title'>Searches</p>
        <Link className="create-new-button" to={`/createsearch/${id}`}><span>Add A Note</span></Link>
        <ClientOnly> 
          <GSearch /> 
        </ClientOnly>
        <ul>
          {searches &&
            searches.map((search, index) => (
              search.interestId === interestcard.id
               ? 
               <div key={search.id}
               draggable>
               <SearchCard pages={pages} interestcard={interestcard} search={search}/>
               </div>
                : null
              ))}
            </ul>
      </section>
      <section className='pages-view'>
      <p className='section-title'>Pages</p>
        <Link className="create-new-button" to={`/createpage/${id}`}><span>Create New Page</span></Link>
        </section>
            <ul>
          {pages &&
            pages.map((page, index) => (
              page.interestId === interestcard.id
               ? 
               <div key={page.id}>
               <PageCards interestcard={interestcard} getInterestCard={getInterestCard} page={page} pages={pages} handleRemove={handleRemove} setPages={setPages}/>
               </div>
                : null
              ))}
            </ul>
    </div>
  )
}

export default InterestCard