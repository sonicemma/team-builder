import React from "react";
import Form from "./Form";

const Members = props => {
    return (
        <div className="members">
            {props.form.map(form => (
                
                <div className="member" key={form.id}>
                    <h2>{form.name}</h2>
                    <p>{form.email}</p>
                    <p>{form.role}</p>
                </div>
            ))}
        </div>
    )
}

export default Members;