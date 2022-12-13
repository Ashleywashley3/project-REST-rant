const React = require('react')
const Def = require('../default')

function show (data) {
    let message = ''
        if (data.message) {
            message = (
                <h4 className="alert-danger">
                    {data.message}
                </h4>
            )
        }
    let comments = (
        <h3 className="inactive">
          No comments yet
        </h3>
      )
      let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
                {message}
            <div className="row">
                <div className='col-sm-6'>
                    <img src={data.place.image} alt={data.place.name}/>
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div className="col-sm-6">
                    <h1>{ data.place.name }</h1>
                    <h2>
                        Rating
                    </h2>
                    {rating}
                    <br />
                    <h2>
                        Description
                    </h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <hr />
            <h2>Comments</h2>
            <div className="row">
                {comments}
            </div>
            <hr />
          </main>
        </Def>
    )
}

module.exports = show
