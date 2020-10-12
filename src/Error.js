import React, { useEffect, useRef, useState } from "react";
import Todo from "./components/Todo";
import Forms from "./components/Form";
import { nanoid } from "nanoid";
import FilterButton from "./components/FilterButton";

function Error(props) {
    return (
    
        <div>
            <h1>Oops! Page not found!</h1>
        </div>);
};

export default Error;