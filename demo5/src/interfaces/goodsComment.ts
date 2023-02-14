import { IUser } from "./user";

export interface IGoodsComment {
    id: number;
    comment: string;
    commentTime: string;
    stars: number;
    userId: number;
    user: IUser;
    goodsId: number;
    orderId: number;
}

/**
 * @typedef GoodsPictureAddCommand
 * @property {string} path.required
 * @property {number} isCover.required
 */

/**
 * @typedef GoodsPictureEditCommand
 * @property {number} id
 * @property {string} path.required
 * @property {number} isCover.required
 */
