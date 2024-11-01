'use client';
import { BookDetail } from "@/components/Fragments/BookDetail";
import { BookLayout } from "@/components/Layouts/books/BookLayout";
import { BookDetailProps } from "@/interfaces/props/BookDetail";
import { Fragment } from "react";

export default function BookDetailPage({params}: BookDetailProps) {
    return <>
        <Fragment>
            <div className="mx-16 my-4">
                <BookLayout params={params} />
            </div>
        </Fragment>
    </>
}