import styles from './footer.module.css'
import { FaWhatsapp, FaInstagram} from "react-icons/fa"
import { TbBrandLinkedin } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src="/imgs/logo2.png" alt="" />
            <h1>Fique por dentro!</h1>
            <p>
                Entre em nossas redes sociais e confira todas as novidades:
            </p>
            <div className={styles.socialButtonsContainer}>
                <a className={styles.socialButton} href="https://www.linkedin.com/in/wesleywbfranco" target='_blank'><FaInstagram/> Instagram</a>
                <a className={styles.socialButton} href="https://www.linkedin.com/in/wesleywbfranco" target='_blank'><TbBrandLinkedin /> Linkedin</a>
                <a className={styles.socialButton} href="https://www.linkedin.com/in/wesleywbfranco" target='_blank'><FaWhatsapp/> WhatsApp</a>
            </div>
            <div>
                Desenvolvido por Wesley Franco. 
               
            </div>
        </footer>
    )
}