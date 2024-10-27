import { LoremIpsum } from "@/utils/utils"
import { Fragment } from "react"
import { AboutUsContent } from "../Elements/AboutUsContent"
import { AboutUsImage } from "../Elements/AboutUsImage"

export const AboutUs = () => {
    return <>
        <Fragment>
            <div className="w-full grid grid-cols-2 my-8">
                <AboutUsImage />
                <AboutUsContent />
            </div>
        </Fragment>
    </>
}