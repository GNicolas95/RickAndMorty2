import Cards from "../components/Cards";
import {useSelector, useDispatch} from "react-redux";
import {orderFavorites, filterFavorites, resetFavorites} from "../redux/Actions";
import styles from "./Favorites.module.css"


function Favorites() {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites)

    function handleSort(event) {
        dispatch(orderFavorites(event.target.value));
    }

    function handleFilter(event) {
        dispatch(filterFavorites(event.target.value));
    }

    function handleReset() {
        dispatch(resetFavorites());
    }

    return (
        <div>
            <div className={styles.filterContainer}>
                <select placeholder="Gender" onChange={handleFilter} className={styles.select}>
                {["Male", "Female", "unknown", "Genderless"].map((gender) => (
                <option key={gender} value={gender}>{gender}</option>
                ))}
                </select>
                <select placeholder="Order" onChange={handleSort} className={styles.select}>
                {["Ascendente", "Descedente"].map((order) => (
                <option key={order} value={order}>{order}</option>
                ))}
                </select>
                <button onClick={handleReset} className={styles.button}>
                Reset Filter
                </button>
            </div>
            <div>
                <Cards characters={favorites} />
            </div>
        </div>
    )
}

export default Favorites;
