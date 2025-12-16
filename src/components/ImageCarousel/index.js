import React from "react";
import styles from "./styles.module.css";

export default function CarouselSlides({ slideImages }) {
    if (!slideImages || slideImages.length === 0) return null;
    const total = slideImages.length;

    return (
        <div className={styles.carousel}>
            {slideImages.map((image, index) => (
                <React.Fragment key={index}>
                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide={index + 1}>
                        <img
                            className={styles.carousel_img}
                            src={image}
                            alt={index + 1}
                        />
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}