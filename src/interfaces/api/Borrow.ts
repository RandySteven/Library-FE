export interface BorrowResponse {
    id: number
    borrow_id: string
    user_id: string
    total_items: number
    borrowed_date: string
    returned_date: string
    created_at: string
}

export interface BorrowListResponse {
    id: number
    borrow_id: number
    borrow_date: string
    total_items: number
}

interface BorrowedBook {
    id: number
    title: string
    image: string
    borrowed_date: string
    returned_date: string
    has_returned: boolean
}

interface User {
    id: number
    name: string
}

export interface BorrowDetailResponse {
    id: number
    borrow_reference: string
    user: User
    borrowed_books: BorrowedBook[]
}