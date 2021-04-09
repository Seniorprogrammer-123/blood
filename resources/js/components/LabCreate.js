import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/user.css';


class AdminCreate extends Component {

    constructor (props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            errors: []
        }

        this.handleCreateNewItem = this.handleCreateNewItem.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)

        this.input = React.createRef();  

        this.buttonStyle = {
            width: '50%',
            borderRadius: '20px',
            backgroundColor: '#A2E355',
            lineHeight: '35px',
            cursor: 'pointer',
            color: 'white',
            border: 'none',
        };

        this.cancelStyle = {
            width: '30%',
            borderRadius: '20px',
            backgroundColor: 'transparent',
            lineHeight: '35px',
            cursor: 'pointer',
            color: 'black',
            border: 'none',
        };

    }
    

    handleCreateNewItem (event) {
        event.preventDefault();

        const { 
            name,
            email,
            password,
        } = event.target

        const { history } = this.props

        const data = {
            name : name.value,
            email : email.value,
            password : password.value,
        }

        if(name.value == ''){
            name.focus();
            return;
        }
        if(email.value == ''){
            email.focus();
            return;
        }
        if(password.value == ''){
            password.focus();
            return;
        }
        
        axios.post('/labs/create', data)
            .then(response => {
                // redirect to the homepage
                history.push('/laboratories')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
        
    }

    hasErrorFor (field) {
        return !!this.state.errors[field]
    }

    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render () {
        return (
            <div className='row container justify-content-center'>
                <div className="col-md-8">
                    <center><h2>LABORATORIO: NOMBRE</h2></center>
                    <form onSubmit={this.handleCreateNewItem} encType="multipart/form-data"> 
                        <div className="bg-component">
                            <div className="row">
                                <div className="col-lg-4"><label>NOMBRES</label></div>
                                <div className="col-lg-8"><input type="text" name="name" /></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"><label>EMAIL</label></div>
                                <div className="col-lg-8"><input type="email" name="email" /></div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-4"><label>PASSWORD</label></div>
                                <div className="col-lg-8"><input type="password" name="password" /></div>
                            </div> 
                        </div>  
                        <div className="row justify-content-center">               
                            <div className='col-md-8'>
                                <center><button className='btn btn-primary' style={this.buttonStyle}>GUARDAR</button></center>
                            </div>
                            <div className='col-md-8'>
                                <center><Link className='btn btn-primary' to='/laboratories' style={this.cancelStyle}>VOLVER</Link></center>
                            </div>
                        </div>                    
                    </form>
                </div>
            </div>
        )
    }
}

export default AdminCreate