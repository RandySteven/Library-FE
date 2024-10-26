'use client';
import { FetchAPI } from "@/api/Api"
import { LoadingAnimation } from "@/components/Elements/Loading"
import { ListBookCard } from "@/components/Fragments/ListBookCard"
import { ListBookResponse } from "@/interfaces/api/Book"
import { Fragment, JSX, useEffect, useState } from "react"

export const BooksLayout = () => {
    const [listBookResponse, setListBookResponse] = useState<ListBookResponse[]>([
        {
            id: 0,
            title: "",
            image: "",
            status: "",
            created_at: "",
            updated_at: "",
            deleted_at: ""
        }
    ])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchBookList = async () => {
            try {
                let bookList = await FetchAPI('/books')
                setListBookResponse(bookList.data.books)
            } catch (error) {
                setError('Failed to fetch data ' + error)
            } finally {
                setLoading(false)
            }
        }

        fetchBookList()
    }, [])


    if(loading) return <Fragment> <LoadingAnimation/> </Fragment>
    if(error) return <Fragment> {error} </Fragment>

    return <>
        <ListBookCard books={listBookResponse}/>
    </>
}