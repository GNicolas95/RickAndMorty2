import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css"


function Detail() {
    const [character, setCharacter] = useState({});
    const {id} = useParams();
 
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
        return setCharacter({});
      }, []);

    return (
        <div className={styles.characterDetails}>
        <div className={styles.characterInfo}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
        <div className={styles.characterAttributes}>
          <div className={styles.attribute}>
            <h3>Species:</h3>
            <p>{character.species}</p>
          </div>
          <div className={styles.attribute}>
            <h3>Gender:</h3>
            <p>{character.gender}</p>
          </div>
          <div className={styles.attribute}>
            <h3>Status:</h3>
            <p>{character.status}</p>
          </div>
          <div className={styles.attribute}>
            <h3>Origin:</h3>
            <p>{character.origin}</p>
          </div>
          <div className={styles.attribute}>
            <h3>Location:</h3>
            <p>{character.location?.name}</p>
          </div>
        </div>
      </div>
    )
}

export default Detail;