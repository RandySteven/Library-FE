import { LoremIpsum } from "@/utils/utils"
import { Fragment } from "react"

export const Footer = () => {
    return <>
        <Fragment>
            <footer className="bg-blue-500 text-white row-start-3 flex gap-6 flex-wrap items-center justify-center mt-32 px-8 py-4">
                {LoremIpsum()}
            </footer>
        </Fragment>
    </>
}