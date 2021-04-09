import React, { useState } from 'react';
import axios from 'axios';
import '../../css/login.css';
import { getToken, removeUserSession, setUserSession, getPermission } from '../Utils/Common';

axios.defaults.baseURL='http://127.0.0.1:8000/api';


function Login(props) {

  if(getToken()){
    props.history.push('/');
  }
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  const cancelStyle = {
    width: '100%',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    lineHeight: '35px',
    cursor: 'pointer',
    color: 'black',
    border: 'none',
  };

  const buttonStyle = {
    width: '100%',
    borderRadius: '20px',
    backgroundColor: '#A2E355',
    lineHeight: '35px',
    cursor: 'pointer',
    color: 'white',
    border: 'none',
  };
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    let body = { 
      username: username.value, 
      password: password.value, 
    };
    if(username.value == ''){
      setLoading(false);
      username.focus();
      return;
    }
    if(password.value == ''){
      setLoading(false);
      password.focus();
      return;
    }
    axios.post('http://localhost:8000/api/users/signin', body)
      .then(response => {
        if(response.data.is == 'n'){
          setLoading(false);
          return;
        }
        setLoading(false);
        setUserSession(response.data.token, response.data.user, response.data.permission);
        
        if(response.data.permission == 'Admin'){
          props.history.push('/adminpanel');
        }else if(response.data.permission == 'User'){
          props.history.push('/dashboard');
        }
        else if(response.data.permission == 'Lab'){
          props.history.push('/labview');
        }else{
          props.history.push('/login');
        }
        
      })
      .catch(error => {
        setLoading(false);
      });
  }

  const handleGetPassword = () => {
    return;
  }
 
  return (
    <>
    <div className="justify-content-center row logolabel"><h2>LOGIN</h2><h2></h2></div>
    <div className="justify-content-center row">
      <div className="bg-component col-lg-6">
        <div className="row">
          <div className="col-lg-4"><center><label>EMAIL</label></center></div>
          <div className="col-lg-8"><input type="email" {...username} autoComplete="new-password" name="username" /></div>
        </div>
        <div style={{ marginTop: 10 }} className="row">
          <div className="col-lg-4"><center><label>PASSWORD</label></center></div>
          <div className="col-lg-8"><input type="password" {...password} autoComplete="new-password" name="password" /></div>
        </div>
      </div>
    </div>
    <div className="row"><br />
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <div className="col-lg-5"></div>
      <div className="col-lg-2"><button onClick={handleLogin} className='btn btn-primary' style={buttonStyle} disabled={loading}>{loading ? 'Loading...' : 'ACCEDER'}</button></div>
      <div className="col-lg-5"></div>
    </div>
    <div className="row"><br />
      <div className="col-lg-4"></div>
      <div className="col-lg-4"><button onClick={handleGetPassword} className='btn btn-primary' style={cancelStyle} >Recuperar Contraseña</button></div>
      <div className="col-lg-4"></div>
    </div>
    </>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;