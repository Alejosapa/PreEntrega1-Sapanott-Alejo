import React from 'react';
import "bulma/css/bulma.css";
import CartWidget from "./CartWidget";
function NavBar (props){

    return(
        <div>
            <section classname="hero is-danger">
            <h1>{props.titulo}</h1>
            <nav>
                <ul>
                    <li>Catalogo</li>
                    <li>Ultimos lanzamientos</li>
                    <li>registrarse</li>
                </ul>
                <CartWidget/>
            </nav>
            </section>
        </div>
    )
}

export default NavBar;