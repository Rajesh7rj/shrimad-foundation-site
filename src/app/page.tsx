"use client"
import React from 'react';
import Banners from "@/components/Banners"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import RegisterNow from "@/components/RegisterNow"
import Schedule from "@/components/Schedule"
import ReserveStay from '@/components/ReserveStay'
import Celebrations from "@/components/Celebrations"


export default function App() {
  return (
    <div>
      <Header />
      <Banners/>
      <RegisterNow 
         title="Let’s Rejoice The Arrival Of Unprecedented Grace In Our Lives!"
         description="125 years ago, Param Krupalu Dev Shrimad Rajchandraji blessed the sacred land of Dharampur with His divine presence, forever sanctifying it."
         ctaText="Register Now"
      />
      <Schedule />
      <Celebrations/>
      <ReserveStay
        heading="Reserve Your Stay"
        description="We warmly invite everyone to be part of this historic event. Family rooms will be available for stay till 26th Mar. To maximize accommodation for mumukshus, only shared rooms and hall dormitory options will be available from 27th Mar onwards. Apply now by clicking below."
        buttonLabel="Reserve Your Stay"
        buttonLink="https://hg.myhotelline.com/book.html?propertyId=SHR-HNV7-SION"
      />
      <Footer />
    </div>
  );
}


