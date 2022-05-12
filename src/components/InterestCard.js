import CreatePage from "./CreatePage"

const InterestCard = ({pages, interest}) => {

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
        <button>Make New Page Button</button>
        <div>
          <h4>Page 1</h4>

          <CreatePage pages={pages} interest={interest}/>

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