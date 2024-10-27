export interface CreateBookRequest {

}

export interface CreateBookResponse {
    
}

export interface ListBookResponse {
    id: number
    title: string
    image: string
    status: string
    rating: number
    created_at: string
    updated_at: string
    deleted_at: string
}

export interface BookDetailResponse {
    id: number
    image: string
    title: string
    status: string
    description: string
    authors: string[]
    genres: string[]
    created_at: string
}