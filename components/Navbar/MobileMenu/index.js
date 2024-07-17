"use client"
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'


export function MobileMenu({menuItems,selectedItem,setSelectedItem,setActive}) {
  useEffect(()=> {
    Aos.init()
  },[])
    return (
      <nav data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="400"
       className="border-gray-200 bg-gray-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className=" w-full" >
      <ul className="flex flex-col space-y-2 font-medium mt-4 rounded-lg bg-gray-50 ">
        {
          menuItems.map((item,index)=> (
            <li key={index} onClick={() => {
              // Seçili öğeyi güncelle ve menüyü kapat
              setSelectedItem(item.name);
              setActive(false);
            }}>
            <Link href={item.linkPath} className={`${selectedItem === item.name ?"bg-blueEye  text-white" : "bg-grayBg text-grayHead"} block py-2 px-3 text-center font-bold font-libre-bodoni  rounded`} aria-current="page">{item.name}</Link>
        </li>
          ))
        }
       
      </ul>
    </div>
    </div>
      </nav>
    );
  }