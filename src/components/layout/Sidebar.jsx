import React from 'react'

import {NavLink} from 'react-router-dom'

import {BiLogOut} from 'react-icons/bi'

const Sidebar = () => {
    return ( 
        <aside>
            <h2>Administracion</h2>
            <h4>Parqueo Cañoto</h4>
            <nav>
                <h2 className="mt-5">Menu</h2>
                <ul>
                    <NavLink exact to="/" >
                        <li>Puestos</li>
                    </NavLink>
                    <NavLink exact to="/" >
                        <li>Puestos</li>
                    </NavLink>
                    <NavLink exact to="/" >
                        <li>Puestos</li>
                    </NavLink>
                    <NavLink exact to="/" >
                        <li><BiLogOut/> Log Out</li>
                    </NavLink>
                </ul>
            </nav>
        </aside>
     );
}
 
export default Sidebar;