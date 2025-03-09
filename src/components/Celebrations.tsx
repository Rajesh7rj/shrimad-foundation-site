import React from 'react';

const Celebrations: React.FC = () => {
  return (
    <section id="gaam-celebrations" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9E2C9]">
      <h2 className="text-3xl font-bold text-center text-[#631019] mb-12">
        35 Days of Gaam Celebrations
        <br />
        <span className="text-xl text-[#631019]">22nd Feb to 23rd Mar</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-12 mx-auto">
  
        <div className="flex flex-col gap-4">
          <div className="relative rounded-xl overflow-hidden flex-1">
            <img
              alt="Flag Off with Dayro"
              className="w-full h-full object-cover"
              src="https://1342372186.rsc.cdn77.org/srpam/Flag_of_dayro.webp"
            />
            <p className="absolute top-3 left-4 text-[#631019] text-xl font-medium">
              Flag Off with Dayro
            </p>
          </div>
    
          <div className="relative rounded-xl overflow-hidden flex-1">
            <img
              alt="Outreach Programs"
              className="w-full h-full object-cover"
              src="https://1342372186.rsc.cdn77.org/srpam/Outreach_Programs_of_education.png"
            />
            <p className="absolute top-3 left-4 text-lg text-white font-normal">
              Outreach Programs of education, medical and animal care
            </p>
          </div>
        </div>

  
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-b from-[#9e1f22] to-[#631019] rounded-xl overflow-hidden flex-[1.8] md:flex-[1.3] flex flex-col min-h-[100px] sm:min-h-[5px] text-white relative">
            <h3 className="text-center mt-4 text-sm font-bold">
              Raj Katha for Sevarpits by Swadhyaykar
            </h3>
            <img
              alt="Raj Katha"
              className="absolute bottom-0 bg-contain"
              src="https://1342372186.rsc.cdn77.org/srpam/RajKatha_for_Sevarpits.png"
            />
          </div>
    
          <div className="relative rounded-xl overflow-hidden flex-[1] md:flex-[0.6] flex flex-col min-h-[140px] sm:min-h-[5px]">
            <img
              alt="Exam for Students"
              className="w-full object-cover"
              src="https://1342372186.rsc.cdn77.org/srpam/Exam_on.png"
            />
            <p className="absolute top-2 left-5 text-white text-lg font-semibold">
              Exam on
              <br />
              Param Krupalu Dev
              <br />
              for students from
              <br />
              6th to 8th Std.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#e3b055] rounded-xl overflow-hidden flex-[0.4] flex justify-start items-center p-4 relative min-h-[120px] sm:min-h-[5px]">
            <h3 className="text-white text-lg font-bold">
              Dharampur
              <br />
              Got Talent
            </h3>
            <img
              alt="Talent Show"
              className="w-24 md:w-32 h-24 md:h-32 object-contain absolute right-0"
              src="https://1342372186.rsc.cdn77.org/srpam/trophy_winning.png"
            />
          </div>
          <div className="bg-[#e3b055] rounded-xl overflow-hidden flex-[0.9] flex justify-center items-center">
            <p className="text-center p-3 font-semibold text-[#9e1f22]">
              Drama for Dharampur and surrounding
              <br />
              villages
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#9e1f22] to-[#631019] rounded-xl overflow-hidden flex-[0.6] flex justify-center items-center p-6">
            <p className="text-center p-3 font-semibold text-white">
              Discount on Health Checkups for
              <br />
              Dharampur Gaam
              <br />
              people
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebrations;
