import React from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import imgPlaca from '../../assets/placa.png'


const RegEntrada = ({placa, vehiculo, plan}) => {
    debugger
    // debugger
    if (Object.keys(vehiculo).length === 0) {
        return null;
    }
    const asignarLugar = async ()=>{
        alert('s')
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
                        ? <p className="abonado reg-entrada sombra">{vehiculo.plan} <br/><span>{vehiculo.dias_faltantes.days} dias restantes</span></p>
                        : <p className="visitante reg-entrada">Visitante</p>
                    }

                </div>
                <hr/>
                <div className="datos">
                    <p>Cliente: {vehiculo.cliente}</p>
                    <p>Estado del contrato: {vehiculo.estado}</p>
                    <p>Dias restantes: {vehiculo.dias_faltantes.days} dias</p>
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