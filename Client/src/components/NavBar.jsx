import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";


function NavBar({onSearch, randomize}) {
    return (
        <div > 
            <div>
                <Link to="/About">About</Link>
                <Link to="/Home">Home</Link>
                <Link to="/Favorites">Fav</Link>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={randomize}>Add Random</button>
        </div>
    )
}

export default NavBar;