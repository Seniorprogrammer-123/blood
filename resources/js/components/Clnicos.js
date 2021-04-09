import React, { useMemo, useEffect } from 'react';
import countryList from 'react-select-country-list'

const Clnicos = (props) => {
    const options = useMemo(() => countryList().getData(), [])

    let symptomYearOptions = [];
    let symptomDateOptions = [];
    for (var i = 0; i < 31; i++) {
        symptomDateOptions.push({value: i + 1, label: i + 1});
    }


    const [checkstate, setCheckState] = React.useState({
        
        worker: 0,
        symptom_day: 0,
        symptom_month: 0,
        symptom_year: 0,
        symptom_city: '',
        symptom_country: '',
        pregnant: 0,
        pregweek: '',

    });

    useEffect(() => {
        setCheckState(props.values);
    }, [props.values])

    const radioHandler = (e) => {
        let checkval = 1;
        if (e.target.name == "worker" && checkstate.worker == 1){
            checkstate.worker = 0;
            checkval = 0;
        }
        else if (e.target.name == "worker" && checkstate.worker == 0){
            checkstate.worker = 1;
            checkval = 1;
        }
        else if (e.target.name == "pregnant" && checkstate.pregnant == 1){
            checkstate.pregnant = 0;
            checkval = 0;
        }
        else if (e.target.name == "pregnant" && checkstate.pregnant == 0){
            checkstate.pregnant = 1;
            checkval = 1;
        }else{

        }

        setCheckState({ ...checkstate, [e.target.name]: checkval })
    }

    const mtStyle = {
        marginTop: '11px',
    };

    let cdate = new Date();
    let cyear = cdate.getFullYear();
    for (var i = 0; i < 10; i++) {
        symptomYearOptions.push({value: i + cyear - 5, label: i + cyear - 5});
    }

    const symptomMonthOptions = [
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

    const cbxHandler = (e) => {
        setCheckState({ ...checkstate, [e.target.name]: e.target.value });
    }


    return (
        <div className="container-fluid">
            <p className="subitem">ANTECEDENTES CLINICOS</p>
            <div className="row bg-component">
                <div className="col-lg-12">
                    <label>
                        FECHA INICIO SINTOMAS
                    </label>
                </div>
                <div className="col-lg-1">
                    <label className="splite-item">                        
                        DIA
                    </label>
                </div>
                <div className="col-lg-3">
                    <select name="symptom_day" value={checkstate.symptom_day} onChange={cbxHandler}>
                        {
                            symptomDateOptions.map((item,i)=>(
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
                    <select name="symptom_month" value={checkstate.symptom_month} onChange={cbxHandler}>
                        {
                            symptomMonthOptions.map((item,i)=>(
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
                    <select name="symptom_year" value={checkstate.symptom_year} onChange={cbxHandler}>
                        {
                            symptomYearOptions.map((item,i)=>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-4">
                    <label>  
                        <input type="radio" className="option-input radio" name="worker" checked={ checkstate.worker } onChange={radioHandler} />                      
                        TRABAJADO
                    </label>
                </div>
                <div className="col-lg-3">
                    <label>     
                        <input type="radio" className="option-input radio" name="pregnant" checked={ checkstate.pregnant } onChange={radioHandler} />                   
                        EMBARAZO                        
                    </label>
                </div>
                <div className="col-lg-2" style={mtStyle}>
                    <label className="splite-item">                        
                        SEMGEST
                    </label>
                </div>
                <div className="col-lg-3 paciente" style={mtStyle}>
                    <input type="number" name="pregweek" min="0" max="9" defaultValue={ checkstate.pregweek } />
                </div>
                <div className="col-lg-12">
                    <label>                        
                        <input type="checkbox" className="option-input radio" name="example" checked ={true} readOnly />
                        VIAJO AL EXTRANJERO 14 DIAS ANTES SINTOMAS
                    </label>
                </div>
                <div className="col-lg-2">
                    <label className="splite-item">                        
                        CIUDAD
                    </label>
                </div>
                <div className="col-lg-4">
                    <input type="text" name="symptom_city" defaultValue={ checkstate.symptom_city } />
                </div>
                <div className="col-lg-2">
                    <label className="splite-item">                        
                        PAIS
                    </label>
                </div>
                <div className="col-lg-4">
                    <select name="symptom_country" value={checkstate.symptom_country} onChange={cbxHandler}>
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

export default Clnicos;
