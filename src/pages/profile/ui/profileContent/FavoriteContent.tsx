'use client';

import { FC, MouseEventHandler, useEffect } from 'react';
import Animate from 'animate.css-react';
import 'animate.css/animate.css';
import { RootState } from '@/app/store/types';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '@/app/store';
import {
  useGetAllFavoritesQuery,
  useRemoveFavoritesMutation,
} from '@/shared/clientApi/favorite';
import { ProductModel } from '@/shared/contracts';
import { ModalType, openModal } from '@/app/store/modalSlice';
import { addProductToBasket } from '@/app/store/basketMock';
import { useAddProductToBasketMutation } from '@/shared/clientApi';

const getAccessTokenState = (state: RootState) => state.accessToken;
export interface IFavoritesList {
  products?: [ProductModel];
}
export const FavoriteContent: FC = () => {
  const {
    data: favorites,
    isLoading,
    isFetching,
  } = useGetAllFavoritesQuery({});
  const [removeFav] = useRemoveFavoritesMutation();
  const favoritesList: IFavoritesList | undefined = favorites?.payload;
  const handleRemoveFavoritesClick = (id: number) => {
    removeFav(id);
  };
  const { accessToken } = useSelector(getAccessTokenState);
  const dispatch = useDispatch();
  const [addProductToBasket] = useAddProductToBasketMutation();
  const handleAddToBasketClick = (product: any) => {
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
    } else {
      addProductToBasket(product);
    }
  };

  console.log('-> favoritesList', favoritesList);
  return (
    <Animate appear="fadeOut" durationAppear={100}>
      <div className="profile__target profile__target--active profile__target--opacity">
        <h2 className="miniTitle miniTitle--profile">Избранное</h2>
        <div className="likeInfo">
          <div className="likeInfo__container">
            <div className="likeInfo__grid">
              {favoritesList?.products?.map(favorite => {
                return (
                  <div data-pic="1" className="likeInfo__grid-item">
                    <img
                      className="likeInfo__grid-img"
                      src={favorite.photoPath}
                      alt=""
                    />
                    <div className="likeInfo__itemInfo">
                      <div className="likeInfo__itemInfo-title">
                        {favorite.name}
                      </div>
                      <div className="likeInfo__itemInfo-subtitle">
                        {`${favorite.price} ₽ `}
                      </div>
                      <div className="likeInfo__itemInfo-buttons">
                        <div
                          className="likeInfo__itemInfo-buttonBasket"
                          onClick={() => handleAddToBasketClick(favorite)}
                        >
                          <div className="likeInfo__itemInfo-icon icon-basket"></div>
                          В корзину
                        </div>
                        <div
                          className="likeInfo__itemInfo-buttonTrash"
                          onClick={() =>
                            handleRemoveFavoritesClick(favorite.id)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path d="M13.8053 5.64357L13.5953 12.981C13.5774 13.5238 13.3481 14.0382 12.9559 14.4152C12.5638 14.7921 12.0397 15.0019 10.995 15H5.50446C4.96008 15.0019 4.43634 14.7924 4.04426 14.4159C3.65218 14.0394 3.4226 13.5255 3.40417 12.9831L3.19415 5.64357C3.18955 5.50474 3.24046 5.36977 3.33568 5.26837C3.4309 5.16696 3.56263 5.10742 3.70189 5.10284C3.84115 5.09826 3.97653 5.14901 4.07825 5.24394C4.17997 5.33887 4.23969 5.47019 4.24429 5.60902L4.45432 12.948C4.46478 13.2187 4.58002 13.4747 4.77584 13.6624C4.97165 13.8501 5.23281 13.9549 5.50446 13.9546H10.995C11.767 13.9548 12.0285 13.8498 12.2243 13.6616C12.4202 13.4735 12.5352 13.2169 12.5452 12.946L12.7552 5.60902C12.7598 5.47019 12.8195 5.33887 12.9212 5.24394C13.0229 5.14901 13.1583 5.09826 13.2976 5.10284C13.4368 5.10742 13.5686 5.16696 13.6638 5.26837C13.759 5.36977 13.8099 5.50474 13.8053 5.64357ZM14.5 3.53457C14.5 3.6734 14.4447 3.80654 14.3462 3.90471C14.2477 4.00287 14.1142 4.05802 13.9749 4.05802H3.02507C2.88581 4.05802 2.75226 4.00287 2.65379 3.90471C2.55532 3.80654 2.5 3.6734 2.5 3.53457C2.5 3.39574 2.55532 3.2626 2.65379 3.16443C2.75226 3.06627 2.88581 3.01112 3.02507 3.01112H5.6528C5.81916 3.01156 5.97975 2.95029 6.1033 2.83921C6.22685 2.72814 6.30452 2.57521 6.32121 2.41019C6.35996 2.02309 6.54188 1.66423 6.83153 1.40354C7.12118 1.14285 7.4978 0.998993 7.88803 1.00001H9.11145C9.50167 0.998993 9.8783 1.14285 10.1679 1.40354C10.4576 1.66423 10.6395 2.02309 10.6783 2.41019C10.695 2.57521 10.7726 2.72814 10.8962 2.83921C11.0197 2.95029 11.1803 3.01156 11.3467 3.01112H13.9744C14.1137 3.01112 14.2472 3.06627 14.3457 3.16443C14.4442 3.2626 14.4995 3.39574 14.4995 3.53457H14.5ZM7.23274 3.01112H9.76779C9.69879 2.85394 9.65366 2.6874 9.63389 2.51698C9.62089 2.38795 9.5603 2.26833 9.46387 2.18129C9.36745 2.09425 9.24205 2.04599 9.11197 2.04587H7.88855C7.75848 2.04599 7.63308 2.09425 7.53665 2.18129C7.44023 2.26833 7.37964 2.38795 7.36663 2.51698C7.3467 2.68743 7.30192 2.85397 7.23274 3.01112ZM7.26149 11.442V6.98476C7.26149 6.84593 7.20617 6.71279 7.1077 6.61462C7.00923 6.51645 6.87567 6.4613 6.73641 6.4613C6.59716 6.4613 6.4636 6.51645 6.36513 6.61462C6.26666 6.71279 6.21134 6.84593 6.21134 6.98476V11.4441C6.21134 11.5829 6.26666 11.716 6.36513 11.8142C6.4636 11.9124 6.59716 11.9675 6.73641 11.9675C6.87567 11.9675 7.00923 11.9124 7.1077 11.8142C7.20617 11.716 7.26149 11.5829 7.26149 11.4441V11.442ZM10.7892 11.442V6.98476C10.7892 6.84593 10.7339 6.71279 10.6354 6.61462C10.5369 6.51645 10.4034 6.4613 10.2641 6.4613C10.1249 6.4613 9.9913 6.51645 9.89283 6.61462C9.79436 6.71279 9.73904 6.84593 9.73904 6.98476V11.4441C9.73904 11.5829 9.79436 11.716 9.89283 11.8142C9.9913 11.9124 10.1249 11.9675 10.2641 11.9675C10.4034 11.9675 10.5369 11.9124 10.6354 11.8142C10.7339 11.716 10.7892 11.5829 10.7892 11.4441V11.442Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
};

export const FavoriteContentWithProvider: FC = () => (
  <Provider store={store}>
    <FavoriteContent />
  </Provider>
);
