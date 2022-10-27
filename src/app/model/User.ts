import { Permission } from "./Permission";

export class User{
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    permissions: Permission[]
    createdAt: string;
    updatedAt: string;
}