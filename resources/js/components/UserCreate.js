import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/user.css';


class UserCreate extends Component {

    constructor (props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            dni_number: '',
            especialy: '',
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
            firstname,
            lastname,
            dni_number,
            especialy,
            email,
            password,
        } = event.target

        const { history } = this.props

        if(firstname.value == ''){
            firstname.focus();
            return;
        }
        if(lastname.value == ''){
            lastname.focus();
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
        if(especialy.value == ''){
            especialy.focus();
            return;
        }
        if(dni_number.value == ''){
            dni_number.focus();
            return;
        }

        const data = {
            name : firstname.value + " " + lastname.value,
            email : email.value,
            especialy : especialy.value,
            dni_number : dni_number.value,
            password : password.value,
        }

        
        
        axios.post('/users/create', data)
            .then(response => {
                // redirect to the homepage
                history.push('/users')
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
                    <center><h2>USUARIO: NOMBRE</h2></center>
                    <form onSubmit={this.handleCreateNewItem} encType="multipart/form-data"> 
                        <div className="bg-component">
                            <div className="row">
                                <div className="col-lg-4"><label>NOMBRES</label></div>
                                <div className="col-lg-8"><input type="text" name="firstname" /></div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-4"><label>APELLIDOS</label></div>
                                <div className="col-lg-8"><input type="text" name="lastname" /></div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-4"><label>RUT/PASAPORTE</label></div>
                                <div className="col-lg-8"><input type="text" name="dni_number" /></div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-4"><label>ESPECIALIDAD</label></div>
                                <div className="col-lg-8"><input type="text" name="especialy" /></div>
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
                                <center><Link className='btn btn-primary' to='/users' style={this.cancelStyle}>VOLVER</Link></center>
                            </div>
                        </div>                    
                    </form>
                </div>
            </div>
        )
    }
}

export default UserCreate