import React from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import imgPlaca from '../../assets/placa.png'


const RegEntrada = ({placa, vehiculo, plan}) => {
    // debugger
    const asignarLugar = async ()=>{
        alert('s')
    } 

    return ( 
        <>
        <form  className="form-reg-vehiculo sombra" action="">
                {plan
                    ? <p className="abonado reg-entrada">Abonado</p>
                    : <p className="visitante  reg-entrada">Visitante</p>
                }
                <h5>Asignar Lugar Disponible</h5>
                <figure className="img-placa-lugar">
                    <img  src={imgPlaca} alt=""/>
                    <p className="num-placa">{placa.toUpperCase()}</p>

                </figure>
                <p>Modelo: {vehiculo.modelo}</p>
                <p>Marca: {vehiculo.marca}</p>
                <p>Color: {vehiculo.color}</p>
                
            
            <button type="button" onClick={asignarLugar} className="btn btn-info btn-block mt-3"><FaPencilAlt/> Asignar Lugar</button>
        </form>
        </>
     );
}
 
export default RegEntrada;