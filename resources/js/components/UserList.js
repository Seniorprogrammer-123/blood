import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

        this.buttonStyle = {
            display: 'inline-block',
            marginBottom : '0px',
            marginLeft : '5px',
            marginRight : '5px',
        };

        this.registerStyle = {
            width: '100%',
            borderRadius: '20px',
            backgroundColor: '#A2E355',
            lineHeight: '35px',
            cursor: 'pointer',
            color: 'white',
            border: 'none',
        };

        this.handleDelete=this.handleDelete.bind(this);
        this.handleCreate=this.handleCreate.bind(this);
 
    }
 
    componentDidMount() {
       this.getData();
    }
 
    getData(){
 
         axios.get('/users/list/User').then(response => {
            this.setState({
                items: response.data
            });
        })
 
    }
    
    handleCreate() {
        this.props.history.push('/users/create');
    }
 
    handleDelete(e) {
        e.preventDefault(); 
        const id=e.target.id.value;
        axios.delete('/users/'+id);
        this.getData();
    }
 
    render() {
        const { items } = this.state
        const { regExpr } = /[^a-zA-Z0-9]/g;
        return (
            <div className='container'>
                <br />
                <div className='row justify-content-center'>
                    <div className='col-md-12'>               
                            
                        <br /><br />
                        <center><h1>USUARIAS</h1></center>
                        {this.state.items.length!==0 ? 
                        
                        <table className="table table-hovered table-striped" style={this.tableStyle}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>PUT / PASAPORTE</th>
                                    <th>NOMBRE</th>
                                    <th>ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.items.map((item,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{item.dni_number.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()}</td>
                                    <td>{item.name.toUpperCase()}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/users/${item.id}/edit`} key={item.id}>EDIT</Link>
                                        <form onSubmit={this.handleDelete} style={this.buttonStyle} >
                                            <input type="hidden" name="id" value={item.id}  />
                                            <button type="submit" className="btn btn-danger">DELETE</button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>            
            
                        :   <table className="table table-hovered table-striped" style={this.tableStyle}>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>PUT / PASAPORTE</th>
                                        <th>NOMBRE</th>
                                        <th>ACCIONES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="4"><center>No result!</center></td>
                                    </tr>
                                </tbody>
                            </table> }
                        <div className="row">
                            <div className="col-lg-5"></div>
                            <div className="col-lg-2">
                                <Link className='btn btn-primary' to='/users/create' style={this.registerStyle}>AGREGAR</Link>
                            </div>
                            <div className="col-lg-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default UserList