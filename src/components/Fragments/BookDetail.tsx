'use client'
import { FetchAPI } from "@/api/Api"
import { BookDetailResponse } from "@/interfaces/api/Book"
import { Fragment, useEffect, useState } from "react"
import { LoadingAnimation } from "../Elements/Loading"
import { BookDetailProps } from "@/interfaces/props/BookDetail"
import { TableDetail } from "../Elements/TableDetail"

export const BookDetail = (bookDetail : BookDetailResponse) => {
    
    let addBagButton = null
    if(bookDetail?.status == "Available") {
        addBagButton = <form className="justify content-center">
            <button className="bg-green-500 text-white hover:bg-green-600 px-2 text-center py-3 w-full">Add to Bag</button>
        </form>
    }

    return <>
        <Fragment>
            <div className="grid grid-cols-3 gap-4 py-6 px-5">
                <div className="grid content-center grid-cols-1">
                    <div className="w-full pl-32">
                        <img src={bookDetail?.image} alt="" className="h-96 w-64 object-center"/>
                    </div>
                </div>
                <div className="col-span-2 w-full">
                    <h1 className="text-center text-2xl font-bold">{bookDetail?.title}</h1>
                    <table className="border border-2 border-black px-2 w-full my-5 px-3 py-4">
                        <TableDetail keyName="Status" value={bookDetail.status} />
                        <TableDetail keyName="Authors" value={bookDetail.authors.join(", ")}/>
                        <TableDetail keyName="Genres" value={bookDetail.genres.join(", ")} />
                        <TableDetail keyName="Descriptions" value={bookDetail.description} />
                    </table>
                    {addBagButton}
                </div>
            </div>
        </Fragment>
    </>
}