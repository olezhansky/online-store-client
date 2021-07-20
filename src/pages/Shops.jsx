import React from 'react';
import styles from './Pages.module.scss';

const Shops = () => (
  <div className="container">
    <div className={styles.Logo}>
      <ul>
        <li>
          <a href="/"> Интернет-магазин abcphoto</a>
        </li>
        <li> / Магазины</li>
      </ul>
    </div>
    <h1 className={styles.PagesH1}>Магазины</h1>
    <div>
      <h2>
        ИНТЕРНЕТ-МАГАЗИН
      </h2>
      <div>
        <p className={styles.Shops}>пн - пт: с 10:00 до 19:00</p>

        <p className={styles.phoneShope}>
          <span className={styles.codeShope}>0 800 </span>
          21 21 50
        </p>
      </div>

      <h2>КИЕВ</h2>
      <div>
        <p className={styles.addressShope}>
          ул. Б. Васильковская (Красноармейская), 132
          (Вход со двора)

        </p>
        <p>пн - пт: с 10:00 до 19:00</p>
        <p>сб: с 10:00 до 16:00</p>
        <p>показать на карте</p>
      </div>

      <h2>ДНЕПР</h2>
      ул. Харьковская, 7

      пн - сб: с 10:00 до 19:00

      вс: с 10:00 до 18:00

      показать на карте

      info@abcphoto.com.ua
      
    </div>
  </div>
);

export default Shops;