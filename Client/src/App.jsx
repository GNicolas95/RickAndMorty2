import {useState, useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'; 
import axios from 'axios';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import Detail from './Views/Detail';
import ErrorPage from './Views/ErrorPage';
import Form from "./Views/Form";
import Favorites from './Views/Favorites';
import About from './Views/About';
import './App.css';
import { useDispatch } from 'react-redux';


function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();
  

  async function loginHandler(userData) {

    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const {access} = data;
      setAccess(data);
      access && navigate('/home');
      
    } catch (error) {
      console.log(error)
    }

 }

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  
  async function searchHandler(id) {

    try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const data = response.data
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    } catch (error) {
      console.log(err)
    }

  }
  

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id))

    setCharacters(deleted);
  }

  function randomHandler() {
    let memoria = [];
    let randomId = (Math.random() * 826).toFixed();
  
    randomId = Number(randomId);
  
    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className='App'>
        {location.pathname !== "/" && (
          <NavBar 
          onSearch={searchHandler} 
          randomize={randomHandler}
          logout={logoutHandler}
          />
        )}
        
        <Routes>
          <Route path='/' element={<Form form={loginHandler} />} />
          <Route path='/Home' element={<Cards characters={characters} onClose={closeHandler} />}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Detail/:id' element={<Detail/>}/>
          <Route path='/Favorites' element={<Favorites/>}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>   
    </div>
  );
}

export default App;
