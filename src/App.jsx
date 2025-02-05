import { useState } from 'react'
import './App.css'
import FormInput from './Compo-form/FormInput';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    dateofbirth: "",
    password: "",
    confirmPassword: ""
});

const inputs = [{
id : 1,
name: "username",
label : "Username",
type: "text",
placeholder: "Username",
pattern : "^[A-Za-z0-9]{3,16}$",
errormessage : "Username should be 3-16 characters and shouldn't include any special character!",
required: true,
},
 {
    id : 2,
    name: "email",
    label : "Email",
    type: "email",
    placeholder: "Enter your Email",
    errormessage : "Please enter valid Email address",
    required: true,
}, {
    id : 3,
    name: "dateofbirth",
    label : "Date of Birth",
    type: "date",
    placeholder: "Enter your Date of Birth",
    errormessage :  "",
    required: true,
}, {
    id : 4,
    name: "password",
    label : "Password",
    type: "password",
    placeholder: "Password",
    pattern : `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errormessage : "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    required: true,
}, {
    id : 5,
    name: "confirmPassword",
    label : "Confirm Password",
    type: "password",
    placeholder: "Confirm Password",
    pattern : values.password,
    errormessage : "Password do not match.",
    required: true,
}];

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(values)
}

const handleChange = (e) => {
  setValues({...values, [e.target.name]: e.target.value})
  console.log(e.target.name);
  console.log(e.target.value);
}


return (
<div className='app'>
  <h1> Registration Form </h1>
  <form onSubmit={handleSubmit}>
  {inputs.map((input) => (
      <FormInput
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={handleChange}
      />
    ))}
    <button type="submit">Submit</button>
  </form>
</div>
)
}

export default App
