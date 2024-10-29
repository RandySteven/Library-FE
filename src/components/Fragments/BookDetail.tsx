'use client'
import { BookDetailResponse } from "@/interfaces/api/Book"
import { Fragment } from "react"
import { TableDetail } from "../Elements/TableDetail"
import { AddToBagButton } from "../Elements/AddToBagButton"

interface bookDetailContent {
    title: string
    status: string
    authors: string[]
    genres: string[]
    description: string
}

const BookImageCol = (src : any) => {
    return <>
        <Fragment>
            <div className="grid content-center grid-cols-1">
                <div className="w-full pl-32">
                    <img src={src} alt="" className="h-96 w-64 object-center"/>
                </div>
            </div>
        </Fragment>
    </>
}

const BookTableContentCol = (bookDetail : bookDetailContent) => {
    return <>
        <div className="col-span-2 w-full">
            <h1 className="text-center text-2xl font-bold">{bookDetail?.title}</h1>
            <table className="border border-2 border-black px-2 w-full my-5 px-3 py-4">
                <TableDetail keyName="Status" value={bookDetail.status} />
                <TableDetail keyName="Authors" value={bookDetail.authors.join(", ")}/>
                <TableDetail keyName="Genres" value={bookDetail.genres.join(", ")} />
                <TableDetail keyName="Descriptions" value={bookDetail.description} />
            </table>
            <AddToBagButton status={bookDetail?.status} />
        </div>
    </>
}

export const BookDetail = (bookDetail : BookDetailResponse) => {
    return <>
        <Fragment>
            <div className="grid grid-cols-2 gap-4 py-6 px-5">
                <BookImageCol src={bookDetail?.image}/>
                <BookTableContentCol 
                    title={bookDetail?.title}
                    status={bookDetail?.status} 
                    authors={bookDetail?.authors}
                    genres={bookDetail?.genres}
                    description={bookDetail?.description}
                />
            </div>
        </Fragment>
    </>
}