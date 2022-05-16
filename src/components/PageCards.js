import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { GetAllPages } from "../services/PageServices"
import { UpdatePage } from '../services/PageServices'

const PageCards = ({page, pages, setPages, getInterestCard, interestcard, handleRemove}) => {

  return (
    <div className='page-container'>
      <div className="note-title"><b>{page.title}</b><br/>
      {page.url}<hr/>
      <div>

        <button className='delete-page' onClick={() => handleRemove(page.id)}>Delete Page</button>
      </div>
      </div>
    </div>
  )
}
export default PageCards