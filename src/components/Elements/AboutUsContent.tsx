import { LoremIpsum } from "@/utils/utils"

export const AboutUsContent = () => {
    return <>
        <div className="px-16 pl-2 px-2">
            <h1 className="text-3xl font-bold text-center">About Us</h1>
            <p className="py-4 text-lg">
                {LoremIpsum()}
            </p>
        </div>
    </>
}