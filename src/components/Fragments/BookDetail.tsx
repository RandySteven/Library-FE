'use client'
import { FetchAPI } from "@/api/Api"
import { BookDetailResponse } from "@/interfaces/api/Book"
import { Fragment, useEffect, useState } from "react"
import { LoadingAnimation } from "../Elements/Loading"
import { BookDetailProps } from "@/interfaces/props/BookDetail"

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
                    <table className="border border-2 border-white w-full my-5 px-3 py-4">
                        <tr className="border border-2 border-white py-2">
                            <th className="border border-2 border-white">
                                Status
                            </th>
                            <td className="border border-2 border-white">
                                {bookDetail?.status}
                            </td>
                        </tr>
                        <tr className="border border-2 border-white py-2">
                            <th className="border border-2 border-white">
                                Authors
                            </th>
                            <td className="border border-2 border-white">
                                {bookDetail?.authors.join(", ")}
                            </td>
                        </tr>
                        <tr className="border border-2 border-white py-2">
                            <th className="border border-2 border-white">
                                Genres
                            </th>
                            <td className="border border-2 border-white">
                                {bookDetail?.genres.join(", ")}
                            </td>
                        </tr>
                        <tr className="border border-2 border-white py-2">
                            <th className="border border-2 border-white">
                                Descriptions
                            </th>
                            <td className="border border-2 border-white">
                                {bookDetail?.description}
                            </td>
                        </tr>
                    </table>
                    {addBagButton}
                </div>
            </div>
        </Fragment>
    </>
}