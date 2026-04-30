import "@/app/globals.css";
import { FaPhone } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
export default function Header(){
      return(
            <header className="max-w-ful h-10 flex flex-col">
                 <div className="w-full bg-emerald-700 flex flex-row justify-between ">
                        <div className="flex flex-row ps-20">
                              <FaPhone className="mt-1 text-blue-50 font-mono" />
                              <p className="text-blue-50">+8859634521</p>
                        </div>
                        <div className="flex flex-row">
                              <p className="text-blue-50">Get 50% off on seleted Items |</p>
                              <p className="text-blue-50 ps-2 font-semibold text-[15px]">Show Now</p>
                        </div>
                        <div className="flex flex-row pr-20">
                              <div className="flex flex-row">
                                    <div className="relative ps-5 group">
                                          <span className="flex flex-row text-blue-50">
                                                Eng
                                                <SlArrowDown size={13} className="text-blue-50 mt-1.5 ms-1 w-3 cursor-pointer" />
                                          </span>
                                          <div className="text-blue-50 mt-1.5 ms-1 w-20 cursor-pointer dropdown-menu flex flex-col gap-1 absolute top-full right-0 bg-white overflow-hidden shadow-sm rounded-lg invisible transition opacity-0 group-hover:opacity-100 visible">
                                                <ul>
                                                      <li className="text-black p-1 hover:text-blue-500 hover:border-b-1">Khmer</li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                              <div className="relative ps-5 group">
                                    <span className="flex flex-row text-blue-50">
                                          Locations
                                          <SlArrowDown size={13} className="text-blue-50 mt-1.5 ms-1 w-3 cursor-pointer"/>
                                    </span>
                                    <div className="text-blue-50 mt-1.5 ms-1 w-20 cursor-pointer dropdown-menu flex flex-col gap-1 absolute top-full right-0 bg-white overflow-hidden shadow-sm rounded-lg invisible transition opacity-0 group-hover:opacity-100 visible">
                                          <ul>
                                                <li className="text-black p-1 hover:text-blue-500 hover:border-b-1">Home</li>
                                                <li className="text-black p-1 hover:text-blue-500 hover:border-b-1">Test</li>
                                                <li className="text-black p-1 hover:text-blue-500 hover:border-b-1">Data</li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                 </div>
            </header>
      );
}