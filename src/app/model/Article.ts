import { Theme } from "./Theme"
import { User } from "./User"
import { UserLogin } from "./UserLogin"

export class Article{
    id: number
    title: string
    articleText: string
    imgUrl: string
    createdAt: string
    user: UserLogin
    themes: Theme[]
}