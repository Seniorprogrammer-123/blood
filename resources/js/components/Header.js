import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReportList from './ReportList';
import ReportCreate from './ReportCreate';
import ReportEdit from './ReportEdit';
import axios from 'axios'
 
const Header = () => (
    <Router>  
        <div>  
            <nav className="navbar navbar-dark bg-primary   navbar-expand-lg  ">
            <Link to="/" className="navbar-brand" >Blood Test</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/"  className="nav-link"  >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/report/create" className="nav-link" >Add</Link>
                </li>
                
                </ul>
                
            </div>
            </nav> 
            
            <Route exact path="/" component={ReportList} />  
            <Route  path="/report/create" component={ReportCreate} />  
            <Route  path="/report/:id/edit" component={ReportEdit} />  
        
        </div>      
    </Router>  
)

export default Header;