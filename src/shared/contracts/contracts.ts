/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddressModel {
  /** @format int32 */
  id?: number;
  street: string;
  house: string;
  /** @format int32 */
  entrance?: number;
  /** @format int32 */
  floor?: number;
  apartament?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface AddToBasketRequest {
  /** @format int32 */
  productId: number;
}

export type AddToBasketResponse = object;

export interface AddToBasketResponseRestApiResponse {
  payload?: AddToBasketResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface BasketItemModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  userId?: number;
  /** @format int32 */
  productId?: number;
  /** @format int32 */
  count?: number;
  product?: ProductModel;
}

export interface CategoryModel {
  /** @format int32 */
  id?: number;
  name: string;
}

/** @format int32 */
export enum ChoiceOfDeliveryTime {
  Value0 = 0,
  Value1 = 1,
}

export interface CreateAddressRequest {
  street: string;
  house: string;
  /** @format int32 */
  entrance: number;
  /** @format int32 */
  floor: number;
  apartament: string;
}

export type CreateAddressResponse = object;

export interface CreateAddressResponseRestApiResponse {
  payload?: CreateAddressResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateFavoritesRequest {
  /** @format int32 */
  productId: number;
}

export type CreateFavoritesResponse = object;

export interface CreateFavoritesResponseRestApiResponse {
  payload?: CreateFavoritesResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateOrderAgainRequest {
  /** @format int32 */
  orderId: number;
}

export type CreateOrderAgainResponse = object;

export interface CreateOrderAgainResponseRestApiResponse {
  payload?: CreateOrderAgainResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateSettingRequest {
  key: string;
  value: string;
}

export type CreateSettingResponse = object;

export interface CreateSettingResponseRestApiResponse {
  payload?: CreateSettingResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateUserOrderRequest {
  recipient: string;
  recipientPhone: string;
  /** @format int32 */
  numberOfDevices: number;
  wayOfDelivery: WayOfDelivery;
  address: string;
  choiceOfDeliveryTime: ChoiceOfDeliveryTime;
  /** @format date-time */
  deliveryTime: string;
  wayOfPayment: WayOfPayment;
  /** @format int32 */
  points?: number;
  individualNumber?: string | null;
  orderComment?: string | null;
  productsToOrder: ProductsToOrderModel[];
}

export type CreateUserOrderResponse = object;

export interface CreateUserOrderResponseRestApiResponse {
  payload?: CreateUserOrderResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface DadataResponse {
  places: string[];
}

export interface DadataResponseRestApiResponse {
  payload?: DadataResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface DeleteSettingRequest {
  /** @format int32 */
  id: number;
}

export type DeleteSettingResponse = object;

export interface DeleteSettingResponseRestApiResponse {
  payload?: DeleteSettingResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export type DeleteUserResponse = object;

export interface DeleteUserResponseRestApiResponse {
  payload?: DeleteUserResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface Failure {
  errors?: Record<string, string[]>;
}

export interface FavoritesModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  userId?: number;
  /** @format int32 */
  productId?: number;
  product?: ProductModel;
}

export interface GetAddressResponse {
  address: AddressModel[];
}

export interface GetAddressResponseRestApiResponse {
  payload?: GetAddressResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetAllSettingsResponse {
  settings: SettingModel[];
}

export interface GetAllSettingsResponseRestApiResponse {
  payload?: GetAllSettingsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetBasketItemsResponse {
  basketItems: BasketItemModel[];
}

export interface GetBasketItemsResponseRestApiResponse {
  payload?: GetBasketItemsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetCategoryResponse {
  categories: CategoryModel[];
}

export interface GetCategoryResponseRestApiResponse {
  payload?: GetCategoryResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetOrdersResponse {
  orders: OrderModel[];
}

export interface GetOrdersResponseRestApiResponse {
  payload?: GetOrdersResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetProductsResponse {
  products: ProductModel[];
}

export interface GetProductsResponseRestApiResponse {
  payload?: GetProductsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetProductsToOrderResponse {
  productsToOrders: ProductsToOrderModel[];
}

export interface GetProductsToOrderResponseRestApiResponse {
  payload?: GetProductsToOrderResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetPromoResponse {
  promos: PromoModel[];
}

export interface GetPromoResponseRestApiResponse {
  payload?: GetPromoResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetUserResponse {
  user: UserModel;
}

export interface GetUserResponseRestApiResponse {
  payload?: GetUserResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface LoginRequest {
  phone: string;
  oneTimePassword: string;
}

export interface LoginResponse {
  accessToken?: string | null;
  loginStatus?: LoginStatus;
}

export interface LoginResponseRestApiResponse {
  payload?: LoginResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

/** @format int32 */
export enum LoginStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
}

export interface OrderModel {
  /** @format int32 */
  id?: number;
  recipient: string;
  recipientPhone: string;
  /** @format int32 */
  numberOfDevices?: number;
  choiceOfDeliveryTime?: ChoiceOfDeliveryTime;
  wayOfDelivery?: WayOfDelivery;
  wayOfPayment?: WayOfPayment;
  orderStatus?: OrderStatus;
  /** @format date-time */
  deliveryTime?: string;
  individualNumber?: string | null;
  orderComment?: string | null;
  /** @format int32 */
  points?: number;
  /** @format int32 */
  userId?: number;
  address?: string | null;
  productsToOrder?: ProductsToOrderModel[] | null;
}

/** @format int32 */
export enum OrderStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface ProductModel {
  /** @format int32 */
  id?: number;
  name: string;
  composition?: string | null;
  description?: string | null;
  /** @format int32 */
  price?: number;
  /** @format int32 */
  weight?: number;
  /** @format int32 */
  kcal?: number;
  /** @format int32 */
  proteins?: number;
  /** @format int32 */
  fats?: number;
  /** @format int32 */
  carbohydrates?: number;
  /** @format int32 */
  categoryId?: number;
  photoPath?: string | null;
  category?: CategoryModel;
}

export interface ProductsToOrderModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  orderId?: number;
  /** @format int32 */
  productId?: number;
  /** @format int32 */
  count?: number;
  /** @format int32 */
  fullPrice?: number;
  /** @format int32 */
  finalPrice?: number;
  product: ProductModel;
}

export interface PromoModel {
  /** @format int32 */
  id?: number;
  title: string;
  description: string;
  photoPath: string;
}

export interface RemoveFromBasketRequest {
  /** @format int32 */
  productId: number;
}

export type RemoveFromBasketResponse = object;

export interface RemoveFromBasketResponseRestApiResponse {
  payload?: RemoveFromBasketResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface SendOneTimePasswordReponse {
  message?: string | null;
}

export interface SendOneTimePasswordReponseRestApiResponse {
  payload?: SendOneTimePasswordReponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface SendOneTimePasswordRequest {
  phone: string;
}

export interface SettingModel {
  /** @format int32 */
  id?: number;
  key: string;
  value: string;
}

export interface UpdateSettingRequest {
  /** @format int32 */
  id: number;
  key: string;
  value: string;
}

export type UpdateSettingResponse = object;

export interface UpdateSettingResponseRestApiResponse {
  payload?: UpdateSettingResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface UpdateUserRequest {
  firstName?: string | null;
  lastName?: string | null;
  mail?: string | null;
  /** @format date-time */
  birthDate?: string;
}

export type UpdateUserResponse = object;

export interface UpdateUserResponseRestApiResponse {
  payload?: UpdateUserResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface UserModel {
  /** @format int32 */
  id?: number;
  phone: string;
  firstName: string;
  lastName: string;
  isBlocked: boolean;
  /** @format int32 */
  lastPasswordId: number;
  apiUserToken: string;
  userRole: UserRoles;
  /** @format int32 */
  points: number;
  registrationStatus: UserRegistrationStatus;
  /** @format date-time */
  lastLoginDate: string;
  mail: string;
  /** @format date-time */
  birthDate: string;
  addresses: AddressModel[];
  favorites: FavoritesModel[];
  orders: OrderModel[];
  basketItems: BasketItemModel[];
}

/** @format int32 */
export enum UserRegistrationStatus {
  Value0 = 0,
  Value1 = 1,
}

/** @format int32 */
export enum UserRoles {
  Value0 = 0,
}

/** @format int32 */
export enum WayOfDelivery {
  Value0 = 0,
  Value1 = 1,
}

/** @format int32 */
export enum WayOfPayment {
  Value0 = 0,
  Value1 = 1,
}
