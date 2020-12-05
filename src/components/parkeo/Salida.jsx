import React,{useState} from 'react';
import Error from '../layout/Error'
import RegSalida from '../vehiculos/RegSalida';

import axios from 'axios'
const Salida = () => {

    const [ placa, setPlaca] = useState('');

    const [ error, setError] = useState(false)
    const [ salida, setSalida] = useState(false)
    const [ vregistrado, setVRegistrado] = useState(false)
    const [ idsalida,setidsalida] = useState('')

    const [ minutos, setMinutos] = useState('0')
 
    const onChange= e =>{
        setSalida(false)
        setPlaca(e.target.value);
        
    }
    async function calcularMinutos()
	{
        //Cogemos la hora inicial y final y obtenemos los minutos totales
        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        let hora = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
        const respuesta =await axios.get(`http://localhost:4000/api/verificarTiempo/${placa}/${fecha}`)
        setidsalida(parseInt(respuesta.data[0].id))
		const horaInicial=devolverMinutos(`${respuesta.data[0].hora_ingreso}`);
        const horaFinal=devolverMinutos(hora);
        debugger
 
		if(horaInicial<horaFinal)
		{
            setMinutos(horaFinal-horaInicial)
		}else{
			// document.getElementById("resultado").innerHTML="La hora inicial tiene que ser inferior a la hora final";
		}
	}
 
	//Funcion para obtener los minutos totales... 10:30=630 minutos
	function devolverMinutos(horaMinutos)
	{
		return (parseInt(horaMinutos.split(":")[0])*60)+parseInt(horaMinutos.split(":")[1]);
	}
    const onSubmitPlaca= async e =>{
        e.preventDefault();
        
        if (placa.trim()==='') {
            setVRegistrado(false);
            setSalida(false);
            setError(true);
            return;
        }
        setError(false);

        const respuesta = await axios.get(`http://localhost:4000/api/verificarVehiculo/${placa}`)
        if (respuesta.data.length===0) {
            setVRegistrado(false);
            return;
        }
        calcularMinutos();
        setVRegistrado(true);
        setSalida(true);
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
                        <button type="submit" className="btn btn-info"> Buscar</button>
                    </div>
                    <div className="form-group col-9">
                        {error
                            ?<Error mensaje="coloque una placa" clase="alert-danger"/>
                            :null
                        } 
                        {vregistrado
                            ?null
                            :<Error mensaje="placa no existe" clase="alert-danger"/>
                        }         
                    </div>
                </div>
            </form>
            <div className="info">
                {vregistrado
                    ?<RegSalida placa={placa} minutos={minutos} idsalida={idsalida}/>
                    :null
                }
            </div>
        </div>
        </>
     );
}
 
export default Salida;