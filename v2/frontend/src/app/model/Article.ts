import { Theme } from "./Theme"
import { UserLogin } from "./UserLogin"

export class Article{
    id: number=0;
    title: string="";
    subTitle: string="";
    description: string="";
    instructionList: string[]=[];
    codeList: string[]=[];
    ending: string="";
    descriptionText: string="";
    articleText: string="";
    imgUrl: string="";
    step: string="";
    code: string="";
    createdAt: string="";
    updatedAt: string="";
    user: UserLogin = new UserLogin;
    themes: Theme[]=[];
}