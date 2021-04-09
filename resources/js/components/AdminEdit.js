import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdminEdit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: '',
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



    componentDidMount() {

        const id = this.props.match.params.id;
        axios.get(`/users/${id}/edit`)
            .then(response => {
                this.setState({
                    email: response.data.email,
                    password: response.data.password,
                    name: response.data.name,
                });
            })
            .catch(function(error) {
                console.log(error);
            })

    }

    handleUpdateItem(event) {
        event.preventDefault();
        const id = this.props.match.params.id;
        const { name, email, password } = event.target
        const { history } = this.props
        const data = {
            name: name.value,
            password: password.value,
            email: email.value,
        }
        if (name.value == '') {
            name.focus();
            return;
        }
        if (email.value == '') {
            email.focus();
            return;
        }
        if (password.value == '') {
            password.focus();
            return;
        }
        axios.put('/admins/' + id, data)
            .then(response => {
                // redirect to the homepage
                history.push('/admins')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return ( <
                span className = 'invalid-feedback' >
                <
                strong > { this.state.errors[field][0] } < /strong> < /
                span >
            )
        }
    }

    render() {
        return ( <
            div className = 'row container justify-content-center' >
            <
            div className = "col-md-8" >
            <
            center > < h2 > ADMIN: NOMBRE < /h2></center >
            <
            form onSubmit = { this.handleUpdateItem }
            encType = "multipart/form-data" >
            <
            div className = "bg-component" >
            <
            div className = "row" >
            <
            div className = "col-lg-4" > < label > NOMBRES < /label></div >
            <
            div className = "col-lg-8" > < input type = "text"
            name = "name"
            defaultValue = { this.state.name }
            /></div >
            <
            /div>  <
            div className = "row" >
            <
            div className = "col-lg-4" > < label > EMAIL < /label></div >
            <
            div className = "col-lg-8" > < input type = "email"
            defaultValue = { this.state.email }
            name = "email" / > < /div> < /
            div > <
            div className = "row" >
            <
            div className = "col-lg-4" > < label > PASSWORD < /label></div >
            <
            div className = "col-lg-8" > < input type = "password"
            defaultValue = { this.state.password }
            name = "password" / > < /div> < /
            div > <
            /div>   <
            div className = "row justify-content-center" >
            <
            div className = 'col-md-8' >
            <
            center > < button className = 'btn btn-primary'
            style = { this.buttonStyle } > GUARDAR < /button></center >
            <
            /div> <
            div className = 'col-md-8' >
            <
            center > < Link className = 'btn btn-primary'
            to = '/admins'
            style = { this.cancelStyle } > VOLVER < /Link></center >
            <
            /div> < /
            div > <
            /form> < /
            div > <
            /div>
        )
    }
}

export default AdminEdit
