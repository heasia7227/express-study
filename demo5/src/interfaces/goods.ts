import { ICategory } from "./category";
import { IGoodsComment } from "./goodsComment";
import { IGoodsPicture } from "./goodsPicture";

export interface IGoods {
    id: number;
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
