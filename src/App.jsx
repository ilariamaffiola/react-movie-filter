

function App() {
  let films= [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  return (
    <>
      <div className="container">
        <div className='row'>
          <div className='col-6'>
            <div className="list-group">
              <ul>
                  {films.map((film, index) =>(
                    <li
                     className="list-group-item d-flex justify-content-between align-items-center"
                     key={index}
                    >
                      {film.title}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
