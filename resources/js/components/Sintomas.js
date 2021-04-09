import React, { useEffect } from 'react';

const Sintomas = (props) => {

    const [checkstate, setCheckState] = React.useState({
        fever_above: 0,
        sore_throat: 0,
        myalgia: 0,
        pneumonia: 0,
        encephalitis: 0,
        couch: 0,
        lady_nasal: 0,
        respiratory_difficulty: 0,
        hypotention: 0,
        agusia: 0,
        anosmia: 0,
        headache: 0,
        tachypnea: 0,
        hypoxia: 0,
        ayanosis: 0,
        dehydration_food_refused: 0,
        hemodynamic_commitment: 0,
        consultation_respiratory: 0,
        base_disease: 0,
        disease: ''
    });

    const checkboxChange = (e) => {
        let checkval = 0;
        if (e.target.checked === true)
            checkval = 1;
        setCheckState({ ...checkstate, [e.target.name]: checkval })
    }

    useEffect(() => {
        setCheckState(props.values);
    }, [props.values])

    return (

        <div className="container-fluid">
            <div className="row paciente">
                <p className="subitem">SINTOMAS</p>
                <div className="col-md-12 bg-component">
                    <label>
                        <input type="checkbox" className="option-input radio" name="fever_above" checked={checkstate.fever_above} onChange={checkboxChange} />
                            FIEBRE SOBRE 38
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="sore_throat" checked={checkstate.sore_throat} onChange={checkboxChange} />
                            DOLOR DE GARGANTA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="myalgia" checked={checkstate.myalgia} onChange={checkboxChange} />
                            MIALGIA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="pneumonia" checked={checkstate.pneumonia} onChange={checkboxChange} />
                            NEUMONÍA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="encephalitis" checked={checkstate.encephalitis} onChange={checkboxChange} />
                            ENCEFALITIS
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="couch" checked={checkstate.couch} onChange={checkboxChange} />
                            TOS
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="lady_nasal" checked={checkstate.lady_nasal} onChange={checkboxChange} />
                            SEÑOREA / CONGESTIÓN NASAL
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="respiratory_difficulty" checked={checkstate.respiratory_difficulty} onChange={checkboxChange} />
                            DIFICULTAD RESPIRATORIA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="hypotention" checked={checkstate.hypotention} onChange={checkboxChange} />
                            HIPOTENSIÓN
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="agusia" checked={checkstate.agusia} onChange={checkboxChange} />
                            AGUSIA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="anosmia" checked={checkstate.anosmia} onChange={checkboxChange} />
                            ANOSMIA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="headache" checked={checkstate.headache} onChange={checkboxChange} />
                            CEFALEA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="tachypnea" checked={checkstate.tachypnea} onChange={checkboxChange} />
                            TAQUIPNEA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="hypoxia" checked={checkstate.hypoxia} onChange={checkboxChange} />
                            HIPOXIA
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="ayanosis" checked={checkstate.ayanosis} onChange={checkboxChange} />
                            CIANOSIS
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="dehydration_food_refused" checked={checkstate.dehydration_food_refused} onChange={checkboxChange} />
                            DESHIDRATACIÓN O RECHAZÓ ALIMENTARIO(L)
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="hemodynamic_commitment" checked={checkstate.hemodynamic_commitment} onChange={checkboxChange} />
                            COMPROMISO HEMODINÁMICO
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="consultation_respiratory" checked={checkstate.consultation_respiratory} onChange={checkboxChange} />
                            CONSULTA POR DET. DE CUADRO RESPIRATORIO
                        </label>
                    <label>
                        <input type="checkbox" className="option-input radio" name="base_disease" checked={checkstate.base_disease} onChange={checkboxChange} />
                            ENFERMEDAD DE BASE
                        </label>
                    <div className="row">
                        <div className="col-md-6">
                            <label>QUE ENFERMEDAD</label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="disease" defaultValue={checkstate.disease} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sintomas;