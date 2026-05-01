import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import HomeItems from "./homeitem";
export default function Slider() {
      return (
            <article className="max-w-full flex flex-col">

                  {/*  Navbar lg=1024px, md = 768px*/}
                  <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-10 py-3 gap-4">
                        <h1 className="text-2xl md:text-3xl font-bold">Shop Now</h1>

                        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                              <Link href="/">Category</Link>
                              <Link href="/">Deal's</Link>
                              <Link href="/">What's New</Link>
                              <Link href="/">Delivery</Link>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                              <input
                                    type="text"
                                    className="w-full sm:w-64 h-8 border rounded-lg px-2"
                                    placeholder="Search Items..."
                              />

                              <div className="flex gap-4">
                                    <span className="flex items-center gap-1 cursor-pointer">
                                          <CiUser size={20} />
                                          Account
                                    </span>
                                    <span className="flex items-center gap-1 cursor-pointer">
                                          <CiShoppingCart size={20} />
                                          Cart
                                    </span>
                              </div>
                        </div>
                  </div>

                  {/*Hero Section */}
                  <div className="w-[95%] mx-auto bg-gray-200 rounded-lg grid grid-cols-1 md:grid-cols-2 items-center p-6 gap-6">

                        <div className="flex flex-col justify-center">
                              <h1 className="text-green-600 font-bold text-lg md:text-2xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              </h1>
                              <button className="mt-4 w-32 h-10 bg-green-900 text-white rounded-xl">
                                    Shop
                              </button>
                        </div>

                        <div className="flex justify-center">
                              <Image
                                    src="/headphones.png"
                                    width={250}
                                    height={150}
                                    alt="Image"
                              />
                        </div>
                  </div>

                  {/*Filters */}
                  <div className="w-[95%] mx-auto mt-5 flex flex-col md:flex-row justify-between gap-4">

                        <div className="flex flex-wrap gap-3">
                              {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="flex items-center bg-gray-200 px-3 py-1 rounded-lg">
                                          <span>HeadPhone</span>
                                          <SlArrowDown size={15} className="ml-1" />
                                    </div>
                              ))}
                        </div>

                        <div className="flex">
                              <div className="flex items-center bg-gray-200 px-3 py-1 rounded-lg">
                                    <span>Filter</span>
                                    <SlArrowDown size={15} className="ml-1" />
                              </div>
                        </div>

                  </div>

                  {/*Products */}
                  <HomeItems />
                
            </article>
      );
}