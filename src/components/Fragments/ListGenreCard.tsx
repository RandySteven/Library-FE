import { Genres } from "@/interfaces/api/Genre";
import { ListGenresProps } from "@/interfaces/props/ListGenres";
import React, { Fragment } from "react";
import { GenreCard } from "../Elements/Card";

export const ListGenreCards : React.FC<ListGenresProps> = ({genres}) => {
    return <>
        <Fragment>
            <div className="grid grid-cols-4">
            {genres == null ? (
                <p>
                    Genres not found
                </p>
            ) : (
                genres.map((genre : Genres) => 
                    <GenreCard
                        id={genre.id}
                        genre={genre.genre}
                    />
                )
            )}
            </div>
        </Fragment>
    </>
}