import styles from "./plateCard.module.css";

export default function PlateCard({ plateData }) {
    const { name, description, price, imgUrl } = plateData;
    const maxDescriptionLength = 100; // Limite de caracteres para a descrição

    const truncatedDescription =
        description.length > maxDescriptionLength ? description.substring(0, maxDescriptionLength) + "..." : description;

    return (
        <div className={styles.card}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.imageContainer}>
                <img src={imgUrl} alt={name} className={styles.image} />
            </div>
            <div className={styles.info}>
                <p className={styles.description}>{truncatedDescription}</p>
                <p className={styles.price}>R$ {price.toFixed(2)}</p>
            </div>
        </div>
    );
}
