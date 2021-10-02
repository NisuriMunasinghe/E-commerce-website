import React from 'react'
import './SideNavBar'

const SideNavBar = () => {
    return (
        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>


            <span onclick="openNav()">&#9776; open</span>
        </div>

    )
}

export default SideNavBar
