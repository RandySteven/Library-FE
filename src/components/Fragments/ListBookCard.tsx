'use client'
import { ListBookResponse } from "@/interfaces/api/Book"
import React, { Fragment, useEffect, useState } from "react"
import { LoadingAnimation } from "../Elements/Loading"
import Link from "next/link"
import { BookCard } from "../Elements/Card"
import { FetchAPI } from "@/api/Api"
import { ListBookProps } from "@/interfaces/props/ListBook"

export const ListBookCard : React.FC<ListBookProps> = ({books}) => {
    let listBookResponse = books
    console.log(books)
    return <>
        <Fragment>
            <div className="grid grid-cols-4">
                {listBookResponse == null ? (
                    <p>No records found. {}
                    <Link href="" className="text-blue-500 hover:text-blue-600">
                        create one
                    </Link></p>
                ) : (
                    listBookResponse.map((book: ListBookResponse) => (
                        <BookCard 
                            id={book.id}
                            title={book.title}
                            image={book.image}
                            status={book.status}
                            rating={book.rating}
                        />
                    ))
                )}
            </div>
        </Fragment>
    </>
}