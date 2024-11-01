'use client'
import { BookDetailResponse } from "@/interfaces/api/Book"
import { Fragment } from "react"
import { TableDetail } from "../Elements/TableDetail"
import { AddToBagButton } from "../Elements/AddToBagButton"

interface bookDetailContent {
    title: string
    status: string
    rating: number
    authors: string[]
    genres: string[]
    description: string
}

interface bookDetailImage {
    image: string
}

const BookImageCol = (bookDetailImage : bookDetailImage) => {
    return <>
        <Fragment>
            <div className="w-full grid grid-cols-1 content-center justify-center">
                <div className="mx-auto">
                    <img src={bookDetailImage?.image} alt="" className="h-96 w-64 object-cover"/>
                </div>
            </div>
        </Fragment>
    </>
}

const BookTableContentCol = (bookDetail : bookDetailContent) => {
    return <>
        <Fragment>
            <h1 className="text-center text-2xl font-bold">{bookDetail?.title}</h1>
            <table className="border border-2 border-black w-full my-5 px-3 py-4">
                <TableDetail keyName="Rating" value={bookDetail?.rating.toString()} />
                <TableDetail keyName="Status" value={bookDetail.status} />
                <TableDetail keyName="Authors" value={bookDetail.authors.join(", ")}/>
                <TableDetail keyName="Genres" value={bookDetail.genres.join(", ")} />
                <TableDetail keyName="Descriptions" value={bookDetail.description} />
            </table>
            <AddToBagButton status={bookDetail?.status} />
        </Fragment>
    </>
}

export const BookDetail = (bookDetail : BookDetailResponse) => {
    return <>
        <Fragment>
            <div className="grid grid-cols-2 py-6 px-5 content-center justify-center">
                <div>
                    <BookImageCol image={bookDetail?.image}/>
                </div>
                <div className="w-full">
                    <BookTableContentCol 
                        title={bookDetail?.title}
                        rating={bookDetail?.rating}
                        status={bookDetail?.status} 
                        authors={bookDetail?.authors}
                        genres={bookDetail?.genres}
                        description={bookDetail?.description}
                    />
                </div>
            </div>
        </Fragment>
    </>
}
