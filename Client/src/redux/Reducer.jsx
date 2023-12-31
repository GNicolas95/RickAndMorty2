import {ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET} from "./Actions";

let initialState = {characters: [], myFavorites:[], allCharacters: []}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload, 
            }

        case REMOVE_FAV:
            return { ...state, 
                myFavorites: action.payload 
            }

        case ORDER:
            let ordenados;
            if (action.payload === "Ascendente") {
                ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else {
                ordenados = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
            }
            return {
                ...state,
                myFavorites: [...ordenados]
            }
            
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((characters) => characters.gender === action.payload)
            }   
            
        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters
            }                

        default:
            return {
                ...state,
            }    
    }
}

export default rootReducer;