import { Dialog } from "@mui/material";
import { useState } from "react";
import styles from './platePopup.module.css';

export default function PlatePopup({ plateData, onClose, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <Dialog open={true} onClose={onClose}>
            <div className={styles.popupContainer}>
                <img src={plateData.imgUrl} alt="" />
                <div className={styles.popupContent}>
                    <h2>{plateData.name}</h2>
                    <p className={styles.ingredients}>[{String(plateData.ingredients)}]</p>
                    <p>{plateData.description}</p>
                    <h2>R$ {plateData.price}</h2>

                    <div className={styles.quantityContainer}>
                        <button onClick={handleDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                    </div>

                    <button onClick={() => onAddToCart({ ...plateData, quantity })}>
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </Dialog>
    );
}
