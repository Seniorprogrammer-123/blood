import React from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import '../../css/dashboard.css';

function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  const handleSearch = (event) => {

        let name = document.getElementById("searchword").value;
        if(name == ""){
                props.history.push('/search');
        }else{            
                props.history.push('/finddata/'+name);
        }
    
  }

  const handleCreate = () => {
    props.history.push('/create');
  }

  const handleEdit = () => {
    props.history.push('/viewListByData');
  }

  const inputStyle = {
      borderRadius: '30px',
      backgroundColor: 'lightgrey',
      textIndent: '20px',
      lineHeight: '40px',
      height: '50px',
      textAlign: "center",
      paddingLeft: '20px',
      paddingRight: '20px'
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
                <h1>HOLA {user.name.toUpperCase()}!</h1>
            </div>
            <div className="row">
                <h3>Selecciona una de las opciones</h3>
            </div>
        </div>
        <div className="row tx-center">
            <div className="col-lg-6">
                <button onClick={handleCreate}>CREAR FICHA</button>
            </div>
            <div className="col-lg-6">
                <button onClick={handleEdit}>VER TUS FICHAS</button>
            </div>
        </div>
        <br /><br /><br /><br />
        <div className="tx-center">
            <div className="row">
                <h2>Buscar por RUT/NUMBRE/PASAPORTE</h2>
            </div>
            <div className="row">
                <h3>(Rut y pasaportes sin puntos ni guion)</h3>
            </div>
        </div>
        <div className="row tx-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 tx-center">
                <input type="text" name="searchword" id="searchword" style={inputStyle} />
            </div>
            <div className="col-lg-4"></div>
        </div>
        <div className="row tx-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 tx-center">
                <button onClick={handleSearch}>BUSCAR</button>
            </div>
            <div className="col-lg-4"></div>
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

export default Dashboard;