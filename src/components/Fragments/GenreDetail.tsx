import { GenreProps } from "@/interfaces/props/GenreProps"
import { Fragment } from "react"

export const GenreDetail = (props: GenreProps) => {
    return <>
        <Fragment>
            <h1 className="text-xl font-bold">{props.genre}</h1>
        </Fragment>
    </>
}