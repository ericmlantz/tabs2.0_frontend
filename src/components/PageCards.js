import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { GetAllPages } from "../services/PageServices"
import { UpdatePage } from '../services/PageServices'

const PageCards = ({page, pages, setPages, getInterestCard, interestcard, handleRemove}) => {

  return (
    <div className='container'>
      <div draggable='true' className="box">{page.title}
      <div>
        <p>{page.notes}</p>
        <button onClick={() => handleRemove(page.id)}>Delete Page</button>
        {/* <button onClick={() => handleUpdate()}>Update Page</button> */}
      </div>
      </div>
    </div>
  )
}
export default PageCards