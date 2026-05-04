'use client';
import "@/app/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
export default function HomeItems() {
      const [shop,setShop] = useState<any[]>([]);  
      const getShop = async () => {
            try {
                  const res = await fetch('/api/shop');

                  if (!res.ok) {
                        throw new Error("API Error");
                  }
                  const data = await res.json();
                  setShop(data);
            } catch (error) {
                  console.error("Fetch error:", error);
            }
      };
      useEffect(()=>{
            getShop();
      },[]);
      return (
            <main className="min-w-11/12 mx-auto h-max mt-5 flex flex-col">
                  <div className="w-full h-20">
                        <h1 className="text-[40px] font-bold">Items...</h1>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                              shop.map((items:any,index:any)=>(
                                    <div className="h-80 rounded-lg border-blue-200 border" key={index}>
                                          <div className="flex justify-center items-center h-50">
                                                <Image src={`data:images/jpeg;png;jpng;base64,${items.images}`} width={200} height={200} alt={items.titles} />
                                          </div>
                                          <div className="row-span-2 flex flex-row ps-5 overflow-hidden">
                                                <CiStar size={15} color="red" />
                                                <CiStar size={15} />
                                                <CiStar size={15} />
                                                <CiStar size={15} />
                                                <CiStar size={15} />
                                          </div>
                                          <div className="flex flex-col m-5">
                                                <h1 className="text-black">{items.titles}</h1>
                                                <p className="">{items.prices}</p>
                                                <button type="button" className="border border-blue-400 h-7 rounded-lg">Add Cart</button>
                                          </div>
                                    </div>
                              ))
                        }

                  </div>
            </main>
      );
}