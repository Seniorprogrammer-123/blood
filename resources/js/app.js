import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import '../css/index.css';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Adminpanel from './views/Adminpanel';
import Logo from './components/Logo';
import About from './views/About';
import ReportList from './components/ReportList';
import ReportCreate from './components/ReportCreate';
import ReportEdit from './components/ReportEdit';
import ReportView from './components/ReportView';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import UserCreate from './components/UserCreate';
import LabList from './components/LabList';
import LabCreate from './components/LabCreate';
import LabEdit from './components/LabEdit';
import AdminList from './components/AdminList';
import AdminCreate from './components/AdminCreate';
import AdminEdit from './components/AdminEdit';
import LabListView from './components/LabListView';
import LabDateView from './components/LabDateView';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import FindResultList from './components/FindResultList';
import SendSMS from './components/SendSMS';
import { getToken, removeUserSession, setUserSession, getPermission } from './Utils/Common';

axios.defaults.baseURL='http://127.0.0.1:8000/api';
 
function App() {
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {  
    const token = getToken();  
    
    if (!token) {
      return;
    }
    
    axios.get(`http://localhost:8000/api/verifyToken/${token}`).then(response => {
      setUserSession(response.data.token, response.data.user,  response.data.permission);
      setAuthLoading(false);
      if(response.data.is == 'n'){
        props.history.push('/login');
      }
    }).catch(error => {
      
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
 
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Logo />
          <div className="row">
            <div className="content">
              <Switch>
                <Route exact path="/" component={
                    getToken() ? 
                      getPermission() == "Admin" ? 
                        Adminpanel 
                        : getPermission() == "User" ? 
                          Dashboard 
                          : getPermission() == "Lab" ? 
                            LabListView 
                            : Login 
                      :Login
                  } />
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/adminpanel" component={Adminpanel} />
                <PrivateRoute path="/search" component={About} />
                <PrivateRoute path="/viewListByData" component={ReportList} />
                <PrivateRoute path="/users/:id/edit" component={UserEdit} />
                <PrivateRoute path="/admins/:id/edit" component={AdminEdit} />
                <PrivateRoute path="/labs/:id/edit" component={LabEdit} />
                <PrivateRoute path="/create" component={ReportCreate} />
                <PrivateRoute path="/:id/edit" component={ReportEdit} />
                <PrivateRoute path="/:id/view" component={ReportView} />
                <PrivateRoute path="/users/create" component={UserCreate} />
                <PrivateRoute path="/users" component={UserList} />
                <PrivateRoute path="/labs/create" component={LabCreate} />
                <PrivateRoute path="/laboratories" component={LabList} />
                <PrivateRoute path="/admins/create" component={AdminCreate} />
                <PrivateRoute path="/admins" component={AdminList} />
                <PrivateRoute path="/labview" component={LabListView} />
                <PrivateRoute path="/labdateview/:date" component={LabDateView} />
                <PrivateRoute path="/finddata/:name" component={FindResultList} />
                <PrivateRoute path="/sendsms" component={SendSMS} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));