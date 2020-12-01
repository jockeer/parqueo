import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar' 

const Reportes = () => {
    return ( 
        <>
        <div className="container-app">
            <Sidebar />
            <div className="container-main">
                <Header titulo="Reportes"/>
            </div>
        </div>
        </>
     );
}
 
export default Reportes;