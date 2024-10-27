import { Fragment, useState } from "react"
import { Input } from "../Elements/Input"
import { RegisterRequest } from "@/interfaces/api/Onboarding"

export const RegisterForm = () => {
    const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({
        email: "",
        password: ""
    })
    return <>
        <Fragment>
            <div className="mx-16 px-8">
                <form method="POST" onSubmit={() => {}} className="w-full bg-white my-5 py-5 justify content-center">
                    <Input 
                        id="email"
                        label="Email"
                        name="email"
                        inputType="email"
                        onChange={() => {}}
                        value={registerRequest.email}
                        labelFor="email"
                    />
                    <Input 
                        id="password"
                        name="password"
                        label="Password"
                        inputType="password"
                        onChange={() => {}}
                        value={registerRequest.password}
                        labelFor="password"
                    />
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-4 mx-6">Login</button>
                </form>
            </div>
        </Fragment>
    </>
}