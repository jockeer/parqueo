import React,{useState} from 'react'
import Error from '../layout/Error'
import RegVehiculo from '../vehiculos/RegVehiculo'

const Entrada = () => {

    const [ placa, setPlaca ] = useState('')

    const [ error, setError ] = useState(false)

    

    const [ vregistrado, setVregistrado ] = useState(false)

   
 
    const onSubmitPlaca = async e => {
        e.preventDefault();
        if (placa.trim()==='') {
            setError(true);
            setVregistrado(false);
            return;
        }
        setError(false);
        try {
            const url = await fetch(`http://localhost:4000/api/verificarVehiculo/${placa}`);
            const datos = await url.json();
            if (datos.length === 0) {
                setVregistrado(true)    
            }else{
                
            }
        } catch (error) {
            console.log(error);
        }
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
                        <input type="text" maxLength="10" name="placa" id="placa" onChange={e => setPlaca(e.target.value)} placeholder="Introduzca la placa..." className="form-control"/>
                    </div>
                    <div className="form-group col-3">
                        <label style={{display:"block"}} htmlFor="">-</label>
                        <button type="submit" className="btn btn-info">Buscar</button>
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
            </div>
        </div>
        </>
     );
}
 
export default Entrada;