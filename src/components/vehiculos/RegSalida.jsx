import React from 'react'

import imgPlaca from '../../assets/placa.png'

import axios from 'axios'
import swal from 'sweetalert'

const RegSalida = ({placa, minutos, idsalida}) => {

    const marcarSalida = async() =>{
        if (placa==='') {
            return
        }

        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        let hora = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
        try {
            await axios.get(`http://localhost:4000/api/actualizarDetalle/${parseInt(idsalida)}/${fecha}/${hora}`)
            .then(response =>{
                if (response.status===200) {
                    swal({
                        title: "Salida Marcada",
                        icon: "success",
                        button: "ok",
                        timer:2000
                    });
                }
            })
            .catch(err=>{
                console.log(err)
            })
            
        } catch (error) {
            console.log(error)
        }
    }   

    return ( 
        <div className="card sombra">
            <div className="card-header">
                <h5 className="text-center"> Salida del Parqueo</h5>
            </div>
            <div className="card-body">
                <div className="container-reg-entrada">
                    <figure className="img-placa-lugar">
                        <img  src={imgPlaca} alt=""/>
                        <p className="num-placa">{placa}</p>
                    </figure>
                </div>
                <hr/>
                <div className="datos">
                    <h4><b> Datos</b> </h4> 
                    <p><b>{minutos} minutos</b></p>
                </div>
                <button type="button" onClick={marcarSalida} className="btn btn-info btn-block mt-3"> Marcar Salida</button>
            </div>
        </div>
     );
}
 
export default RegSalida;