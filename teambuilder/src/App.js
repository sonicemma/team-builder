import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Members from "./components/Members";



function App() {

  const [form, setForm] = useState([])

  const addNewForm = forms => {
    const newForm = {
        id: Date.now(),
        name: forms.name,
        email: forms.email,
        role: forms.role
    };
    setForm([...form, newForm]);
  }


  return (
    <div className="container">
      <h1 className="h1Title">Team Builder</h1>
      <div className="form">
        <Form addNewForm={addNewForm} />
        <Members form={form}/>
      </div>
    </div>
  );
}

export default App;
