import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
class ReportList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }

        this.buttonStyle = {
            display: 'inline-block',
            marginBottom : '0px',
            marginLeft : '5px',
            marginRight : '5px',
        };

        this.handleDelete=this.handleDelete.bind(this);
 
    }
 
    componentDidMount() {
       this.getData();
    }
 
    getData(){ 
        axios.get('/report').then(response => {
            this.setState({
                items: response.data
            });
        }) 
    }
 
    handleDelete(e) {
        e.preventDefault();     
        const id=e.target.id.value;    
        axios.delete('/report/'+id);  
        e.target.parentElement.parentElement.style.display = "none";      
        this.getData();
        
    }  

 
    render() {
        // const { items } = this.state;
        // const { regExpr } = /[^a-zA-Z0-9]/g;
        return (
            <div className='container'>
                <br />
                <div className='row justify-content-center'>
                    <div className='col-md-12'>               
                            
                        <br /><br />
                        <center><h1>FICHARS 28 MARZO 2021</h1></center>
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
                                    <td>{item.firstname.toUpperCase()}&nbsp;{item.lastname.toUpperCase()}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`${item.id}/edit`} key={item.id}>VER</Link>
                                        <form onSubmit={this.handleDelete} style={this.buttonStyle} >
                                            <input type="hidden" name="id" value={item.id}  />
                                            <button type="submit" className="btn btn-danger">Delete</button>
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
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ReportList