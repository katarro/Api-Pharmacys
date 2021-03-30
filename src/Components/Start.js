import React from "react";
import fondo from "../Media/icono-start.jpg";
import "../Styles/Start.css";
import { Link } from "react-router-dom";
function Start() {
  return (
    <React.Fragment>
      <div className="Fondo-Start">
        <div className="icono-start">
          <img src={fondo} alt="" />
          <div className="boton-start">
            <Link to="/form">
              <button className="btn btn-success btn-lg">
                Click para ver farmacias
              </button>
            </Link>
          </div>
          <div className="mt-3">
            Para utilizar el servicio web debe descargar el siguiente:
            <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=es-419">
              Plugin
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Start;
