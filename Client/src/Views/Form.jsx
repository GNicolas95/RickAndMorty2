import {useState} from "react";
import {validar} from "../helpers";
import styles from "./Form.module.css"

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
    <div className={styles.formContainer}>
      <form onSubmit={submitHandler} className={styles.form}>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={inputHandler}
            placeholder="correo@electronico.com"
            className={styles.input}
          />
          <span className={styles.error}>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={inputHandler}
            placeholder="Password"
            className={styles.input}
          />
        </div>
        {errors.password && <span className={styles.error}>{errors.password}</span>}
        <button
          disabled={disableHandler()}
          type="submit"
          className={styles.submitButton}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form;