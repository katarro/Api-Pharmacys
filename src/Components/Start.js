import React from 'react'
import fondo from '../Media/icono-start.jpg';
import '../Styles/Start.css'
import {Link} from 'react-router-dom'
function Start(){
    return(
        <React.Fragment>
            
        <div className="Fondo-Start">
            <div className="icono-start">
                <img src={fondo} alt=""/>
            <div className="boton-start">
                <Link to="/form">
                    <button className="btn btn-success btn-lg">Click to view Pharmacys</button>
                </Link>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Start