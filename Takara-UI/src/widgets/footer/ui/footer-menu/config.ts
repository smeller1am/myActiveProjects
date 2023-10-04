import { menuRecord } from '@/entities/menu';
import { IMenuItem } from '@/shared/types';

const menuItemsCol1: IMenuItem[] = [
  menuRecord.pizzas,
  menuRecord.hotDishes,
  menuRecord.soups,
  menuRecord.hosomaki,
  menuRecord.uramaki,
  menuRecord.futomaki,
];

const menuItemsCol2: IMenuItem[] = [
  menuRecord.friedRolls,
  menuRecord.bakedRolls,
  menuRecord.sets,
  menuRecord.kidBoxes,
  menuRecord.sushi,
  menuRecord.salads,
];

const menuItemsCol3: IMenuItem[] = [
  menuRecord.snacks,
  menuRecord.sandwiches,
  menuRecord.drinks,
  menuRecord.species,
  menuRecord.sweetRolls,
  menuRecord.businessLunches,
];

const menuItemsCol4: IMenuItem[] = [
  menuRecord.promotionsAndDiscounts,
  menuRecord.deliveryTerms,
  menuRecord.vacancies,
  menuRecord.contacts,
];

export const menuItems = [
  menuItemsCol1,
  menuItemsCol2,
  menuItemsCol3,
  menuItemsCol4,
];
