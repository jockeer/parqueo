import React from 'react'
import Sidebar from '../layout/Sidebar' 

const Home = () => {
    return ( 
        <>
        <div className="container-app">
            <Sidebar />
            <div className="container-main"></div>
        </div>
        </>
     );
}
 
export default Home;