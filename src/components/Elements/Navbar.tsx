'use client';
import { FetchAPI } from "@/api/Api";
import { LoginUserResponse } from "@/interfaces/api/Onboarding";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react"

export const NavbarContent = () => {
    const currentPath = usePathname();

    return (
        <div className="flex space-x-4">
            <Link 
                href="/" 
                className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white ${
                    currentPath === '/' ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`}
            >
                Library
            </Link>
            <Link 
                href="/books" 
                className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white ${
                    currentPath === '/books' ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`}
            >
                Books
            </Link>
            <Link 
                href="/stories" 
                className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white ${
                    currentPath === '/stories' ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`}
            >
                Stories Generator
            </Link>
            <Link 
                href="/genres" 
                className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white ${
                    currentPath === '/genres' ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`}
            >
                Genres
            </Link>
        </div>
    );
}

const Hiddenbar = () => {
    return <>
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Link href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</Link>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
            </div>
        </div>
    </>
}

export const Navbar = () => {
    return <>
        <Fragment>
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <NavbarContent />
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    </button> */}

                    <div className="relative ml-3">
                        <UserMenuBar />
                    </div>
                </div>
                </div>
            </div>

            <Hiddenbar />
        </nav>        
        </Fragment>
    </>
}

const UserMenuBar = () => {
    const [loginUserResponse, setLoginUserResponse] = useState<LoginUserResponse | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            setIsLoggedIn(false);
            return;
        }

        const fetchUserLogin = async () => {
            try {
                const response = await FetchAPI('/onboarded');
                
                if (response.status === 401) {
                    setIsLoggedIn(false);
                } else {
                    setLoginUserResponse(response.data.user);
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                setIsLoggedIn(false);
            }
        };

        fetchUserLogin();
    }, []);

    return (
        <>
            <div className="rounded-md px-3 py-2 text-sm font-medium text-white text-lg">
                {isLoggedIn && loginUserResponse ? (
                    <Link href="">
                        {loginUserResponse.name}
                    </Link>
                ) : (
                    <Link href="/onboarding/login">Login</Link>
                )}
            </div>
        </>
    );
}