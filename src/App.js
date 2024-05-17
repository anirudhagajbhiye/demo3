import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { handleChange } from "react";

function App() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [textarea, setTextarea] = useState("");
  const [select, setselect] = useState("");
  const [myCar, setMyCar] = useState("Volvo");

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    textarea: "",
    select: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(userInfo));
    console.log("First  Name =", userInfo, first_name);
    console.log("Last Name = ", userInfo, last_name);
    console.log("Age = ", userInfo.age);
    console.log("textarea = ", userInfo.textarea);
    console.log("select = ", userInfo.select);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          &nbsp; Enter first name: &nbsp;
          <input
            type="text"
            name="first_name"
            onChange={(event) => {
              setUserInfo((prevState) => {
                return { ...userInfo, firstName: event.target.value };
              });
            }}
          />
          <br />
          <br />
          &nbsp; Enter last name: &nbsp;
          <input
            type="text"
            name="last_name"
            onChange={(event) => {
              setUserInfo((prevState) => {
                return { ...userInfo, lastName: event.target.value };
              });
            }}
          />
          <br />
          <br />
          &nbsp; Enter your Age: &nbsp;
          <input
            type="text"
            name="age"
            onChange={(event) => {
              setUserInfo((prevState) => {
                return { ...userInfo, age: event.target.value };
              });
            }}
          />
        </label>
        <br />
        <br />
        &nbsp;
        <button type="submit">submit</button>
        <br />
        <label>
          &nbsp;Text-area: &nbsp;
          <textarea
            type="text"
            name="textarea"
            onChange={(event) => {
              setUserInfo((prevState) => {
                return { ...userInfo, textarea: event.target.value };
              });
            }}
          />
        </label>
        <br />
        <label>
          &nbsp;Select Cars: &nbsp;
          <select defaultValue={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default App;
