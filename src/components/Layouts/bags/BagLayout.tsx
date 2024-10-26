'use client'
import { FetchAPI } from "@/api/Api"
import { LoadingAnimation } from "@/components/Elements/Loading"
import { BagDetail } from "@/components/Fragments/Bag"
import { Bag } from "@/interfaces/api/Bag"
import { Fragment, useEffect, useState } from "react"

export const BagLayout = () => {
    const [bag, setBag] = useState<Bag>({
        books: []
    })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchBag = async() => {
            try {
                let bagResponse = await FetchAPI('/bags')
                setBag(bagResponse.data.bag)                    
            } catch (error) {
                setError('failed to fetch api ' + error)
            }finally {
                setLoading(false)
            }
        }

        fetchBag()
    }, [])

    if(loading) return <Fragment> <LoadingAnimation/> </Fragment>
    if(error) return <Fragment> {error} </Fragment>

    return <>
        <Fragment>
            <BagDetail books={bag?.books}  />
        </Fragment>
    </>
}