'use client'
import { PostJSONAPI } from "@/api/Api"
import { LoginRequest } from "@/interfaces/api/Onboarding"
import { NextResponse } from "next/server"
import { ChangeEvent, FormEvent, useState } from "react"

export const loginAuth = () => {
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLoginRequest(prevState => ({
          ...prevState,
          [name]: value,
        }
    ))};

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(loginRequest)
        const res = await PostJSONAPI('/onboarding/login', loginRequest)
        localStorage.setItem('token', res.data.user.token)
        return NextResponse.redirect(new URL('/onboarding/login', '/books'))
    }
    return loginRequest
}