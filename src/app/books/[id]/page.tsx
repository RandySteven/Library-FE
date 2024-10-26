import { BookDetail } from "@/components/Fragments/BookDetail";
import { BookLayout } from "@/components/Layouts/books/BookLayout";
import { BookDetailProps } from "@/interfaces/props/BookDetail";
import { Fragment } from "react";

export default function BookDetailPage({params}: BookDetailProps) {
    return <>
        <Fragment>
            <BookLayout params={params} />
        </Fragment>
    </>
}