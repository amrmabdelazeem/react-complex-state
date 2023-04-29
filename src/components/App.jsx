import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: preValue.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: preValue.firstName,
          lastName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
