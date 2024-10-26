'use client'
import { FetchAPI } from "@/api/Api"
import { GenreCard } from "@/components/Elements/Card"
import { LoadingAnimation } from "@/components/Elements/Loading"
import { ListGenreCards } from "@/components/Fragments/ListGenreCard"
import { Genres } from "@/interfaces/api/Genre"
import { Fragment, useEffect, useState } from "react"

export const GenresLayout = () => {
    const [genres, setGenres] = useState<Genres[]>([{
        id: 0,
        genre: ""
    }])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                let response = await FetchAPI('/genres')
                setGenres(response.data.genres)    
            } catch (error) {
                setError('failed to fetch api : '+ error)
            }finally {
                setLoading(false)
            }
        }

        fetchGenres()
    }, [])

    if(loading) return <Fragment> <LoadingAnimation/> </Fragment>
    if(error) return <Fragment> {error} </Fragment>

    return <>
        <Fragment>
            <ListGenreCards genres={genres} />
        </Fragment>
    </>
}