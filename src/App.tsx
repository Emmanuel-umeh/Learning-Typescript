import React from "react";
import TextField from "./components/TextField";

const App: React.FC = () => {
  const Person = {
    name: "Amaka",
    age: 16,
  };

  const logData = () => {
    console.log("this is a console.log statement");
  };
  return (
    <div>
      <h1>Hello world</h1>

      <TextField text="This is a text" handleChange={logData} data={Person} />
    </div>
  );
};

export default App;
