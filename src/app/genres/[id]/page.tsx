'use client'
import { BookDetail } from "@/components/Fragments/BookDetail";
import { BookLayout } from "@/components/Layouts/books/BookLayout";
import { GenreLayout } from "@/components/Layouts/genres/GenreLayout";
import { BookDetailProps } from "@/interfaces/props/BookDetail";
import { UrlQueryProps } from "@/interfaces/props/UrlQuery";
import { Fragment } from "react";

export default function GenreDetailPage({params}: UrlQueryProps) {
    return <>
        <Fragment>
            <div className="mx-16 my-4">
                <GenreLayout params={params} />
            </div>
        </Fragment>
    </>
}