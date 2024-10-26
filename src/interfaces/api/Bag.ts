interface BookBag {
    id: number
    title: string
    image: string
}

export interface Bag {
    books: BookBag[]
}