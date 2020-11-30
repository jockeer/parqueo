import React,{useState} from 'react'

import LogoParking from '../../assets/parking-area.png'
 
import {FaUserAlt, FaLock} from 'react-icons/fa'

import Error from '../layout/Error'

const Login = (props) => {

    const [datos, setdatos] = useState({
        usuario:'',
        password:''
    })
    const [error, seterror] = useState(false)

    const { usuario, password } = datos

    const onChange = e => {
        setdatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        if (usuario.trim() === '' || password.trim() === '') {
            seterror(true);
            return;
        }
        seterror(false);


        props.history.push('/home')
    }
    return ( 
        <>
        <div className="container-login">
            <div className="fondo-login">
                <h1>PARQUEO CAÑOTO</h1>
                <img src={LogoParking} alt=""/>
            </div>
            <div className="container-login-form">
                <h1>Login</h1>
                <form onSubmit={onSubmit} action="">
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="usuario"><FaUserAlt/> Usuario:</label>
                            <input type="text" name="usuario" id="usuario" value={usuario} onChange={onChange} className="form-control"/>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="password"><FaLock/> Password:</label>
                            <input type="password" name="password" id="password" value={password} onChange={onChange} className="form-control"/>
                        </div>
                    </div>
                    {error
                        ?<Error mensaje="usuario o contraseña incorrectos" clase="alert-danger" />
                        :null
                    }
                    <button type="submit" className="btn btn-info btn-block">Ingresar</button>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Login;