import React from 'react';
import SwiperCarousel from './SwiperCarousel/SwiperCarousel';
import styles from './DiscountSlider.module.scss';
import img1 from '../../assets/img/discountSliderComponent/img1.png';
import img2 from '../../assets/img/discountSliderComponent/img2.png';
import img3 from '../../assets/img/discountSliderComponent/img3.png';
import img4 from '../../assets/img/discountSliderComponent/img4.png';
import img5 from '../../assets/img/discountSliderComponent/img5.png';

const DiscountSlider = () => (
  <div className={styles.Sale}>
    <div className={styles.SaleContainer}>
      <h2 className={styles.SaleTitle}>АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</h2>
      <div className={styles.SaleSlider}>
        <div className={styles.slider}>
          <SwiperCarousel />
        </div>
        <div className={styles.img1}>
          <div className={styles.img1Content}>
            <p className={styles.img1ContentDiscount}>Скидка 10%</p>
            <p className={styles.img1ContentPrice}>
              1120
              <span> грн</span>
            </p>
            <p className={styles.img1ContentTitle}>Benro DJ-80</p>
          </div>
          <div className={styles.img1Block}>
            <img src={img1} alt={img1} />
          </div>
        </div>
        <div className={styles.img2}>
          <img src={img2} alt={img2} />
        </div>
        <div className={styles.img3}>
          <img src={img3} alt={img3} />
        </div>
        <div className={styles.img4}>
          <img src={img4} alt={img4} />
        </div>
        <div className={styles.img5}>
          <img src={img5} alt={img5} />
        </div>
      </div>
    </div>
  </div>
);

export default DiscountSlider;
