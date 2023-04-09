import { Theme } from "./Theme"
import { UserLogin } from "./UserLogin"

export class Article{
    id: number
    title: string
    descriptionText: string
    articleText: string
    imgUrl: string
    createdAt: string
    updatedAt: string
    user: UserLogin
    themes: Theme[]
}