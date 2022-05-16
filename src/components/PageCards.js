const PageCards = ({page, pages, setPages, getInterestCard, interestcard, handleRemove}) => {

  return (
    <div className='page-container'>
      <div className="note-title"><b>{page.title}</b><br/>
      <a className='page-links' href={page.url}>{page.url}</a>
      <div>
        <button className='delete-page' onClick={() => handleRemove(page.id)}>Delete Page</button>
      </div>
      </div>
    </div>
  )
}
export default PageCards