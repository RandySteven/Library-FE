import { LoginForm } from "@/components/Fragments/LoginForm"
import { Fragment } from "react"

export const LoginLayout = () => {
    return <>
        <Fragment>
            <div className="px-5">
                <LoginForm />
            </div>
        </Fragment>
    </>
}