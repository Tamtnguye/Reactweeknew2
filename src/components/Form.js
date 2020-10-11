
import React, { useState } from "react";


function Forms(props) {
    function handleChange(e) {
        
        setName(e.target.value);
      }
    const [name, setName] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
      }
    return(
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
      <button
            type="submit"
            className="btn btn__danger btn__lg"
            onClick={() => props.deleteAll(props.id) && localStorage.clear()}
          >
            Delete ALL Task 
            {/* <span className="visually-hidden">{props.name}</span> */}
          </button>
      
      </form>
    );
}
export default Forms;