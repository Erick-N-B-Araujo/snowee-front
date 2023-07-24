import { Article } from "./Article";
import { Permission } from "./Permission";

export class UserLogin{
    id: number=0;
    firstname: string="";
    firstName: string="";
    lastname: string="";
    lastName: string="";
    username: string="";
    password: string="";
    token: string="";
    loggedAt: string="";
    profileImg: string="";
    permissions: Permission[]=[];
    articles: Article[]=[];
}