import React, { useEffect } from 'react';
const Motivo = (props) => {

    const [selectedOption, setSelectedOption] = React.useState('');

    useEffect(() => {
        setSelectedOption(props.motive);
    }, [props.motive]);
    
    const radioChange = (e) => {
        setSelectedOption( e.target.value );
    }
    
    return (
        <div className="container-fluid">
            <div className="row">
                
                <p className="subitem">MOTIVE CONSULTA MUESTRA PCR</p>
                <div className="col-md-12 bg-component">
                    <label>
                        <input type="radio" className="option-input radio" name="motive" value="CONTRACT" checked={ selectedOption == "CONTRACT" } onChange={radioChange} />
                        CONTRACTO
                    </label>
                    <label>
                        <input type="radio" className="option-input radio" name="motive" value="JOB"  checked={ selectedOption == "JOB" } onChange={radioChange} />
                        TRABAJO
                    </label>
                    <label>
                        <input type="radio" className="option-input radio" name="motive" value="TRAVEL"  checked={ selectedOption == "TRAVEL" } onChange={radioChange} />
                        VIAJE
                    </label>
                    <label>
                        <input type="radio" className="option-input radio" name="motive" value="SHOWS_SYMPTOMS" checked={ selectedOption == "SHOWS_SYMPTOMS" } onChange={radioChange} />
                        PRESENTA SINTOMAS
                    </label>
                </div>
            </div>
        </div>
    );
}
export default Motivo;