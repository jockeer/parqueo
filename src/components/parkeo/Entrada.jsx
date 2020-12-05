import React,{useState} from 'react'
import Error from '../layout/Error'
import RegVehiculo from '../vehiculos/RegVehiculo'
import RegEntrada from '../vehiculos/RegEntrada'

import {BiSearchAlt} from 'react-icons/bi'

const Entrada = () => {

    const [ placa, setPlaca ] = useState('')

    const [ error, setError ] = useState(false)
    const [ plan, setPlan ]= useState(false)
    const [ vregistrado, setVregistrado ] = useState(false)

    const [ encontrado, setEncontrado ] = useState(false)

    const [ vehiculo, setVehiculo ] = useState({})

    const [ lugares, setLugares ] = useState([])

    const traerLugares = async () => {
        const API = await fetch('http://localhost:4000/api/traerLugares');
            const respuesta = await API.json();
            setLugares(respuesta)
    }
 
    const onSubmitPlaca = async e => {
        e.preventDefault();
        traerLugares()
        if (placa.trim()==='') {
            setError(true);
            setEncontrado(false)
            setVregistrado(false);
            return;
        }
        setError(false);
        try {
            const url = await fetch(`http://localhost:4000/api/verificarVehiculo/${placa.toUpperCase()}`);
            const datos = await url.json();
            if (datos.length === 0) {
                setVregistrado(true)    
                setEncontrado(false);
            }else{
                setVehiculo(datos[0])
                setVregistrado(false)
                setEncontrado(true);
            }
            var t = new Date();
            let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
            const url2 = await fetch(`http://localhost:4000/api/verificarPlan/${placa.toUpperCase()}/${fecha}`);
            const datos2 = await url2.json();
            if (datos2.length === 0) {
                setPlan(false);
                return
            }
            setVehiculo(datos2[0])
            setPlan(true)
        } catch (error) {
            console.log(error);
        }
    }

    const onChange = e => {
        setEncontrado(false)
        setPlaca(e.target.value)
    }

    return ( 
        <>
        <br/>
        <div className="container-entrada"> 
            <h2><i>Consultar vehiculo</i></h2>
            <h2><i>Informacion</i></h2>
        </div>
        <br/>
        <div className="container-entrada">
            <form onSubmit={onSubmitPlaca} action="">
                <div className="form-row">
                    <div className="form-group col-9">
                        <label htmlFor="placa"><b>Placa</b></label>
                        <input type="text" maxLength="10" name="placa" id="placa" onChange={onChange} placeholder="Introduzca la placa..." className="form-control"/>
                    </div>
                    <div className="form-group col-3">
                        <label style={{display:"block"}} htmlFor="">-</label>
                        <button type="submit" className="btn btn-info"><BiSearchAlt/> Buscar</button>
                    </div>
                    <div className="form-group col-9">
                        {error
                            ?<Error mensaje="Rellene la placa" clase="alert-danger"/>
                            :null
                        }
                        {vregistrado
                            ?<Error mensaje="No existe esa placa registrada" clase="alert-danger"/>
                            :null
                        }
                    </div>
                </div>
            </form>
            <div className="info">
                {vregistrado
                    ? <RegVehiculo setVregistrado={setVregistrado} placa={placa} />
                    : null
                }
                {encontrado
                    ? <RegEntrada placa={placa} setEncontrado={setEncontrado} lugares={lugares} plan={plan} vehiculo={vehiculo} />
                    :null
                }
            </div>
        </div>
        </>
     );
}
 
export default Entrada;