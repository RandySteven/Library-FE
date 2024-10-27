'use client'
import { Fragment } from "react"

const HeroContent = () => {
    return <>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Library</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-xl">
                Discover the best way to get things done with our app!
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md text-lg">
                Get Started
            </button>
        </div>
    </>
}

export const HeroSection = () => {
    return (
        <Fragment>
            <section className="relative w-full h-screen bg-cover bg-center background-img">
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                <HeroContent />
            </section>
        </Fragment>
    );
};
