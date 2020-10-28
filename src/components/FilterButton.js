import React from "react";

function FilterButton(props) {
    return(

        <form>
            <input type="radio"className="btn toggle-btn" 
 aria-pressed={props.isPressed}
 onClick={() => props.setFilter(props.name)}></input>
        
 <button type="button" 
 
 >
 <span className="visually-hidden">Show </span>
 <span>{props.name}</span>
 <span className="visually-hidden"> tasks</span>
</button>
</form>
    );
}
export default FilterButton;