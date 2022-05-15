import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { GetAllPages } from "../services/PageServices"


const PageCards = ({page, pages, setPages, getInterestCard, interestcard, handleRemove}) => {

  const { id } = useParams()
  const UpdatePage = async (id, data) => 
    await UpdatePage(id, data)
    setPages(id)


    const enableUpdate = (e) => {
      e.preventDefault()
      
      setPages({ ...pages, [e.target.name]: e.target.value })
     
    }
  return (
    <div className='container'>
      <div draggable='true' className="box">{page.title}
      <div>
        <p>{page.notes}</p>
        {console.log(page.notes)}
        <button onClick={() => handleRemove(page.id)}>Delete Page</button>
        <button onClick={() => updatePage(page.id)}>Update Page</button>
      </div>
      </div>
    </div>
  )
}
export default PageCards