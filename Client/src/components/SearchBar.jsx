import {useState} from "react";

function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   function changeHandler (e){ 
      setId(e.target.value);
   }
 
   return (
      <div>
         <input type='search' onChange={changeHandler} value={id} placeholder="Search Character" />
         <button onClick={() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar;
 