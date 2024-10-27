import about_us from './../../assets/img/about_us.jpg'

export const AboutUsImage = () => {
    return <>
        <div className="mx-2 px-6">
            <img src={about_us.src} alt="about us image" height={500} />
        </div>
    </>
}