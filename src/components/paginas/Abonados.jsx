import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar' 

const Abonados = () => {
    return ( 
        <>
        <div className="container-app">
            <Sidebar />
            <div className="container-main">
                <Header titulo="Abonados"/>
            </div>
        </div>
        </>
     );
}
 
export default Abonados;