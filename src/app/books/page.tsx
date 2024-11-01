import { ListBookCard } from "@/components/Fragments/ListBookCard";
import { BooksLayout } from "@/components/Layouts/books/BooksLayout";
import { Fragment } from "react";

export default function Page() {
    return <>
        <Fragment>
            <div className="mx-16 my-4">
                <BooksLayout />
            </div>
        </Fragment>
    </>
}