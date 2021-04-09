import React, { useEffect, useMemo } from 'react';
import countryList from 'react-select-country-list'

const Paciente = (props) => {
    
    const mtStyle = {
        marginTop: '11px',
    };

    const countryoptions = useMemo(() => countryList().getData(), []);

    const monthOptions = [
        { value: '1', label: 'Enero' },
        { value: '2', label: 'Febrero' },
        { value: '3', label: 'Marzo' },
        { value: '4', label: 'Abril' },
        { value: '5', label: 'Mayo' }, 
        { value: '6', label: 'Junio' }, 
        { value: '7', label: 'Julio' },
        { value: '8', label: 'Agosto' },
        { value: '9', label: 'Septiembre' }, 
        { value: '10', label: 'Octubre' },
        { value: '11', label: 'Noviembre' },
        { value: '12', label: 'Diciembre' },
    ];
    
    let yearOptions = [];
    let dateOptions = [];
    const options = [
        { value: 'ISAPRE', label: 'ISAPRE' },
        { value: 'FONSANA', label: 'FONSANA' },
      ];    
    let cdate = new Date();
    let cyear = cdate.getFullYear();
    for (var i = 0; i < 10; i++) {
        yearOptions.push({value: i + cyear - 5, label: i + cyear - 5});
    }
    for (var i = 0; i < 31; i++) {
        dateOptions.push({value: i + 1, label: i + 1});
    }

    const [checkstate, setCheckState] = React.useState({
        
        firstname: '',
        lastname: '',
        middlename: '',
        nation: '',
        sex: 'M',
        age: '',
        married: 'M',
        birth_day: '',
        birth_month: '',
        birth_year: '',
        dni_number: '',
        address: '',
        region: '',
        city: '',
        country: '',
        phone: '',
        health: '',

    });

    useEffect(() => {
        setCheckState(props.values);
    }, [props.values])
        
    const sexHandler = (e) => {
        let checkval = 'M';
        if (e.target.value == 'F')
            checkval = 'F';
        setCheckState({ ...checkstate, [e.target.name]: checkval })
    }
    
    const marriedHandler = (e) => {
        let checkval = 'M';
        if (e.target.value == 'A')
            checkval = 'A';
        setCheckState({ ...checkstate, [e.target.name]: checkval })
    }

    const cbxHandler = (e) => {
        setCheckState({ ...checkstate, [e.target.name]: e.target.value });
    }
    
    return (
        <div className="container-fluid">
            <p className="subitem">INFORMACION DEL PACIENTE</p>
            <div className="row bg-component paciente">
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        RUT / PASAPORTE
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="dni_number" defaultValue={checkstate.dni_number} />
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        NACIONALIDAD
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="nation" defaultValue={checkstate.nation} />
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        NOMBRES
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="firstname" defaultValue={checkstate.firstname} />
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        APPELIDO PATERNO
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="lastname" defaultValue={checkstate.lastname} />
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        APPELIDO MATERNO
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="middlename" defaultValue={checkstate.middlename} />
                </div>
                <div className="col-lg-1" style={mtStyle}>
                    <label>SEXO</label>
                </div>
                <div className="col-lg-2">
                    <label>  
                        <input type="radio" className="option-input radio" value="M" checked={ checkstate.sex == "M" } name="sex" onChange={sexHandler} />                      
                        M
                    </label>
                </div>
                <div className="col-lg-2">
                    <label>  
                        <input type="radio" className="option-input radio" value="F" checked={ checkstate.sex == "F" } name="sex" onChange={sexHandler} />                      
                        F
                    </label>
                </div>
                <div className="col-lg-1" style={mtStyle}>
                    <label>EDAD</label>
                </div>
                <div className="col-lg-2" style={mtStyle}>
                    <input type="number" name="age" defaultValue={checkstate.age} />
                </div>
                <div className="col-lg-2">
                    <label>  
                        <input type="radio" className="option-input radio" value="M" checked={ checkstate.married =="M" } name="married" onChange={marriedHandler} />                      
                        M
                    </label>
                </div>
                <div className="col-lg-2">
                    <label>  
                        <input type="radio" className="option-input radio" value="A" checked={ checkstate.married =="A" } name="married" onChange={marriedHandler} />                      
                        A
                    </label>
                </div>
                <div className="col-lg-12">
                    <label>
                        FECHA NACIMIENTO
                    </label>
                </div>
                <div className="col-lg-1">
                    <label className="splite-item">                        
                        DIA
                    </label>
                </div>
                <div className="col-lg-3">
                    <select name="birth_day" value={checkstate.birth_day} onChange={cbxHandler}>
                        {
                            dateOptions.map((item,i)=>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-1">
                    <label className="splite-item">                        
                        MES
                    </label>
                </div>
                <div className="col-lg-3">
                    <select name="birth_month" value={checkstate.birth_month} onChange={cbxHandler}>
                        {
                            monthOptions.map((item,i)=>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-1">
                    <label className="splite-item">                        
                        ANO
                    </label>
                </div>
                <div className="col-lg-3">
                    <select name="birth_year" value={checkstate.birth_year} onChange={cbxHandler}>
                        {
                            yearOptions.map((item,i)=>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        DIRECCION
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="address" defaultValue={checkstate.address} />
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        REGION
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="region" defaultValue={checkstate.region} />
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        CIUDAD
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="city" defaultValue={checkstate.city} />
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        COMUNA
                    </label>
                </div>
                <div className="col-lg-7">
                    <select name="country" value={checkstate.country} onChange={cbxHandler}>
                        {
                            countryoptions.map((item,i)=>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        TELEFONO
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" name="phone" defaultValue={checkstate.phone} />
                </div>
                <div className="col-lg-5">
                    <label className="splite-item">                        
                        PREVISION
                    </label>
                </div>
                <div className="col-lg-7">
                    <select name="health" value={checkstate.health} onChange={cbxHandler}>
                        {
                            options.map((item,i)=>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Paciente;