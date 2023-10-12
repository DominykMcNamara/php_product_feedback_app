import React from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import UserAvatar from "./UserAvatar";

export default function Navbar({ user }) {
    return (
        <div>
            <div className="relative sm:flex sm:justify-center sm:items-center  bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right flex flex-row justify-around w-full">
                    <div>
                        <ApplicationLogo />
                    </div>
                    {user ? (
                        <div>
                            <Link
                                href={route("dashboard")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                            <UserAvatar user={user} />
                        </div>
                    ) : (
                        <div className="flex flex-row">
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
