import React from 'react';
import {Link} from 'react-router-dom';
 
const SendSMS = (props) => {
    const cancelStyle ={
        width: '100%',
        borderRadius: '20px',
        backgroundColor: 'transparent',
        lineHeight: '35px',
        cursor: 'pointer',
        color: 'black',
        border: 'none',
    }
  return (
    <>
    <div>
        <br />
        <br />
        <center><h2>PDFSUBMIDO EXITOSAMENTEI</h2></center>
        <br />
        <center><h2>RESULTADOS ENVIADOS POR EMAIL Y SMS</h2></center>
        <br />
    </div>
    <div className="row">
        <div className='col-md-4'></div>
        <div className='col-md-4'>
            <center><Link className='btn btn-primary' to="/labview" style={cancelStyle}>Volver al Listado</Link></center>
        </div>
        <div className='col-md-4'></div>
    </div>
    </>
  );
}
 
export default SendSMS;