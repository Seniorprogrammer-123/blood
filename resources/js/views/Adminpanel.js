import React from 'react';
import { getUser, getToken, removeUserSession, setUserSession, getPermission } from '../Utils/Common';
import '../../css/dashboard.css';

function Adminpanel(props) {
  const user = getUser();
  // console.log(user);
  if(user.permission != 'Admin'){
    props.history.push('/dashboard');
  }
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  const handleUsers = () => {
    props.history.push('/users');
  }

  const handleLabs = () => {
    props.history.push('/laboratories');
  }

  const handleAdmins = () => {
    props.history.push('/admins');
  }

  const handleAdminPanel = () => {
    props.history.push('/dashboard');
  }

  const inputStyle = {
      borderRadius: '30px',
      backgroundColor: 'lightgrey',
      textIndent: '20px',
      lineHeight: '40px',
      height: '50px',
  };

  const logoutStyle = {
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: '20px',
    lineHeight: '30px',
  };
 
  return (
    <div className="justify-contect-center">
        <div className="tx-center">
            <div className="row">
                <h1>ADMINISTRACIÓN</h1>
            </div>
        </div>
        <div className="row tx-center">
            <div className="col-lg-6">
                <button onClick={handleUsers}>USUARIAS</button>
            </div>
            <div className="col-lg-6">
                <button onClick={handleLabs}>LABORATORIOS</button>
            </div>
        </div>
        <div className="row tx-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 tx-center">
                <button onClick={handleAdmins}>ADMINISTRADOR</button>
            </div>
            <div className="col-lg-4"></div>
        </div>
        <div className="row tx-center">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 tx-center">
                <button onClick={handleAdminPanel}>PANEL DE ADMINISTRADOR</button>
            </div>
            <div className="col-lg-3"></div>
        </div>
        <div className="row tx-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <button style={logoutStyle} onClick={handleLogout}>Cerrar Sesion</button>
            </div> 
            <div className="col-lg-4"></div>          
        </div>
    </div>
  );
}

export default Adminpanel;