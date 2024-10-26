'use client'
import { CardBookBag } from "@/interfaces/props/CardBookBag"
import { CardBookList } from "@/interfaces/props/CardBookList"
import { CardGenreList } from "@/interfaces/props/CardGenreList"
import Link from "next/link"
import { Fragment, useState } from "react"

export const BookCard = (props : CardBookList) => {
    let bgStatus = ''
    
    switch(props.status) {
        case 'Available':
            bgStatus = 'bg-green-500 text-white'
            break
        case 'Borrowed':
            bgStatus = 'bg-yellow-500 text-black'
            break
    }
    let hreflink = "/books/"+props.id
    return <>
            <Fragment>
                <div className="block rounded-lg bg-black w-72 mt-32 border border-white border-1">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                        <img className="rounded-lg  sm:m-h-64 md:h-64 w-full" src={props.image} 
                            alt="" />
                        <a href="#!">
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>

                    <div className="p-2">
                        <div className="flex justify-between">
                            <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                                {props.title}
                            </h5>
                            <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
                                5.0 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-4 h-4 ml-1">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>

                            </h5>
                        </div>
                        <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200 mb-3">
                            <span className={`px-2 py-1 rounded ${bgStatus}`}>
                                {props.status}
                            </span>
                        </p>
                        <div className="w-full content-center">
                            <Link href={hreflink} className="bg-green-500 hover:bg-green-600 text-white px-2 pb-1 pt-1 rounded mt-6">
                                Detail
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
    </>
}

export const GenreCard = (props : CardGenreList) => {
    return <>
        <Fragment>
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-56">
            <div className="p-4">
                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    {props.genre}
                </h5>            
                <button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    Read more
                </button>
            </div>
        </div>

        </Fragment>
    </>
}

export const BookBagCard = (props : CardBookBag) => {
    return <>
        <Fragment>
        <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                <img
                src={props.image}
                alt="card-image"
                className="h-full w-full rounded-md md:rounded-lg object-cover"
                />
            </div>
            <div className="p-6">
                <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">STARTUP</div>
                <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {props.title}
                </h4>
                <div>
                    <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div> 
        </Fragment>
    </>
}