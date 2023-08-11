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
  Id: number;
  Street: string;
  House: string;
  /** @format int32 */
  Entrance: number;
  /** @format int32 */
  Floor: number;
  Apartament: string | null;
  /** @format int32 */
  UserId: number;
}

export interface AddToBasketRequest {
  /** @format int32 */
  ProductId: number;
}

export type AddToBasketResponse = object;

export interface AddToBasketResponseRestApiResponse {
  Payload: AddToBasketResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface BasketModel {
  /** @format int32 */
  Id: number;
  /** @format int32 */
  UserId: number;
  /** @format int32 */
  ProductId: number;
  Product: ProductModel;
}

export interface CategoryModel {
  /** @format int32 */
  Id: number;
  Name: string;
}

/** @format int32 */
export enum ChoiceOfDeliveryTime {
  Value0 = 0,
  Value1 = 1,
}

export interface CreateAddressRequest {
  Street: string;
  House: string;
  /** @format int32 */
  Entrance: number;
  /** @format int32 */
  Floor: number;
  Apartament: string;
}

export type CreateAddressResponse = object;

export interface CreateAddressResponseRestApiResponse {
  Payload: CreateAddressResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface CreateFavoritesRequest {
  /** @format int32 */
  ProductId: number;
}

export type CreateFavoritesResponse = object;

export interface CreateFavoritesResponseRestApiResponse {
  Payload: CreateFavoritesResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface CreateOrderAgainRequest {
  /** @format int32 */
  OrderId: number;
}

export type CreateOrderAgainResponse = object;

export interface CreateOrderAgainResponseRestApiResponse {
  Payload: CreateOrderAgainResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface CreateUserOrderRequest {
  Recipient: string;
  RecipientPhone: string;
  /** @format int32 */
  NumberOfDevices: number;
  WayOfDelivery: WayOfDelivery;
  Address: string;
  ChoiceOfDeliveryTime: ChoiceOfDeliveryTime;
  /** @format date-time */
  DeliveryTime: string;
  WayOfPayment: WayOfPayment;
  /** @format int32 */
  Points: number;
  OrderComment: string | null;
  ProductsToOrder: ProductsToOrderModel[];
}

export type CreateUserOrderResponse = object;

export interface CreateUserOrderResponseRestApiResponse {
  Payload: CreateUserOrderResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface DadataResponse {
  Places: string[];
}

export interface DadataResponseRestApiResponse {
  Payload: DadataResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface Failure {
  Errors: Record<string, string[]>;
}

export interface FavoritesModel {
  /** @format int32 */
  Id: number;
  /** @format int32 */
  UserId: number;
  /** @format int32 */
  ProductId: number;
  Product: ProductModel;
}

export interface GetAddressResponse {
  Address: AddressModel[];
}

export interface GetAddressResponseRestApiResponse {
  Payload: GetAddressResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface GetBasketsResponse {
  Baskets: BasketModel[];
}

export interface GetBasketsResponseRestApiResponse {
  Payload: GetBasketsResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface GetCategoryResponse {
  Categories: CategoryModel[];
}

export interface GetCategoryResponseRestApiResponse {
  Payload: GetCategoryResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface GetOrdersResponse {
  Orders: OrderModel[];
}

export interface GetOrdersResponseRestApiResponse {
  Payload: GetOrdersResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface GetProductsResponse {
  Products: ProductModel[];
}

export interface GetProductsResponseRestApiResponse {
  Payload: GetProductsResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface GetProductsToOrderResponse {
  ProductsToOrders: ProductsToOrderModel[];
}

export interface GetProductsToOrderResponseRestApiResponse {
  Payload: GetProductsToOrderResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface GetPromoResponse {
  Promos: PromoModel[];
}

export interface GetPromoResponseRestApiResponse {
  Payload: GetPromoResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface GetUserResponse {
  User: UserModel;
}

export interface GetUserResponseRestApiResponse {
  Payload: GetUserResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface LoginRequest {
  Phone: string;
  OneTimePassword: string;
}

export interface LoginResponse {
  AccessToken: string | null;
  LoginStatus: LoginStatus;
}

export interface LoginResponseRestApiResponse {
  Payload: LoginResponse;
  Failure: Failure;
  IsSuccess: boolean;
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
  Id: number;
  Recipient: string;
  RecipientPhone: string;
  /** @format int32 */
  NumberOfDevices: number;
  ChoiceOfDeliveryTime: ChoiceOfDeliveryTime;
  WayOfDelivery: WayOfDelivery;
  WayOfPayment: WayOfPayment;
  OrderStatus: OrderStatus;
  /** @format date-time */
  DeliveryTime: string;
  IndividualNumber: string | null;
  OrderComment: string | null;
  /** @format int32 */
  Points: number;
  /** @format int32 */
  UserId: number;
  Address: string | null;
  ProductsToOrder: ProductsToOrderModel[] | null;
}

/** @format int32 */
export enum OrderStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface ProductModel {
  /** @format int32 */
  Id: number;
  Name: string;
  Composition: string | null;
  Description: string | null;
  /** @format int32 */
  Price: number;
  /** @format int32 */
  Weight: number;
  /** @format int32 */
  Kcal: number;
  /** @format int32 */
  Proteins: number;
  /** @format int32 */
  Fats: number;
  /** @format int32 */
  Carbohydrates: number;
  /** @format int32 */
  CategoryId: number;
  PhotoPath: string | null;
  Category: CategoryModel;
}

export interface ProductsToOrderModel {
  /** @format int32 */
  Id: number;
  /** @format int32 */
  OrderId: number;
  /** @format int32 */
  ProductId: number;
  /** @format int32 */
  Count: number;
  /** @format int32 */
  FullPrice: number;
  /** @format int32 */
  FinalPrice: number;
  Product: ProductModel;
}

export interface PromoModel {
  /** @format int32 */
  Id: number;
  Title: string;
  Description: string;
  PhotoPath: string;
}

export interface RemoveFromBasketRequest {
  /** @format int32 */
  ProductId: number;
}

export type RemoveFromBasketResponse = object;

export interface RemoveFromBasketResponseRestApiResponse {
  Payload: RemoveFromBasketResponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface SendOneTimePasswordReponse {
  Message: string | null;
}

export interface SendOneTimePasswordReponseRestApiResponse {
  Payload: SendOneTimePasswordReponse;
  Failure: Failure;
  IsSuccess: boolean;
}

export interface SendOneTimePasswordRequest {
  Phone: string;
}

export interface UserModel {
  /** @format int32 */
  Id: number;
  Phone: string;
  FirstName: string;
  LastName: string;
  IsBlocked: boolean;
  /** @format int32 */
  LastPasswordId: number;
  ApiUserToken: string;
  UserRole: UserRoles;
  /** @format int32 */
  Points: number;
  RegistrationStatus: UserRegistrationStatus;
  /** @format date-time */
  LastLoginDate: string;
  Addresses: AddressModel[];
  Favorites: FavoritesModel[];
  Orders: OrderModel[];
  Baskets: BasketModel[];
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
