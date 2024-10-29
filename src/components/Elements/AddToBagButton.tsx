import { Fragment } from "react"

interface BookStatusProps {
    status: string
}

export const AddToBagButton = (status : BookStatusProps) => {
    return status.status == 'Available' ? 
        <>
            <Fragment>
                <form className="justify content-center">
                    <button className="bg-green-500 text-white hover:bg-green-600 px-2 text-center py-3 w-full">Add to Bag</button>
                </form>
            </Fragment>
        </>:
        <>
            <Fragment>
                <h3 className="text-lg font-bold text-center">
                    Currrently in borrowed by other user
                </h3>
            </Fragment>
        </>
}