"use client"
import Breadcrumb from '@/components/Breadcrumb';
import CustomModal from '@/components/CustomModal';
import { useState } from "react";
import Link from 'next/link';
import properties from '@/jsonFiles/properties.json';


export default function Page() {
    const [openModal, setOpenModal] = useState(false);

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
        { label: 'Properties', href: null }, // Current page, no icon
    ];

    return (

        <div className="">
            <div className="flex items-start justify-center min-h-screen bg-gray-900 pt-20">
                <div className="col-span-12 md:w-[70%]">

                    <div className="flex flex-col gap-5 max-w-full " >
                        <Breadcrumb crumbs={crumbs} />
                        <div className=" flex justify-between flex-wrap gap-x-5 gap-y-2 items-center mb-10">
                            <h3 className=" font-semibold grow text-2xl text-gray-200">Properties</h3>
                            <div className="flex flex-wrap gap-2 items-center space-x-5">
                                <button onClick={() => setOpenModal(true)}
                                    className=" bg-orange-500 hover:bg-orange-600 border-2 border-orange-500  grow min-w-[10rem] text-center text-white rounded-lg px-5 py-2.5 transition duration-300 ease-in-out flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                    <span className="capitalize">Add New Property</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
                                    <th className="p-3 text-left capitalize">ID</th>
                                    <th className="p-3 text-left capitalize">location</th>
                                    <th className="p-3 text-left capitalize">type</th>
                                    <th className="p-3 text-left capitalize">purchase price</th>
                                    <th className="p-3 text-left capitalize">current value</th>
                                    <th className="p-3 text-left capitalize">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map((property) => (
                                    // <CustomCard
                                    //     key={property.id}
                                    //     image={property.image}
                                    //     title={property.name}
                                    //     price={`$${property.currentPrice.toLocaleString()}`}
                                    // />
                                <tr key={property.id}className="bg-gray-800">

                                    <td className="p-3 font-bold">
                                        #{property.id}
                                    </td>
                                    <td className="p-3">
                                    {property.location}
                                    </td>
                                    <td className="p-3">
                                    {property.type}
                                    </td>
                                    <td className="p-3">
                                    {`$${property.price.toLocaleString()}`}
                                    </td>
                                    <td className="p-3">
                                    {`$${property.currentPrice.toLocaleString()}`}
                                    </td>
                                    <td className="p-3 ">
                                        <Link href={`/property/${property.slug}`} className="text-gray-400 hover:text-gray-100 mr-2">
                                            <i className="material-icons-outlined text-base">View</i>
                                        </Link>
                                        <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                                            <i className="material-icons-outlined text-base">edit</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                                            <i className="material-icons-round text-base">delete_outline</i>
                                        </a>
                                    </td>
                                </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <CustomModal openModal={openModal} setOpenModal={setOpenModal}>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                    companies around the world are updating their terms of service agreements to comply.
                </p>
            </CustomModal>

        </div>
    )
}

