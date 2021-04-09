import axios from 'axios';
import React, { Component } from 'react';
import Professional from "./Professional";
import Muestra from "./Muestra";
import Motivo from "./Motivo";
import Sintomas from "./Sintomas";
import Clnicos from './Clnicos';
import Vacunacion from './Vacunacion';
import Dni from './Dni';
import Paciente from './Paciente';

class ReportView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            motive: '',
            file: '',
            errors: [],
            values: [],
            passportpath : '',
        }

        this.hideStyle = {
            display: 'none',
        };

        this.handleUpdateItem = this.handleUpdateItem.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        this.handleViewPhoto = this.handleViewPhoto.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.regpdf = this.regpdf.bind(this);

        

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
        /** upload */
        this.config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        /** */
    }
    
    async componentDidMount() {

        const id = this.props.match.params.id;
        await axios.get(`/report/${id}/edit`)
            .then(response => {

                this.setState({ values: response.data });

                this.setState({
                    motive: response.data.motive,
                });


            })
            .catch(function (error) {
                console.log(error);
            })

    }

    
    handleChange(file) {
        this.setState({
            passportpath: file[0],
        })

        let regPDF = '';

        const id = this.props.match.params.id;
        
        if(file[0] != ''){
            const fd = new FormData();

            fd.append('image', file[0]);
            // console.log(fd.get("image"));
            // Post Request to laravel API Route
            axios.post('/pdfupload', fd)
                .then(res => {
                    this.myFormRef.reset();
                    this.setState({
                        passportpath: res.data.message,
                    })
                    regPDF = res.data.message;
                    this.regpdf(regPDF);
                }
            );
        }
    }

    regpdf(pdfname){
        if(pdfname != ''){
            const id = this.props.match.params.id;
            // console.log(pdfname);
            axios.get(`/pdfpath/${id}/${pdfname}`)
                .then(res => {
                    this.props.history.push('/sendsms')
                }
            );
        }
    }

    handleUpdateItem(event) {
        event.preventDefault();
        const id = this.props.match.params.id;

        const {
            motive,
        } = event.target
        const { history } = this.props
        const data = {
            motive: motive.value,
        }
        axios.put('/report/' + id, data)
            .then(response => {
                // redirect to the homepage
                history.push('/labview')
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
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    handleUpload(e) {
        e.preventDefault();
        document.getElementById("passportpath").click();
        return;
    }

    handleViewPhoto(e) {
        e.preventDefault();
        return;
    }

    render() {
        return (
            <div className='container py-4'>
                <div className='justify-content-center'>
                    <form onSubmit={this.handleCreateNewItem}  ref={(el) => this.myFormRef = el} >
                        <Professional /><br />
                        <Muestra /><br />
                        <Motivo motive={this.state.motive} /><br />
                        <Paciente 
                            values={this.state.values}
                        /><br />
                        <Clnicos
                            values={this.state.values}
                        /><br />
                        <Sintomas
                            values={this.state.values}
                        /><br />
                        <Vacunacion 
                            values={this.state.values}
                        /><br />
                        <Dni /><br />
                        <div className="row">
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <center><button className='btn btn-primary' onClick={this.handleViewPhoto} style={this.cancelStyle}>Ver foto</button></center>
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                        <div className="row">
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <input type="file" name="passportpath" id="passportpath" accept=".pdf" onChange={(e) => this.handleChange(e.target.files)} ref="productimage" style={this.hideStyle} />
                                <center><button content="SUBIR PDF" onClick={this.handleUpload} style={this.buttonStyle} className='btn btn-danger' >SUBIR PDF</button></center>
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default ReportView;