import Cards from "../components/Cards";
import {useSelector, useDispatch} from "react-redux";
import {orderFavorites, filterFavorites, resetFavorites} from "../redux/Actions";
import './App1.css';


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
            <select placeholder="Gender" onChange={handleFilter}>
                {["Male", "Female", "unknown", "Genderless"].map((gender) => (
                    <option key={gender} value={gender}>{gender}</option>
                ))}
            </select>
            <select placeholder="Order" onChange={handleSort}>
                {["Ascendente", "Descedente"].map((order) => (
                    <option key={order} value={order}>{order}</option>
                ))}
            </select>
            <button onClick={handleReset}>Reset Filter</button>
            <Cards characters={favorites}/>
        </div>
    )
}

export default Favorites;
