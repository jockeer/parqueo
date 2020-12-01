import React from 'react'

import {NavLink} from 'react-router-dom'

import {BiLogOut, BiCar, BiStar, BiBookBookmark} from 'react-icons/bi'

const Sidebar = () => {
    return ( 
        <aside>
            <h2>Administracion</h2>
            <h4>Parqueo Cañoto</h4>
            <nav>
                <h2 className="mt-5">Menu</h2>
                <ul>
                    <NavLink exact to="/home"  activeStyle={{color: "red"}}>
                        <BiCar/> Parkeo
                    </NavLink>
                    <NavLink exact to="/abonados" activeStyle={{color: "red"}}>
                        <BiStar/>Abonados
                    </NavLink>
                    <NavLink exact to="/reportes" activeStyle={{color: "red"}}>
                        <BiBookBookmark/> Reportes
                    </NavLink>
                    <NavLink exact to="/">
                        <BiLogOut/> Log Out
                    </NavLink>
                </ul>
            </nav>
        </aside>
     );
}
 
export default Sidebar;