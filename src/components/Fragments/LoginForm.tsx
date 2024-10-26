'use client'
import { ChangeEvent, FormEvent, Fragment, useState } from "react"
import { Input } from "../Elements/Input"
import { LoginRequest } from "@/interfaces/api/Onboarding"
import { PostJSONAPI } from "@/api/Api"
import { redirect } from "next/dist/server/api-utils"
import { NextResponse } from "next/server"

export const LoginForm = () => {
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

    return <>
        <Fragment>
            <div className="mx-16 px-8">
                <form method="POST" onSubmit={handleSubmit} className="w-full bg-white my-5 py-5 justify content-center">
                    <Input 
                        id="email"
                        label="Email"
                        name="email"
                        inputType="email"
                        onChange={handleChange}
                        value={loginRequest.email}
                        labelFor="email"
                    />
                    <Input 
                        id="password"
                        name="password"
                        label="Password"
                        inputType="password"
                        onChange={handleChange}
                        value={loginRequest.password}
                        labelFor="password"
                    />
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-4 mx-6">Login</button>
                </form>
            </div>

        </Fragment>
    </>
}