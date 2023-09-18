import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; 

function NavBar({ onSearch, randomize }) {
  return (
    <div className={styles.navBar}> 
      <div>
        <Link to="/About" className={styles.navLink}>About</Link> 
        <Link to="/Home" className={styles.navLink}>Home</Link>
        <Link to="/Favorites" className={styles.navLink}>Fav</Link> 
      </div>
      <SearchBar onSearch={onSearch} />
      <button className={styles.navButton} onClick={randomize}>
        Add Random
      </button>
    </div>
  );
}

export default NavBar;
