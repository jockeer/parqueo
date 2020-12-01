import React,{useState} from 'react'
import Error from '../layout/Error'
import swal from 'sweetalert'
import axios from 'axios'
import LogoPlaca from '../../assets/placa.png'

import {BiColorFill,BiCar} from 'react-icons/bi'
import {FaCarSide} from 'react-icons/fa'

const RegVehiculo = ({setVregistrado,placa}) => {

    const [ vehiculo, setVehiculo ] = useState({
        color:'',
        modelo:'',
        id_marca:'0'
    })

    const [error, setError] = useState(false)

    const {color, modelo, id_marca} = vehiculo;

    const onChange = async e => {
        setVehiculo({
            ...vehiculo,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault();

        if (color===''||modelo===''||id_marca==='0') {
            setError(true);
            return;
        }
        setError(false);
        

        try {
            await axios.post('http://localhost:4000/api/registrarVehiculo',{
                placa: placa.toUpperCase(),
                color:color,
                modelo:modelo,
                id_marca:parseInt(id_marca)

            })
            .then(async response => {
                if (response.status===200) {
                    await swal({
                        title: "Vehiculo Registrado",
                        icon: "success",
                        button: "ok",
                        timer:2000
                    });
                    setVregistrado(false)
                    
                }
                    
            })
            .catch(error => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <>
            <form onSubmit={onSubmit} className="form-reg-vehiculo sombra" action="">
                <div className="form-row">
                    <div className="form-group col-7">
                        <img className="img-placa" src={LogoPlaca} alt=""/>
                        <h3 className="nro-placa" style={{textTransform:'uppercase'}}>{placa} </h3>
                    </div>
                    <div className="form-group col-5">
                        <h3 className="visitante">Visitante</h3>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="color"><BiColorFill/> Color</label>
                        <input type="text" name="color" id="color" value={color} onChange={onChange} className="form-control"/>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="modelo"><BiCar/> Modelo</label>
                        <input type="text" name="modelo" id="modelo" value={modelo} onChange={onChange} className="form-control"/>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="id_marca"><BiCar/> Marca</label>
                        <select name="id_marca" id="id_marca" onChange={onChange} className="form-control">
                            <option value="0">--Seleccione una marca--</option>
                            <option value="1">TOYOTA</option>
                            <option value="2">NISSAN</option>
                            <option value="3">VOLKSWAGEN</option>
                            <option value="4">SUZUKI</option>
                            <option value="5">CHEVROLET</option>
                        </select>
                    </div>
                    

                </div>
                {error 
                    ?<Error mensaje="Todos los campos deben estar llenados correctamente" clase="alert-warning"/>
                    :null
                }
                <button type="submit" className="btn btn-info btn-block"><FaCarSide/> Registrar Vehiculo</button>
            </form>
        </>
     );
}
 
export default RegVehiculo;