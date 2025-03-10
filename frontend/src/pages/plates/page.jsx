import plateServices from "../../services/plates"
import { useEffect, useState } from "react"
import Loading from "../loading/page"
import PlateCard from "../../components/plateCard/plateCard"
import styles from './page.module.css' 
import PlatePopup from "../../components/platePopup/platePopup"
import { useCartContext } from "../../contexts/useCartContext"

export default function Plates() {

    const { getAvailablePlates, plateLoading, platesList, refetchPlates } = plateServices()
    const [plateSelected, setPlateSelected] = useState(null)
    const { addToCart } = useCartContext()

    useEffect(() => {
            if(refetchPlates) {
                getAvailablePlates()
            }
        }, [refetchPlates])
    
    const handlePlateSelected = (plate) => {
        setPlateSelected(plate)
    }

    const handleClosePopud = () => {
        setPlateSelected(null)
    }

    const handleAddToCart = (itemToAdd) => {
        addToCart(itemToAdd)
        handleClosePopud()
    }

    if(plateLoading) {
        return( <Loading/>)
    }

    console.log(platesList)
        
    return (
        <>
            <div>
                {platesList.map((plate) => (
                    <div key={plate._id} className={styles.cardContainer} onClick={() => { handlePlateSelected(plate) }}>
                       <PlateCard plateData={plate} key={plate._id} />
                    </div>
                ))}
            </div>
            
            {plateSelected && ( 
                <PlatePopup 
                plateData={plateSelected} 
                onClose={handleClosePopud} 
                onAddToCart={handleAddToCart}
                />
            )}
        </>
    )
}