import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/Actions";
import { useState, useEffect } from "react";
import styles from "./Card.module.css"


function Card(props) {
  const navigate = useNavigate();
  const { character, onClose, favorites, addFavorite, removeFavorite } = props;
  const [fav, setFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  function navigateHandler() {
    navigate(`/Detail/${character.id}`);
  }

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    favorites.forEach((favItem) => {
      if (favItem.id === character.id) {
        setFav(true);
      }
    });
  }, [favorites]);

  function handleFavorite() {
    if (!fav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character.id);
      setFav(false);
    }
  }

  return (
    <div className={styles.characterCard}>
      <div className={styles.characterInfo}>
        <h2>{character.name}</h2>
        <img
          src={character.image}
          alt={character.name}
          className={styles.characterImage}
          onClick={navigateHandler}
        />
        {closeBtn && (
          <button className={styles.closeButton} onClick={() => onClose(character.id)}>X</button>
        )}
        {fav ? (
          <button className={styles.favoriteButton} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={styles.favoriteButton} onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <div className={styles.characterDetails}>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
      </div>
    </div>

  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);



