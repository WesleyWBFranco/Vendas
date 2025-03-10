import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src="/imgs/logo2.png" alt="" />
            <div>
                <h2>Important Links</h2>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'/'}>Homepage</Link>
                    <Link className={styles.link} to={'/plates'}>Plates</Link>
                    <Link className={styles.link} to={'/profile'}>Profile</Link>
                </div>
            </div>
            <div>
                Developed by Wesley Franco.
                <a className={styles.link} href="https://www.linkedin.com/in/wesleywbfranco" target='_blank'> See my profile!</a>
            </div>
        </footer>
    )
}