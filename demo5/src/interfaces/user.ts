/**
 * @typedef LoginParams
 * @property {string} userName.required
 * @property {string} password.required
 */
export interface ILoginParams {
    userName: string;
    password: string;
}

export interface IUser {
    id: number;
    userName: string;
    avatar: string;
    tel: string;
    email: string;
    nickName: string;
    gender: string;
    birthday: string;
    createAt: string;
    updateAt: string;
}
