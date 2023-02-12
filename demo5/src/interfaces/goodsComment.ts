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
