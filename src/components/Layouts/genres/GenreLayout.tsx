'use client'
import { FetchAPI } from "@/api/Api";
import { LoadingAnimation } from "@/components/Elements/Loading";
import { GenreDetail } from "@/components/Fragments/GenreDetail";
import { ListBookCard } from "@/components/Fragments/ListBookCard";
import { Genre } from "@/interfaces/api/Genre";
import { UrlQueryProps } from "@/interfaces/props/UrlQuery";
import React, { Fragment, useEffect, useState } from "react";

export const GenreLayout : React.FC<UrlQueryProps> = ({params}) => {
    const [genreDetail, setGenreDetail] = useState<Genre>({
        id: 0,
        genre: "",
        created_at: "",
        updated_at: "",
        deleted_at: "",
        books: []
    })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchBook = async () => {
            try{
                let response = await FetchAPI(`/genres/${params.id}`)
                setGenreDetail(response.data.genre)
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
            <GenreDetail 
                id={genreDetail.id} 
                genre={genreDetail.genre} 
                created_at={genreDetail.created_at} 
                updated_at={genreDetail.updated_at} 
                deleted_at={genreDetail.deleted_at}
            />
            <ListBookCard books={genreDetail.books}/>
        </Fragment>
    </>
}