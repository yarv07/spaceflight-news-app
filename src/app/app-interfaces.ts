export interface Article {
    id: number,
    title: string,
    imgUrl: string,
    date: string,
    text: string,
    orderByTitleMatch: number,
    orderByTextMatch: number
}