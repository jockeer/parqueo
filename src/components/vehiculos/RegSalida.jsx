import React from 'react'

import imgPlaca from '../../assets/placa.png'

const RegSalida = () => {
    return ( 
        <div className="card sombra">
            <div className="card-header">
                <h5 className="text-center">Asignar Lugar Disponible</h5>
            </div>
            <div className="card-body">
                <div className="container-reg-entrada">
                    <figure className="img-placa-lugar">
                        <img  src={imgPlaca} alt=""/>
                        <p className="num-placa">GTX-3080</p>
                    </figure>
                </div>
                <hr/>
                <div className="datos">
                    <h4><b> Datos</b> </h4> 
                </div>
                <button type="button" className="btn btn-info btn-block mt-3"> Asignar Lugar</button>
            </div>
        </div>
     );
}
 
export default RegSalida;