import React from 'react'
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render () {
    return (
        <div className="row">
            <div>
                <Link to="/" className="logo"><h1 id="appname" className="col-lg-8">FORUMULARIO SIMPLIFICADO MUESTARS PCR<br />WWW.PCRCHILE.CL - V.1.0</h1></Link>
                <img id="logo" src="/img/logo.jpg" /><img id="mark" src="/img/seremi-salud.jpg" />
            </div>                
        </div>
    )
  }
}

export default Logo;