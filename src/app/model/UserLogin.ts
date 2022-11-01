import { Permission } from "./Permission";

export class UserLogin{
    id: number;
    firstname: string;
    username: string;
    password: string;
    token: string;
    permissions: Permission[];
}