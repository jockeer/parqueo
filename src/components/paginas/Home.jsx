import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar' 

import Logo from '../../assets/parking-area.png'
import Entrada from '../parkeo/Entrada'

const Home = () => {
    return ( 
        <>
        <div className="container-app">
            <Sidebar />
            <div className="container-main">
                <Header titulo="Parkeo"/>
                <div className="container">
                    <h2 className="mt-4"><span><img width="50px" src={Logo} alt=""/></span> - Administracion de Parkeos</h2>
                    <hr/>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Entrada</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Salida</a>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Entrada/> </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.ssdsdwdawew..</div>

                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home;