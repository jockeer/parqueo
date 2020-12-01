import React from 'react'
import {BiColorFill,BiCar} from 'react-icons/bi'
import {FaCarSide, FaPencilAlt} from 'react-icons/fa'
import imgPlaca from '../../assets/placa.png'

const RegEntrada = ({placa, vehiculo}) => {
    // debugger

    const asignarLugar = async ()=>{
        alert('s')
    } 

    return ( 
        <>
        <form  className="form-reg-vehiculo sombra" action="">
            
                <h5>Asignar Lugar Disponible</h5>
                <figure className="img-placa-lugar">
                    <img  src={imgPlaca} alt=""/>
                    <p className="num-placa">{placa}</p>

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