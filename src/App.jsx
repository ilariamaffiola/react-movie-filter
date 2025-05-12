import { useState, useEffect } from "react";

function App() {
  let films= [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];
  const [genre, setGenre] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(films);
  const handleChange = (e) => {
    setGenre(e.target.value)
  }
  useEffect(() => {
    if(genre === "") {
      setFilteredFilms(films);
    }
    else{
      const filtered = films.filter((film) => film.genre === genre);
      setFilteredFilms(filtered);
    }
  }, [genre]);

  return (
    <>
      <div className="container">
        <div className='row justify-content-center'>
          <div className='col-8 d-flex align-items-center'>
            <form className="text-center">
              <select value={genre} onChange={handleChange} name="films" id="films">
                 <option value="">Scegli un genere</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>  
              </select>
            </form>
            <div className="list-group">
              <ul>
                  {filteredFilms.map((film, index) =>(
                    <li
                     className="list-group-item d-flex justify-content-center"
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
