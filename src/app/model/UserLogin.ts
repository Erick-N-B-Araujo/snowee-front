import { Permission } from "./Permission";

export class UserLogin{
    id: number;
    username: string;
    password: string;
    token: string;
    permissions: Permission[];
}