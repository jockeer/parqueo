import React from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import imgPlaca from '../../assets/placa.png'

import axios from 'axios'

import swal from 'sweetalert'
const RegEntrada = ({placa, vehiculo, plan, lugares, setEncontrado}) => {
    // debugger
    if (Object.keys(vehiculo).length === 0) {
        return null;
    }
    const asignarLugar = async () => {
        try {
            var t = new Date();
            let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
            let hora = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
            
            if (vehiculo.dias_faltantes===undefined) {
                let disponibles = await lugares.filter(lugar => {
                    return (lugar.nro_piso >= 2 && lugar.ocupado === "F")
                })

                //asignar lugar

                await axios.post('http://localhost:4000/api/registrarLugar',{
                    placa_vehiculo:placa,
                    id_lugar:disponibles[0].id,
                    fecha_ingreso:fecha,
                    hora_ingreso:hora
                })
                .then(async response => {
                    if (response.status===200) {
                        await swal({
                            title: "Lugar Asignado",
                            icon: "success",
                            button: "ok",
                            timer:2000
                        });
                        setEncontrado(false)
                    }
                })
                .catch(err =>{
                    console.log(err)
                })
                // console.log(disponibles[0])
                
            }else if(vehiculo.plan==='abonado') {
                let disponibles = await lugares.filter(lugar => {
                    return (lugar.nro_piso >= 2 && lugar.ocupado === "F")
                })
                await axios.post('http://localhost:4000/api/registrarLugar',{
                    placa_vehiculo:placa,
                    id_lugar:disponibles[0].id,
                    fecha_ingreso:fecha,
                    hora_ingreso:hora
                })
                .then(async response => {
                    if (response.status===200) {
                        await swal({
                            title: "Lugar Asignado",
                            icon: "success",
                            button: "ok",
                            timer:2000
                        });
                        setEncontrado(false)
                    }
                })
                .catch(err =>{
                    console.log(err)
                })
            }
            else if(vehiculo.plan==='abonado-vip'){
                let disponibles = await lugares.filter(lugar => {
                    return (lugar.nro_piso >= 1 && lugar.ocupado === "F")
                })
                await axios.post('http://localhost:4000/api/registrarLugar',{
                    placa_vehiculo:placa,
                    id_lugar:disponibles[0].id,
                    fecha_ingreso:fecha,
                    hora_ingreso:hora
                })
                .then(async response => {
                    if (response.status===200) {
                        await swal({
                            title: "Lugar Asignado",
                            icon: "success",
                            button: "ok",
                            timer:2000
                        });
                        setEncontrado(false)
                    }
                })
                .catch(err =>{
                    console.log(err)
                })
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
                            : <><p className="abonado reg-entrada sombra">{vehiculo.plan}<br/><span>{vehiculo.dias_faltantes.days} dias restantes</span><br/>{vehiculo.dias_faltantes.days < 2 ? <button className="btn btn-danger">pagar</button> :null} </p></>
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