import styles from './styles.module.css'
import Image from "next/image";
import cn from 'classname'
import SortDropdown from "@/comp/SortDropdown";
import plants from './moc.json'
import logo from "../../../../public/logo.png";

import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'
import img7 from './7.png'
import img8 from './8.png'
import img9 from './9.png'

const Store = ({}) => {
    const plantImages = {
        1: img1,
        2: img2,
        3: img3,
        4: img4,
        5: img5,
        6: img6,
        7: img7,
        8: img8,
        9: img9
    };
    const sizeFilters = [
        { id: 1, label: '30-40 cm' },
        { id: 2, label: '50-60 cm' },
        { id: 3, label: '70-80 cm' },
        { id: 4, label: '90-100 cm' },
        { id: 5, label: '100+ cm' }
    ];

    const wateringFilters = [
        { id: 1, label: 'Once a week' },
        { id: 2, label: 'Twice a week' },
        { id: 3, label: 'Twice a month' }
    ];

    const locationFilters = [
        { id: 1, label: 'Suitable for dark places' },
        { id: 2, label: 'Suitable for light places' },
        { id: 3, label: 'Suitable for moderate places' }
    ];

    const typeFilters = [
        { id: 1, label: 'Vertical plants' },
        { id: 2, label: 'Flowering plants' },
        { id: 3, label: 'Hanging plants' }
    ];

        return (
            <div className={styles.store}>
                <div className={styles.store_h}>
                    <h1 className={styles.h1_store}>Store</h1>
                    <h1 className={styles.sort_by}>Sort by <SortDropdown/></h1>
                </div>
                <div className={styles.df}>
                    <div className={styles.sort}>
                        <h2 className={styles.plant_title_line}>ALL PLANT'S</h2>

                        <div className={styles.sort_block}>
                            <h3 className={styles.plant_title}>SIZE</h3>
                            {sizeFilters.map(filter => (
                                <div key={filter.id} className="checkbox">
                                    <input
                                        className="checkbox-input"
                                        type="checkbox"
                                        id={`size-${filter.id}`}
                                    />

                                    <label className="checkbox-label"
                                           htmlFor={`size-${filter.id}`}>{filter.label}</label>
                                </div>
                            ))}

                        </div>

                        <div className={styles.sort_block}>
                            <h3 className={styles.plant_title}>WATERING FREQUENCY</h3>
                            {wateringFilters.map(filter => (
                                <div key={filter.id} className="checkbox">
                                    <input
                                        className="checkbox-input"
                                        type="checkbox"
                                        id={`size-${filter.id}`}
                                    />

                                    <label className="checkbox-label"
                                           htmlFor={`size-${filter.id}`}>{filter.label}</label>
                                </div>
                            ))}

                        </div>

                        <div className={styles.sort_block}>
                            <h3 className={styles.plant_title}>LOCATION IN THE ROOM</h3>
                            {locationFilters.map(filter => (
                                <div key={filter.id} className="checkbox">
                                    <input
                                        className="checkbox-input"
                                        type="checkbox"
                                        id={`size-${filter.id}`}
                                    />

                                    <label className="checkbox-label"
                                           htmlFor={`size-${filter.id}`}>{filter.label}</label>
                                </div>
                            ))}

                        </div>

                        <div className={styles.sort_block}>
                            <h3 className={styles.plant_title}>TYPE</h3>
                            {typeFilters.map(filter => (
                                <div key={filter.id} className="checkbox">
                                    <input
                                        className="checkbox-input"
                                        type="checkbox"
                                        id={`size-${filter.id}`}
                                    />

                                    <label className="checkbox-label"
                                           htmlFor={`size-${filter.id}`}>{filter.label}</label>
                                </div>
                            ))}

                        </div>

                    </div>
                    <div className={styles.productsContainer}>
                        {plants.map((plant) => (
                            <div key={plant.id} className={styles.tovar}>
                                <Image
                                    width={218}
                                    height={61}
                                    src={plantImages[plant.id]}
                                    alt={'sda'}
                                    className={styles.img}
                                />
                                <div className={styles.tovarHeader}>
                                    <h3 className={styles.tovarTitle}>{plant.title}</h3>
                                </div>



                                <button className={styles.addToCartBtn}>
                                    ADD TO CART
                                </button>
                            </div>
                        ))}
                    </div>

                </div>

                <div>
                    <ul>

                    </ul>
                </div>
            </div>


        );
}
export default Store;