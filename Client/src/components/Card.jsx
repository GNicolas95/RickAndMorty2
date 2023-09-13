import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {addFavorite, removeFavorite} from "../redux/Actions";
import {useState, useEffect} from "react";
import "./Card.css";


function Card(props) {
   const navigate = useNavigate();
   const {character, onClose, favorites, addFavorite, removeFavorite} = props;
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
      })
   }, [favorites])
   
   
   function handleFavorite() {
      if (!fav) {
         addFavorite(character)
         setFav(true)
      } else {
         removeFavorite(character.id)
         setFav(false)
      }
   }
    
   return (
      <div className="cardContainer">
         <div className="imageContainer">
            <h2 className="name">{character.name}</h2>
            <img className="characterImage" src={character.image} alt={character.name} onClick={navigateHandler} /> 
            {closeBtn && (<button className="closeButton" onClick={() =>
         {onClose(character.id);}}>X</button>
         )}
            {fav ? (
               <button onClick={() => handleFavorite(character.id)}>❤️</button>
               ) : (
                  <button onClick={() => handleFavorite(character.id)}>🤍</button>
                  )
               }
         </div>
         <div className="atributes">
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
   }
}

const mapStateToProps = (state) => {
   return {
      favorites: state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps) (Card);
 


