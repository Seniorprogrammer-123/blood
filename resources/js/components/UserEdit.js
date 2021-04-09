import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
class UserEdit extends Component {
    
    constructor (props) {
        super(props)
        
        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            dni_number: '',
            especialy: '',
            email: '',
            errors: []
        }

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

        this.handleUpdateItem = this.handleUpdateItem.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)

        this.input = React.createRef();  
    }

    

    componentDidMount(){

        const id=this.props.match.params.id;
        axios.get(`/users/${id}/edit`)
        .then(response => {
            this.setState({ 
                email: response.data.email, 
                password: response.data.password, 
                dni_number: response.data.dni_number, 
                especialy: response.data.especialy, 
                firstname: response.data.name.split(" ")[0], 
                lastname: response.data.name.split(" ")[1], 
            });
            // console.log("name:========>", response.data.name);
        })
        .catch(function(error) {
            console.log(error);
        })

    }

    handleUpdateItem (event) {
        event.preventDefault();
        const id=this.props.match.params.id;
        const { firstname,lastname,email,password,especialy,dni_number } = event.target
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
            firstname: firstname.value,
            lastname: lastname.value,
            password: password.value,
            email: email.value,
            dni_number: dni_number.value,
            especialy: especialy.value,
        }
        axios.put('/users/'+id, data)
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
                    <form onSubmit={this.handleUpdateItem} encType="multipart/form-data"> 
                        <div className="bg-component">
                            <div className="row">
                                <div className="col-lg-4"><label>NOMBRES</label></div>
                                <div className="col-lg-8"><input type="text" name="firstname" defaultValue={this.state.firstname} /></div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-4"><label>APELLIDOS</label></div>
                                <div className="col-lg-8"><input type="text" name="lastname" defaultValue={this.state.lastname} /></div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-4"><label>RUT/PASAPORTE</label></div>
                                <div className="col-lg-8"><input type="text" name="dni_number" defaultValue={this.state.dni_number} /></div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-4"><label>ESPECIALIDAD</label></div>
                                <div className="col-lg-8"><input type="text" name="especialy" defaultValue={this.state.especialy} /></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"><label>EMAIL</label></div>
                                <div className="col-lg-8"><input type="email" defaultValue={this.state.email} name="email" /></div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-4"><label>PASSWORD</label></div>
                                <div className="col-lg-8"><input type="password" defaultValue={this.state.password} name="password" /></div>
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

export default UserEdit