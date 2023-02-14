import { ICategory } from "./category";
import { IGoodsComment } from "./goodsComment";
import { IGoodsPicture } from "./goodsPicture";

export interface IGoods {
    id?: number;
    title: string;
    price: number;
    state: number;
    remark: string;
    detail: string;
    categoryId: number;
    category: ICategory;
    pictures: Array<IGoodsPicture>;
    comments: Array<IGoodsComment>;
}

/**
 * @typedef GoodsAddCommand
 * @property {string} title.required
 * @property {number} price.required
 * @property {number} state.required
 * @property {string} remark.required
 * @property {string} detail.required
 * @property {number} categoryId.required
 * @property {Array<GoodsPictureAddCommand>} pictures.required
 */
export interface IGoodsAddCommand {
    title: string;
    price: number;
    state: number;
    remark: string;
    detail: string;
    categoryId: number;
    pictures: Array<IGoodsPicture>;
}
