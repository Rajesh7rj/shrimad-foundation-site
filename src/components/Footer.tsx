"use client"
import { currentYear } from "@/utils/utils"
import React from 'react'

export default function Footer() {
  return (
    <div className="bg-[#FFF6E6]">
    <div className="flex flex-col items-center justify-center bg-[#FFF6E6] py-20 mx-2">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-[#A10C22]">
      Let’s Rejoice The Arrival Of <br /> Unprecedented Grace In Our Lives!
    </h2>
    <button className="mt-6 bg-[#A10C22] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#8B0A1E] transition"
    onClick={() => window.open("https://register.srmd.org/events/SSV2501", "_blank")}
    >
      Register Now
    </button>
  </div>
    <div className='bg-red h-16 flex justify-center items-center bg-[#631019] text-[#fff8e6]'>
        © {`${currentYear()}`} events.srmd.org All rights reserved.
    </div>
    </div>
  )
}
