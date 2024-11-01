export interface LoginRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    name: string
    email: string
    password: string
}

export interface LoginTokenResponse {
    
}

export interface LoginUserResponse {
    id: number
    name: string
    email: string
    password: string
    date_of_birth: string
    phone_number: string
    address: string
    created_at: string
    updated_at: string
}