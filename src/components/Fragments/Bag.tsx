import { BagProps } from "@/interfaces/props/Bag"
import { CardBookBag } from "@/interfaces/props/CardBookBag"
import { Fragment } from "react"
import { BookBagCard } from "../Elements/Card"

export const BagDetail = (props : BagProps) => {

    return <>
        <Fragment>
            <div className="grid grid-cols-1">
                {props.books == null ? (
                    <p>
                        No books in bags
                    </p>
                ): (
                    props.books.map((book : CardBookBag) => (
                        <BookBagCard 
                            id={book.id} 
                            title={book.title} 
                            image={book.image}                            
                        />
                    ))
                )}
            </div>
        </Fragment>
    </>
}