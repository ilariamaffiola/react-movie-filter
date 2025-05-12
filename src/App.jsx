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
  const [genre, setGenre] = useState(""); //genere selezionato
  const [filteredFilms, setFilteredFilms] = useState(films); //film da visualizzare
  const handleChange = (e) => {
    setGenre(e.target.value) //quando un genere viene selezionato viene salvato in genere
  }
  //useEffect si attiva ogni volta che un genere viene selezionato un genere
  useEffect(() => {
    if(genre === "") { //se genere è vuoto mostra tutti i film
      setFilteredFilms(films);
    }
    else{ //altrimenti mostra i film che corrispondono al genere scelto
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
              {/*è un select controllato, che mostra il valore attuale e lo aggiorna al cambio attraverso lo stato*/}
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
                {/* bisogna mettere filteredFilms oerché films è l'array completo non filtrato */}
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
