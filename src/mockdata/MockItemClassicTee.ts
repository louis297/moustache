import { ItemDetailModel } from "../models/itemmodels/ItemDetailModel";
import classictee from './classic-tee.jpg';

export const MockItemClassicTee:ItemDetailModel = {
  ItemID: 1,
  ItemName: "Classic Tee",
  Price: {'S':75, 'M':75, 'L':75 },
  Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  AvailableSize: ['S', 'M', 'L'],
  Image: classictee
};
