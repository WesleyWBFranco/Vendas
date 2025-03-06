import styles from './navbar.module.css'
import { LuShoppingCart, LuUser, LuMenu, LuSearch } from "react-icons/lu";
import { Drawer } from '@mui/material'
import { useState } from 'react';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={styles.navbarContainer}> 
            <div className={styles.navbarItems}>
                <div className={styles.navbarLinksContainer}>
                    <LuMenu className={styles.navbarLink}/>
                    <img className={styles.logo}src="/logo.png" alt="" />
                </div>    
                <div className={styles.navbarLinksContainer}>
                    <a href="" className={styles.navbarLink}>Home</a>
                    <a href="" className={styles.navbarLink}>Products</a>
                    <LuSearch className={styles.navbarLink}/>
                    <LuShoppingCart className={styles.navbarLink}/>
                    <LuUser className={styles.navbarLink}/>
                </div>
            </div>

            <div className={styles.mobileNavbarItems}>
                <div className={styles.navbarLinksContainer}>
                    <LuMenu className={styles.navbarLink} onClick={handleOpenMenu}/>
                    <img className={styles.logo}src="/logo.png" alt="" />
                </div> 
                <div className={styles.mobileNavbarLinksContainer}>
                    <LuSearch className={styles.navbarLink}/>
                    <LuShoppingCart className={styles.navbarLink}/>
                </div>
            </div> 
            
            <Drawer
                anchor={'left'}
                open={openMenu}
                onClose={handleOpenMenu}
            >
                <div className={styles.drawer}>
                    <a href="" className={styles.navbarLink}>Home</a>
                    <a href="" className={styles.navbarLink}>Products</a>
                    <a href="" className={styles.navbarLink}>Profile</a>
                </div>
            </Drawer>

        </nav>
    )
}