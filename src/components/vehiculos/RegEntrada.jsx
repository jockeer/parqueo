import React,{useState} from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import imgPlaca from '../../assets/placa.png'

import axios from 'axios'


const RegEntrada = ({placa, vehiculo, plan}) => {

    const [ lugares, setLugares ] = useState([])
    if (Object.keys(vehiculo).length === 0) {
        return null;
    }
    const asignarLugar = async ()=>{
        try {
            const respuesta = await axios.get('http://localhost:4000/api/traerLugares');
            console.log(respuesta.data);
            await setLugares(respuesta.data);
            if (vehiculo.dias_faltantes===undefined) {
                
            }else if(vehiculo.plan==='abonado') {

            }
            else if(vehiculo.plan==='abonado-vip'){

            }
        } catch (error) {
            console.log(error);
        }
    } 

    return ( 
        <>
        <div className="card sombra">
            <div className="card-header">
                <h5 className="text-center">Asignar Lugar Disponible</h5>
            </div>
            <div className="card-body">
                <div className="container-reg-entrada">
                    <figure className="img-placa-lugar">
                        <img  src={imgPlaca} alt=""/>
                        <p className="num-placa">{placa.toUpperCase()}</p>

                    </figure>
                    {plan
                        ? vehiculo.dias_faltantes===undefined
                            ? null
                            : <p className="abonado reg-entrada sombra">{vehiculo.plan} <br/><span>{vehiculo.dias_faltantes.days} dias restantes</span></p>
                        : <p className="abonado reg-entrada sombra">Visitante</p>
                    }

                </div>
                <hr/>
                <div className="datos">
                    <h4><b> Datos</b> </h4>
                    {vehiculo.cliente===undefined
                        ?null
                        :<p>Cliente: {vehiculo.cliente}</p>
                    }
                    {vehiculo.estado===undefined
                        ?null
                        :<p>Estado del contrato: {vehiculo.estado}</p>
                    }
                    {vehiculo.dias_faltantes===undefined
                        ?null
                        :<p>Dias restantes: {vehiculo.dias_faltantes.days} dias</p>
                    }
                    <p>Modelo: {vehiculo.modelo}</p>
                    <p>Marca: {vehiculo.marca}</p>
                    <p>Color: {vehiculo.color}</p>

                </div>
                <button type="button" onClick={asignarLugar} className="btn btn-info btn-block mt-3"><FaPencilAlt/> Asignar Lugar</button>
            </div>
        </div>
        </>
     );
}
 
export default RegEntrada;