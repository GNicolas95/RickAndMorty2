import {useState} from "react";
import styles from "./SearchBar.module.css";


function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   function changeHandler (e){ 
      setId(e.target.value);
   }
 
   return (
      <div className={styles.searchContainer}>
      <input
        type='search'
        onChange={changeHandler}
        value={id}
        placeholder="Search Character"
        className={styles.searchInput}
      />
      <button onClick={() => onSearch(id)} className={styles.addButton}>
        Agregar
      </button>
    </div>
   );
}

export default SearchBar;
 