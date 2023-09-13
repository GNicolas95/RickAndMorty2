import Card from './Card';
import "./Cards.css";

function Cards({characters, onClose}) {

   return (
      <div className='cardList'>
         {characters.map((character) => (
            <Card key={character.id} character={character} onClose={onClose} />
         ))}
      </div>
   );
}

export default Cards;
