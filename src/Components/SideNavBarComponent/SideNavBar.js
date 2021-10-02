import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './SideNavBar.scss'
import { IconContext } from 'react-icons';

const SideNavBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaShoppingCart className="cart" onClick={showSidebar} /><span className="badge badge-light">9</span>

                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        ghbnjkm
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SideNavBar
