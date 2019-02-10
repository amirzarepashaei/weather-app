import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () =>{
    return(
        <div>
            <NavLink to="/"></NavLink>
            <NavLink to="/weather"></NavLink>
        </div>
    );
};

export default Navigation;