import { IGoods } from "./goods";

export interface ICategory {
    id: number;
    categoryName: string;
    categoryIcon: string;
    state: number;
    goods: Array<IGoods>;
}
