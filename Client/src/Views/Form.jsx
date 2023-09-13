import {useState} from "react";
import {validar} from "../helpers";
import './App1.css';

function Form({form}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    email: "Email required", 
    password: "Password required", 
  })

  function inputHandler(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })

    setErrors(
      validar({
        ...userData,
        [event.target.name]: event.target.value,
      })
    )
  }

  function submitHandler(event) {
    event.preventDefault();
    form(userData);
  }

  function disableHandler() {
    let disabled = false
    for (let error in errors) {
      if (errors[error] !== "") {
        disabled = true;
        break;
      }
    }
      return disabled;
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={inputHandler}
            placeholder="correo@electronico.com"
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label>Passward</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={inputHandler}
            placeholder="Password"
          />
        </div>
        {errors.password && <span>{errors.password}</span>}
        <button disabled={disableHandler()} type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form;