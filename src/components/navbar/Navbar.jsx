import React from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
    {
       id: 1,
       title: "Hotels",
       url: "/"
   },
   {
       id: 2,
       title: "Rooms",
       url: "/rooms"
   },
   {
       id: 3,
       title: "Gallery",
       url: "/gallery"
   },
   {
       id: 4,
       title: "Travel-Stories",
       url: "/travelstories"
   },
   {
       id: 5,
       title: "Contact",
       url: "/contact"
   },
]


const Navbar = () => {
    return(
       <div class="flex justify-between items-center px-10 py-5 bg-[#2f4137] font-sans sticky top-0 z-10">
        <div>
        <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={10}
              class="w-36 h-24"
              priority
            />
        </div>
        <div class="text-[#EEE8AA] flex justify-between items-center text-xl w-2/5">
            {
             links.map(link => (
                <Link key={link.id} href={link.url}>{link.title}</Link>
             ))
            }
        </div>
       </div>
    )
}

export default Navbar;