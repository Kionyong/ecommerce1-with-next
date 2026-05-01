import "@/app/globals.css";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
export default function UserAccount(){
      return(
           <main className="max-w-full flex justify-center items-center p-5">
                  <div className="w-full h-auto flex lg:flex-col bg-mist-100 rounded-lg shadow overflow-auto">  
                  {/*container of pages*/}
                        <div className="flex lg:flex-row w-full md:flex-col items-center justify-between ">
                              <div className="flex flex-col ps-5 md:py-2">
                                    <h1 className="font-normal text-lg ms:text-center">Welcome Kim Dara</h1>
                                    <p className="text-gray-400">Fri 01 2026</p>
                              </div>
                              <div className="flex lg:flex-row md:flex-col justify-between md:mr-5 md:py-3">
                                    <input type="text" name="" className="mr-3 rounded-lg border-blue-200 outline-0 ps-2 border h-8 mt-1 w-80" placeholder="Search..."/>
                                    <div className="w-8 h-8 bg-neutral-300 rounded-lg flex justify-between items-center mr-3 mt-1">
                                          <IoIosNotificationsOutline size={20} className="w-full" />
                                    </div>
                                    <div className="border w-10 h-10 rounded-2xl pr-5">
                                          <Image src={'/'} width={100} height={100} alt="Error" className="md:h-full md:w-48"/>
                                    </div>
                              </div>
                        </div>


                  </div>
           </main>
      );
}