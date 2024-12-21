"use client"

import Breadcrumb from "@/components/Breadcrumb";

export default function Page() {

    const crumbs = [
        {
            label: 'Home',
            href: '/',
            icon: (
                <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414z" />
                </svg>
            ),
        },
        {
            label: 'Dashboard',
            href: '/dashboard',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="size-5">
                    <path strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                </svg>

                // <svg
                //     className="w-4 h-4"
                //     xmlns="http://www.w3.org/2000/svg"
                //     fill="currentColor"
                //     viewBox="0 0 20 20"
                // >
                //     <circle cx="10" cy="10" r="5" />
                // </svg>
            ),
        },
        { label: 'Users', href: null }, // Current page, no icon
    ];
    return (

        <div className="">
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="col-span-12 md:w-[70%]">

                    <div className="flex flex-col gap-5 max-w-full" >
                    <Breadcrumb crumbs={crumbs} />
                        <div className=" flex justify-between flex-wrap gap-x-5 gap-y-2 items-center mb-10">
                            <h3 className=" font-semibold grow text-2xl text-gray-200">All Users</h3>
                            <div className="flex flex-wrap gap-2 items-center space-x-5">
                                <button
                                    className=" bg-orange-500 hover:bg-orange-600 border-2 border-orange-500  grow min-w-[10rem] text-center text-white rounded-lg px-5 py-2.5 transition duration-300 ease-in-out flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                    <span className="capitalize">Add New User</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
                                    <th className="p-3">Brand</th>
                                    <th className="p-3 text-left">Category</th>
                                    <th className="p-3 text-left">Price</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-800">
                                    <td className="p-3">
                                        <div className="flex align-items-center">
                                            <img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image" />
                                            <div className="ml-3">
                                                <div className="">Appple</div>
                                                <div className="text-gray-500">mail@rgmail.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        Technology
                                    </td>
                                    <td className="p-3 font-bold">
                                        200.00$
                                    </td>
                                    <td className="p-3">
                                        <span className="bg-green-400 text-gray-50 rounded-md px-2">available</span>
                                    </td>
                                    <td className="p-3 ">
                                        <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                            <i className="material-icons-outlined text-base">visibility</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                                            <i className="material-icons-outlined text-base">edit</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                                            <i className="material-icons-round text-base">delete_outline</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="p-3">
                                        <div className="flex align-items-center">
                                            <img className="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="unsplash image" />
                                            <div className="ml-3">
                                                <div className="">Realme</div>
                                                <div className="text-gray-500">mail@rgmail.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        Technology
                                    </td>
                                    <td className="p-3 font-bold">
                                        200.00$
                                    </td>
                                    <td className="p-3">
                                        <span className="bg-red-400 text-gray-50 rounded-md px-2">no stock</span>
                                    </td>
                                    <td className="p-3">
                                        <a href="#" className="text-gray-400 hover:text-gray-100  mr-2">
                                            <i className="material-icons-outlined text-base">visibility</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                                            <i className="material-icons-outlined text-base">edit</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                                            <i className="material-icons-round text-base">delete_outline</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="p-3">
                                        <div className="flex align-items-center">
                                            <img className="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80" alt="unsplash image" />
                                            <div className="ml-3">
                                                <div className="">Samsung</div>
                                                <div className="text-gray-500">mail@rgmail.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        Technology
                                    </td>
                                    <td className="p-3 font-bold">
                                        200.00$
                                    </td>
                                    <td className="p-3">
                                        <span className="bg-yellow-400 text-gray-50  rounded-md px-2">start sale</span>
                                    </td>
                                    <td className="p-3">
                                        <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                            <i className="material-icons-outlined text-base">visibility</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                                            <i className="material-icons-outlined text-base">edit</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                                            <i className="material-icons-round text-base">delete_outline</i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <style>
                        .table {
                            border - spacing: 0 15px;
	}

                        i {
                            font - size: 1rem !important;
	}

                        .table tr {
                            border - radius: 20px;
	}

                        tr td:nth-child(n+5),
                        tr th:nth-child(n+5) {
                            border - radius: 0 .625rem .625rem 0;
	}

                        tr td:nth-child(1),
                        tr th:nth-child(1) {
                            border - radius: .625rem 0 0 .625rem;
	}
                    </style> */}


        </div>
    )
}

