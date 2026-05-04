import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
export default function UserAccount() {
      return (
            <main className="max-w-full flex flex-col justify-center items-center p-5">
                  <div className="w-full h-auto flex lg:flex-col bg-mist-100 rounded-lg shadow overflow-auto">
                        {/*container of pages*/}
                        <div className="flex lg:flex-row flex-col w-full md:h-auto items-center justify-between ">
                              <div className="flex lg:flex-col flex-col justify-center items-start ps-5 py-2">
                                    <h1 className="font-normal text-lg">Welcome Kim Dara</h1>
                                    <p className="text-gray-400">Fri 01 2026</p>
                              </div>
                              <div className="flex lg:flex-row flex-col justify-between items-center mr-5">
                                    <input type="text" name="" 
                                          className="mr-3 rounded-lg border-blue-200 outline-0 border ms-8 h-8 sm:w-90 w-60 md:w-100 ps-2 mt-2" 
                                          placeholder="Search..." />
                                    <div className="flex lg:flex-row m-1">
                                          <div className="w-8 h-8 bg-neutral-300 rounded-lg flex justify-between items-center mr-3 mt-1">
                                                <IoIosNotificationsOutline size={20} className="w-full" />
                                          </div>
                                          <div className="border w-10 h-10 rounded-2xl pr-5 flex items-center">
                                                <Image src={'/Profile.png'} width={100} height={100} alt="Error" className="ms-2" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="bg-mist-100 mt-3 lg:h-auto w-full rounded-lg m-5">
                        <div className="w-full h-auto p-5 flex flex-row justify-between"> 
                              <div className="w-10 h-10 rounded-2xl border">

                              </div>
                              <Link href={'/'}>
                                    <button type="button" className="w-15 rounded-lg cursor-pointer h-8 bg-blue-500">
                                          Edit
                                    </button>
                              </Link>
                        </div>
                        <form action="" className="w-1/2 p-5">
                              <div className="flex lg:flex-row justify-between flex-col">
                                    <div className="lg:w-auto ms-5">
                                          <label htmlFor="" className="text-indigo-700">First Name*</label>
                                          <input type="text" name="" className="border sm:w-100 w-60 h-9 outline-0 rounded-lg ps-2"placeholder="Frist Name" />
                                    </div>
                                    <div className="w-auto ms-5">
                                          <label htmlFor="" className="text-indigo-700">First Name*</label>
                                          <input type="text" name="" className="border sm:w-100 w-60 h-9 outline-0 rounded-lg ps-2" placeholder="Frist Name" />
                                    </div>
                              </div>
                              <div className="flex lg:flex-row justify-between flex-col">
                                    <div className="lg:w-auto ms-5">
                                          <label htmlFor="" className="text-indigo-700">First Name*</label>
                                          <input type="text" name="" className="border sm:w-100 w-60 h-9 outline-0 rounded-lg ps-2" placeholder="Frist Name" />
                                    </div>
                                    <div className="w-auto ms-5">
                                          <label htmlFor="" className="text-indigo-700">First Name*</label>
                                          <input type="text" name="" className="border sm:w-100 w-60 h-9 outline-0 rounded-lg ps-2" placeholder="Frist Name" />
                                    </div>
                              </div>
                              <div className="flex lg:flex-row justify-between flex-col">
                                    <div className="lg:w-auto ms-5">
                                          <label htmlFor="" className="text-indigo-700">First Name*</label>
                                          <input type="text" name="" className="border sm:w-100 w-60 h-9 outline-0 rounded-lg ps-2" placeholder="Frist Name" />
                                    </div>
                                    <div className="w-auto ms-5">
                                          <label htmlFor="" className="text-indigo-700">First Name*</label>
                                          <input type="text" name="" className="border sm:w-100 w-60 h-9 outline-0 rounded-lg ps-2" placeholder="Frist Name" />
                                    </div>
                              </div>
                        </form>
                        <div className="ms-5 flex flex-col p-5">
                              <h1 className="text-[20px] font-bold">My email Address</h1>
                              <p className="text-blue-600">kimdara@gmail.com</p>
                        </div>
                        <Link href={'/f'} className="mt-10 ms-5">
                              <button type="button" className="cursor-pointer bg-blue-400 rounded-lg h-10 w-30">+ Add email</button>
                        </Link>
                        <div className="mt-10 mb-2 ms-5 bg-red-500 w-30 h-10 flex justify-center items-center rounded-lg cursor-pointer">
                              <span className="flex flex-row items-center">
                                    <CiLogout color="white" />
                                    <Link href={'/'} className="text-white">Logout</Link>
                              </span>
                        </div>
                  </div>
            </main>
      );
}