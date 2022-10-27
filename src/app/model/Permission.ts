import { User } from "./User";

export class Permission{
    id: number;
    permissionName: string;
    users: User[]
}