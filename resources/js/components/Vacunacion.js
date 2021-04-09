import React, { useEffect} from 'react';

const Vacunacion = (props) => {

    const [checkstate, setCheckState] = React.useState({        
        first_vaccine_day: 0,
        first_vaccine_month: 0,
        first_vaccine_year: 0,
        second_vaccine_day: 0,
        second_vaccine_month: 0,
        second_vaccine_year: 0,
    });

    useEffect(() => {
        setCheckState(props.values);
    }, [props.values])

    const dateHandler = (e) => {
        setCheckState({ ...checkstate, [e.target.name]: e.target.value })
    }
    
    let firstYearOptions = [];
    let firstDateOptions = [];
    let secondYearOptions = [];
    let secondDateOptions = [];
    for (var i = 0; i < 31; i++) {
        firstDateOptions.push({value: i + 1, label: i + 1});
        secondDateOptions.push({value: i + 1, label: i + 1});
    }
    
    let yearItems = [];
    let cdate = new Date();
    let cyear = cdate.getFullYear();
    for (var i = 0; i < 10; i++) {
        yearItems.push(<li key={i}>{i + cyear - 5}</li>);
        firstYearOptions.push({value: i + cyear - 5, label: i + cyear - 5});
        secondYearOptions.push({value: i + cyear - 5, label: i + cyear - 5});
    }

    const firstMonthOptions = [
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
    const secondMonthOptions = [
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
    

    return (
        <div className="container-fluid">
            <p className="subitem">ANTECEDENTES VACUNACION</p>
            <div className="row bg-component">
                <div className="col-lg-12">
                    <label>                        
                        <input type="checkbox" className="option-input radio" checked={true} readOnly />
                        VACUNA CONTRA LA INFLUENZA
                    </label>
                </div>
                <div className="col-lg-12">
                    <label>
                        FECHA VACUNACION
                    </label>
                </div>
                <div className="col-lg-1">
                    <label className="splite-item">                        
                        DIA
                    </label>
                </div>
                <div className="col-lg-3">
                    <select name="first_vaccine_day" value={checkstate.first_vaccine_day} onChange={dateHandler}>
                        {
                            firstDateOptions.map((item,i)=>(
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
                    <select name="first_vaccine_month" value={checkstate.first_vaccine_month} onChange={dateHandler}>
                        {
                            firstMonthOptions.map((item,i)=>(
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
                    <select name="first_vaccine_year" value={checkstate.first_vaccine_year} onChange={dateHandler}>
                        {
                            firstYearOptions.map((item,i)=>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-12">
                    <label>                        
                        <input type="checkbox" className="option-input radio" checked={true} readOnly />
                        VACUNA CONTRA COVID-19
                    </label>
                </div>
                <div className="col-lg-12">
                    <label>
                        FECHA VACUNACION
                    </label>
                </div>
                <div className="col-lg-1">
                    <label className="splite-item">                        
                        DIA
                    </label>
                </div>
                <div className="col-lg-3">
                    <select name="second_vaccine_day" value={checkstate.second_vaccine_day} onChange={dateHandler}>
                        {
                            secondDateOptions.map((item,i)=>(
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
                    <select name="second_vaccine_month" value={checkstate.second_vaccine_month} onChange={dateHandler}>
                        {
                            secondMonthOptions.map((item,i)=>(
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
                    <select name="second_vaccine_year" value={checkstate.second_vaccine_year} onChange={dateHandler}>
                        {
                            secondYearOptions.map((item,i)=>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Vacunacion;
