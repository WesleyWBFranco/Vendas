import styles from './navbar.module.css'
import { LuShoppingCart, LuUser, LuMenu, LuSearch } from "react-icons/lu";
import { Drawer } from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={styles.navbarContainer}> 
            <div className={styles.navbarItems}>
                <div className={styles.navbarLinksContainer}>
                       
                    <Link to={'/'}>
                        <img className={styles.logo} src="/imgs/logo2.png" alt="" />
                    </Link>
                </div>    
                <div className={styles.navbarLinksContainer}>
                    <Link to={'/'} className={styles.navbarLink}>Início</Link>
                    <Link to={'/plates'} className={styles.navbarLink}>Menu</Link>
                    <Link to={'/profile'}>
                        <LuUser className={styles.navbarLink}/>
                    </Link>                                            
                    <Link to={'/cart'}>
                        <LuShoppingCart className={styles.navbarLink}/>
                    </Link>
                </div>
            </div>

            <div className={styles.mobileNavbarItems}>
                <div className={styles.navbarLinksContainer}>
                    <LuMenu className={styles.navbarLink} onClick={handleOpenMenu}/>
                    <Link to={'/'}>
                        <img className={styles.logo}src="/imgs/logo2.png" alt="" />
                    </Link>
                </div> 
                <div className={styles.mobileNavbarLinksContainer}>
                    <Link to={'/cart'}>
                        <LuShoppingCart className={styles.navbarLink}/>
                    </Link>
                </div>
            </div> 
            
            <Drawer
                anchor={'left'}
                open={openMenu}
                onClose={handleOpenMenu}
            >
                <div className={styles.drawer}>
                    <Link to={'/'} className={styles.navbarLink} onClick={handleOpenMenu}>Início</Link>
                    <Link to={'/plates'} className={styles.navbarLink} onClick={handleOpenMenu}>Menu</Link>
                    <Link to={'/profile'} className={styles.navbarLink} onClick={handleOpenMenu}>Conta</Link>
                </div>
            </Drawer>

        </nav>
    )
}