import React, {useState} from "react";
import ReactDOM from "react-dom";

const Form = props => {
    const [form, setForm] = useState({
        id: Date.now(),
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewForm(form);
        setForm({name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Member's Name</label><br/>
            <input 
                id="name"
                type="text"
                placeholder="John Smith"
                name="name"
                onChange={handleChanges}
                value={form.name}
                required
            /><br/>
            <label htmlFor="email">Member's Email</label><br/>
            <input
                id="email"
                type="email"
                placeholder="exampleemail@domain.com"
                name="email"
                onChange={handleChanges}
                value={form.email}
                required
            /><br/>
            <label htmlFor="role">Member's Role</label><br/>
            <select
                id="role"
                name="role"
                type="text"
                onChange={handleChanges}
                value={form.role}
            >   
                <option value="Pick a role">Pick a role</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="UX">UX</option>
            </select><br/>
            <button type="submit">Submit Member</button>
        </form>
    )
};
export default Form;