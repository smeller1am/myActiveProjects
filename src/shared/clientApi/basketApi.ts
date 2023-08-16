import {
  addProductToBasket,
  clearBasket,
  decreaseBasketProductCount,
  increaseBasketProductCount,
  removeProductFromBasket,
} from '@/app/store/basketMock';
import { emptySplitApi } from './base';
import { ProductModel } from '../contracts';
import { RootState } from '@/app/store';

export const basketApi = emptySplitApi.injectEndpoints({
  endpoints: build => ({
    addProductToBasket: build.mutation<null, ProductModel>({
      queryFn: (product, { dispatch }) => {
        dispatch(addProductToBasket(product));

        return { data: null };
      },
      invalidatesTags: ['UpdateBasketProducts'],
    }),

    removeProductFromBasket: build.mutation<null, ProductModel['Id']>({
      queryFn: (productId, { dispatch }) => {
        dispatch(removeProductFromBasket(productId));

        return { data: null };
      },
      invalidatesTags: ['UpdateBasketProducts'],
    }),

    getBasketProducts: build.query<
      { product: ProductModel; count: number }[],
      void
    >({
      queryFn: (_, { getState }) => {
        // todo: fix type
        const basketProducts = (getState() as any).basket.entries;

        return { data: Object.values(basketProducts) };
      },
      providesTags: ['UpdateBasketProducts'],
    }),

    increaseBasketProductCount: build.mutation<null, ProductModel['Id']>({
      queryFn: (productId, { dispatch }) => {
        dispatch(increaseBasketProductCount(productId));

        return { data: null };
      },
      invalidatesTags: ['UpdateBasketProducts'],
    }),

    decreaseBasketProductCount: build.mutation<null, ProductModel['Id']>({
      queryFn: (productId, { dispatch }) => {
        dispatch(decreaseBasketProductCount(productId));

        return { data: null };
      },
      invalidatesTags: ['UpdateBasketProducts'],
    }),

    clearBasket: build.mutation<null, void>({
      queryFn: (_, { dispatch }) => {
        dispatch(clearBasket());

        return { data: null };
      },
      invalidatesTags: ['UpdateBasketProducts'],
    }),
  }),
});

export const {
  useGetBasketProductsQuery,
  useAddProductToBasketMutation,
  useRemoveProductFromBasketMutation,
  useIncreaseBasketProductCountMutation,
  useDecreaseBasketProductCountMutation,
  useClearBasketMutation,
} = basketApi;
