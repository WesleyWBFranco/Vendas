import styles from './plateCard.module.css'

export default function PlateCard({ plateData }) {
    return (
        <>
            <div className={styles.cardContainer}>
                <img src={plateData.imgUrl} alt="" />
                <div className={styles.cardContent}>
                    <h3>{plateData.name}</h3>
                    <p>{plateData.description}</p>
                    <h3>R$ {plateData.price}</h3>
                </div> 
            </div>
        </>
    )
}