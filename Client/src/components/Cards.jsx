import Card from './Card';
import styles from "./Cards.module.css";

function Cards({characters, onClose}) {

   return (
      <div className={styles.cardsContainer}>
         {characters.map((character) => (
            <Card key={character.id} character={character} onClose={onClose} />
         ))}
      </div>
   );
}

export default Cards;
