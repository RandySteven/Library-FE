import { ListBookCard } from "@/components/Fragments/ListBookCard";
import { LoginLayout } from "@/components/Layouts/auth/LoginLayout";
import { Fragment } from "react";

export default function Page() {
    return <>
        <Fragment>
            <div className="mx-16 my-4">
                <LoginLayout />
            </div>
        </Fragment>
    </>
}