import styles from './page.module.css'
import Foods from '../../../public/imgs/homepage/foods'
import Vegetables from '../../../public/imgs/homepage/vegetables'
import { FaWhatsapp, FaInstagram } from "react-icons/fa"

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <section>
                <h1>Bem-vindo, pode entrar!</h1>
                <p>
                Aqui no Toc Toc, a gente bate na sua porta com lanches feitos com carinho! 
                Preparamos tudo no nosso apartamento e entregamos direto para vocês vizinhos 
                do prédio, levando sabores caseiros e fresquinhos. Do salgado ao 
                doce, é só pedir e aguardar, logo estaremos aí!
                </p>
            </section>

            <section className={styles.foodSection}>
                <div>
                    <i><Vegetables/></i>
                    <h4>Ingredientes Selecionados</h4>
                    <p>Usamos apenas ingredientes frescos e bem escolhidos para garantir qualidade.</p>
                </div>
                <div>
                    <i><Foods/></i>
                    <h4>Opções Prontas ou Sob Encomenda</h4>
                    <p>Oferecemos opções prontas para quem deseja praticidade, ou também preparamos pratos sob encomenda, feitos especialmente para você!</p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <h1>Fique por dentro!</h1>
                <p>
                    Entre em nossas redes sociais e confira todas as novidades.
                </p>
                <div className={styles.socialButtonsContainer}>
                    <button className={styles.socialButton}><FaInstagram/>Instagram</button>
                    <button className={styles.socialButton}><FaWhatsapp/>WhatsApp</button>
                </div>
            </section>
        </div>
    )
}