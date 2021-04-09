import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Motivo from "./Motivo";
import Sintomas from "./Sintomas";
import Clnicos from './Clnicos';
import Vacunacion from './Vacunacion';
import Dni from './Dni';
import Paciente from './Paciente';
import CButton from './CButton';

class ReportCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            motive: '',
            dni_number: '',
            nation: '',
            firstname: '',
            lastname: '',
            middlename: '',
            sex: '',
            age: '',
            birth_day: '',
            birth_month: '',
            birth_year: '',
            married: '',
            address: '',
            region: '',
            city: '',
            country: '',
            phone: '',
            health: '',
            fever_above: '',
            sore_throat: '',
            myalgia: '',
            pneumonia: '',
            encephalitis: '',
            couch: '',
            lady_nasal: '',
            respiratory_difficulty: '',
            hypotention: '',
            agusia: '',
            anosmia: '',
            headache: '',
            tachypnea: '',
            hypoxia: '',
            ayanosis: '',
            dehydration_food_refused: '',
            hemodynamic_commitment: '',
            consultation_respiratory: '',
            base_disease: '',
            disease: '',
            first_vaccine_day: '',
            first_vaccine_month: '',
            first_vaccine_year: '',
            second_vaccine_day: '',
            second_vaccine_month: '',
            second_vaccine_year: '',
            symptom_day: '',
            symptom_month: '',
            symptom_year: '',
            symptom_city: '',
            symptom_country: '',
            worker: '',
            pregnant: '',
            pregweek: '',
            imagepath: '',
            errors: [],
            imagedata: ''
        }

        this.handleCreateNewItem = this.handleCreateNewItem.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.imageUpload = this.imageUpload.bind(this)
        /**
         * file upload start
        //  */
        // this.state = {
        //     imagedata: ''
        // };
        // this.addFormData = this.addFormData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        /**
         * file upload end
         */


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

        this.hideStyle = {
            display: 'none',
        };

    }

    handleChange(file) {
        this.setState({
            imagedata: file[0],
        })
    }

    // addFormData(evt) {
    //     evt.preventDefault();
    //     const fd = new FormData();

    //     fd.append('image', this.state.imagedata);
    //     console.log(fd.get("image"));
    //     //Post Request to laravel API Route
    //     axios.post('/upload', fd)
    //         .then(res => {
    //             this.myFormRef.reset();
    //             //Success Message in Sweetalert modal
    //             alert("OK");
    //         }
    //     );
    // }


    handleCreateNewItem(event) {
        event.preventDefault();

        if(this.state.imagedata != ''){
            const fd = new FormData();

            fd.append('image', this.state.imagedata);
            // console.log(fd.get("image"));
            // Post Request to laravel API Route
            axios.post('/upload', fd)
                .then(res => {
                    this.myFormRef.reset();
                    this.setState({
                        imagepath: res.data.message,
                    })
                }
            );
        }

        const {
            motive,
            dni_number,
            nation,
            firstname,
            lastname,
            middlename,
            sex,
            age,
            birth_year,
            birth_month,
            birth_day,
            married,
            address,
            region,
            city,
            country,
            phone,
            health,
            fever_above,
            sore_throat,
            myalgia,
            pneumonia,
            encephalitis,
            couch,
            lady_nasal,
            respiratory_difficulty,
            hypotention,
            agusia,
            anosmia,
            headache,
            tachypnea,
            hypoxia,
            ayanosis,
            dehydration_food_refused,
            hemodynamic_commitment,
            consultation_respiratory,
            base_disease,
            disease,
            first_vaccine_day,
            first_vaccine_month,
            first_vaccine_year,
            second_vaccine_day,
            second_vaccine_month,
            second_vaccine_year,
            symptom_day,
            symptom_month,
            symptom_year,
            symptom_city,
            symptom_country,
            worker,
            pregnant,
            pregweek,
        } = event.target

        const { history } = this.props

        const data = {
            motive: motive.value,
            dni_number: dni_number.value,
            nation: nation.value,
            firstname: firstname.value,
            lastname: lastname.value,
            middlename: middlename.value,
            sex: sex.value,
            age: age.value,
            birthday: birth_year.value + "-" + birth_month.value + "-" + birth_day.value,
            married: married.value,
            address: address.value,
            region: region.value,
            city: city.value,
            country: country.value,
            phone: phone.value,
            health: health.value,
            fever_above: (fever_above.checked) ? 1 : 0,
            sore_throat: (sore_throat.checked) ? 1 : 0,
            myalgia: (myalgia.checked) ? 1 : 0,
            pneumonia: (pneumonia.checked) ? 1 : 0,
            encephalitis: (encephalitis.checked) ? 1 : 0,
            couch: (couch.checked) ? 1 : 0,
            lady_nasal: (lady_nasal.checked) ? 1 : 0,
            respiratory_difficulty: (respiratory_difficulty.checked) ? 1 : 0,
            hypotention: (hypotention.checked) ? 1 : 0,
            agusia: (agusia.checked) ? 1 : 0,
            anosmia: (anosmia.checked) ? 1 : 0,
            headache: (headache.checked) ? 1 : 0,
            tachypnea: (tachypnea.checked) ? 1 : 0,
            hypoxia: (hypoxia.checked) ? 1 : 0,
            ayanosis: (ayanosis.checked) ? 1 : 0,
            dehydration_food_refused: (dehydration_food_refused.checked) ? 1 : 0,
            hemodynamic_commitment: (hemodynamic_commitment.checked) ? 1 : 0,
            consultation_respiratory: (consultation_respiratory.checked) ? 1 : 0,
            base_disease: (base_disease.checked) ? 1 : 0,
            disease: disease.value,
            vaccine_first: first_vaccine_year.value + "-" + first_vaccine_month.value + "-" + first_vaccine_day.value,
            vaccine_second: second_vaccine_year.value + "-" + second_vaccine_month.value + "-" + second_vaccine_day.value,
            symptom_date: symptom_year.value + "-" + symptom_month.value + "-" + symptom_day.value,
            worker: (worker.checked) ? 1 : 0,
            pregnant: (pregnant.checked) ? 1 : 0,
            pregweek: pregweek.value,
            symptom_city: symptom_city.value,
            symptom_country: symptom_country.value,
            imagepath: this.state.imagepath,
        }
        
        axios.post('/report', data)
            .then(response => {
                // redirect to the homepage
                history.push('/viewListByData')
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

    imageUpload(e) {
        e.preventDefault();
        document.getElementById("imagepath").click();
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



    render() {
        return (
            <>
                <form onSubmit={this.handleCreateNewItem}  ref={(el) => this.myFormRef = el} >
                    <div className='container py-4'>
                        <div className='row justify-content-center'>
                            <Motivo values={[]} /><br />
                            <Paciente values={[]} /><br />
                            <Clnicos values={[]} /><br />
                            <Sintomas values={[]} /><br />
                            <Vacunacion values={[]} /><br />
                            <Dni values={[]} /><br />
                        </div>
                        <div className='row justify-content-center'>
                            <button className='btn btn-primary' style={this.buttonStyle}>GUARDAR</button>
                        </div>
                        <div className='row justify-content-center'>
                            <input type="file" name="imagepath" id="imagepath" accept="image/jpg,image/bmp,image/jpeg,image/png" onChange={(e) => this.handleChange(e.target.files)} ref="productimage" style={this.hideStyle} />
                            <CButton content="TOMAR FOTO CARNET / PASAPORTE" variant="lightyellow" style={this.buttonStyle} className='btn btn-danger' onClick={this.imageUpload} />
                        </div>
                        <div className='row justify-content-center'>
                            <Link className='btn btn-primary' to='/viewListByData' style={this.cancelStyle}>Back to listing</Link>
                        </div>
                    </div>
                </form>
                {/* <form ref={(el) => this.myFormRef = el}>
                    <label htmlFor="image">Image Upload:</label>
                    <input onChange={(e) => this.handleChange(e.target.files)} type="file" id="image" ref="productimage" />
                    <button type="submit" onClick={this.addFormData}>Submit</button>
                </form> */}
            </>
        )
    }
}

export default ReportCreate