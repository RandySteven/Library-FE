import { ListBookResponse } from "./Book"

export interface Genres {
    id: number
    genre: string
}

export interface Genre{
    id: number
    genre: string
    books: ListBookResponse[]
    created_at: string
    updated_at: string
    deleted_at: string
}