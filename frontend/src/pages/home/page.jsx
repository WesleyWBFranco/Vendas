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
                Somos um casal apaixonado por comida boa, e juntos preparamos cada receita com dedicação, 
                direto do nosso apartamento para vocês vizinhos do prédio. Do salgado ao doce, tudo é feito 
                com ingredientes frescos e um toque caseiro especial. Escolha sua opção, peça e aguarde... 
                logo estaremos aí batendo na sua porta!
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

        </div>
    )
}