import { FC } from "react";

export const Aside: FC = () => {
  return (
    <div className="menu">
      <div className="menu__item foodMenu">
        <a href="#" className="menu__item-linkMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.92889 10.0077L11.1753 18.2872C11.5656 18.679 11.5655 19.3142 11.1751 19.7059C10.7845 20.0978 10.1511 20.0977 9.76066 19.7057L0.809266 10.7184C0.437305 10.345 0.419913 9.75061 0.75702 9.3565C0.778057 9.33069 0.800569 9.30569 0.824554 9.28161L9.77595 0.29435C10.1664 -0.0977022 10.7998 -0.0978038 11.1904 0.294122C11.5808 0.685868 11.5809 1.32098 11.1906 1.71286L2.92889 10.0077Z"
              fill="white"
            />
          </svg>
          <p>Меню</p>
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/1.png" alt="" />
        <a href="pizza.html" className="menu__item-link">
          Пицца
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/2.png" alt="" />
        <a href="#" className="menu__item-link">
          Горячие блюда
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/3.png" alt="" />
        <a href="rolls.html" className="menu__item-link">
          Роллы
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/4.png" alt="" />
        <a href="#" className="menu__item-link">
          Горячие роллы
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/5.png" alt="" />
        <a href="#" className="menu__item-link">
          Сеты Kids Box
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/6.png" alt="" />
        <a href="#" className="menu__item-link">
          Суши
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/7.png" alt="" />
        <a href="#" className="menu__item-link">
          Салаты и закуски
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/8.png" alt="" />
        <a href="#" className="menu__item-link">
          Десерты
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/9.png" alt="" />
        <a href="#" className="menu__item-link">
          Специи Напитки
        </a>
      </div>
      <div className="menu__item">
        <img src="./img/menu/10.png" alt="" />
        <a href="#" className="menu__item-link">
          Бизнес-ланчи
        </a>
      </div>
    </div>
  );
};
