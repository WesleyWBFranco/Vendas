import plateServices from "../../services/plates";
import { useEffect, useState, useRef } from "react";
import Loading from "../loading/page";
import PlateCard from "../../components/plateCard/plateCard";
import styles from "./page.module.css";
import PlatePopup from "../../components/platePopup/platePopup";
import { useCartContext } from "../../contexts/useCartContext";

export default function Plates() {
  const { getAvailablePlates, plateLoading, platesList, refetchPlates } = plateServices();
  const [plateSelected, setPlateSelected] = useState(null);
  const { addToCart } = useCartContext();
  const carouselRefs = useRef({});

  useEffect(() => {
    if (refetchPlates) {
      getAvailablePlates();
    }
  }, [refetchPlates]);

  const handlePlateSelected = (plate) => {
    setPlateSelected(plate);
  };

  const handleClosePopup = () => {
    setPlateSelected(null);
  };

  const handleAddToCartFromPopup = (itemToAdd) => {
    addToCart(itemToAdd, itemToAdd.quantity); // Passando item e quantidade
    handleClosePopup();
  };

    const scrollCarousel = (category, direction) => {
        if (carouselRefs.current[category]) {
            const carousel = carouselRefs.current[category];
            const scrollAmount = carousel.offsetWidth; // Rola um item por vez
            
            carousel.scrollBy({ 
                left: direction === "left" ? -scrollAmount : scrollAmount, 
                behavior: "smooth" 
            });
    
            // Pequeno delay para garantir que a atualização acontece após a rolagem
            setTimeout(() => updateArrowVisibility(category), 200);
        }
    };
    
    const updateArrowVisibility = (category) => {
        const carousel = carouselRefs.current[category];
        if (carousel) {
            const leftArrow = document.getElementById(`left-arrow-${category}`);
            const rightArrow = document.getElementById(`right-arrow-${category}`);
    
            if (leftArrow && rightArrow) {
                const scrollPosition = carousel.scrollLeft;
                const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    
                // Precisamos de um pequeno ajuste nos limites para evitar falsos positivos
                const atStart = scrollPosition <= 1; 
                const atEnd = scrollPosition >= maxScrollLeft - 1;
    
                // Agora as setas sempre ficam visíveis, mas desativadas corretamente
                leftArrow.style.opacity = atStart ? "0.5" : "1";
                leftArrow.style.pointerEvents = atStart ? "none" : "auto";
    
                rightArrow.style.opacity = atEnd ? "0.5" : "1";
                rightArrow.style.pointerEvents = atEnd ? "none" : "auto";
            }
        }
    };
    
    useEffect(() => {
        Object.keys(groupedPlates).forEach(category => {
            updateArrowVisibility(category);
        });
    
        window.addEventListener("resize", () => {
            Object.keys(groupedPlates).forEach(category => {
                updateArrowVisibility(category);
            });
        });
    
        return () => {
            window.removeEventListener("resize", () => {
                Object.keys(groupedPlates).forEach(category => {
                    updateArrowVisibility(category);
                });
            });
        };
    }, [platesList]);

    if (plateLoading) {
        return <Loading />;
    }

    // Agrupar pratos por categoria
    const groupedPlates = platesList.reduce((acc, plate) => {
        const { category } = plate;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(plate);
        return acc;
    }, {});

    return (
        <div className={styles.container}>
            {Object.keys(groupedPlates).map((category) => {
                const items = groupedPlates[category].length;
                const itemsPerView = window.innerWidth <= 760 ? 1 : window.innerWidth <= 1100 ? 2 : 3;
                const hasOverflow = items > itemsPerView; // Agora considera 3 itens também
    
                return (
                    <div key={category} className={styles.section}>
                        <h2 className={styles.categoryTitle}>{category}</h2>
    
                        {/* Agora as setas sempre aparecem se houver rolagem disponível */}
                        {hasOverflow && (
                            <button
                                id={`left-arrow-${category}`}
                                className={styles.arrowLeft}
                                onClick={() => scrollCarousel(category, "left")}
                            >
                                &#8249;
                            </button>
                        )}
    
                        <div className={styles.carousel} ref={(el) => (carouselRefs.current[category] = el)}>
                            {groupedPlates[category].map((plate) => (
                                <div key={plate._id} className={styles.cardContainer} onClick={() => handlePlateSelected(plate)}>
                                    <PlateCard plateData={plate} />
                                </div>
                            ))}
                        </div>
    
                        {hasOverflow && (
                            <button
                                id={`right-arrow-${category}`}
                                className={styles.arrowRight}
                                onClick={() => scrollCarousel(category, "right")}
                            >
                                &#8250;
                            </button>
                        )}
                    </div>
                );
            })}
            {plateSelected && (
                <PlatePopup
                    plateData={plateSelected}
                    onClose={handleClosePopup}
                    onAddToCart={handleAddToCartFromPopup} // Use handleAddToCartFromPopup
                />
            )}
        </div>
    );
}
