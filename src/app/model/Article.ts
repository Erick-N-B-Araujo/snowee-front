import { Theme } from "./Theme"
import { User } from "./User"

export class Article{
    id: number
    title: string
    articleText: string
    imgUrl: string
    user: User
    themes: Theme[]
}