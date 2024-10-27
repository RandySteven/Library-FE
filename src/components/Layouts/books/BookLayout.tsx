'use client';
import { FetchAPI } from "@/api/Api";
import { LoadingAnimation } from "@/components/Elements/Loading";
import { BookDetail } from "@/components/Fragments/BookDetail";
import { BookDetailResponse } from "@/interfaces/api/Book";
import { BookDetailProps } from "@/interfaces/props/BookDetail"
import { Fragment, useEffect, useState } from "react"

export const BookLayout : React.FC<BookDetailProps> = ({params}) => {
    const [bookDetail, setBookDetail] = useState<BookDetailResponse>({
        id: 0,
        title: "",
        authors: [],
        genres: [],
        description: "",
        created_at: "",
        image: "",
        status: ""
    })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    console.log(params.id)
    useEffect(() => {
        const fetchBook = async () => {
            try{
                let response = await FetchAPI(`/books/${params.id}`)
                setBookDetail(response.data.book)
            }catch(error) {
                setError('Failed to fetch data ' + error)
            }finally {
                setLoading(false)
            }
        }

        fetchBook()
    }, [])

    if(loading) return <Fragment> <LoadingAnimation/> </Fragment>
    if(error) return <Fragment> {error} </Fragment>

    return <>
        <Fragment>
            <BookDetail 
                id={bookDetail.id}
                title={bookDetail?.title}
                authors={bookDetail?.authors}
                genres={bookDetail?.genres}
                description={bookDetail?.description}
                created_at={bookDetail?.created_at}
                image={bookDetail?.image}
                status={bookDetail?.status}/>
        </Fragment>
    </>
}