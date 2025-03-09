'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const scheduleData : any = {
  'Day 01': [
    { time: '10:00 am - 11:30 am', title: 'Satsang', description: 'Start your day with peace and mindfulness.' },
    { time: '8:00 pm - 9:30 pm', title: '125 Samuhik Pratishtha in Ashram', description: 'Start your day with peace and mindfulness.' },
    { time: '10:00 am - 11:30 am', title: 'Satsang', description: 'Start your day with peace and mindfulness.' },
    { time: '4:00 pm - 5:30 pm', title: 'Satsang', description: 'Start your day with peace and mindfulness.' },
    { time: '8:00 pm - 9:30 pm', title: 'Kaun Kehte hai Bhagwan aate nahi with Kankotri Lekhan', description: 'Start your day with peace and mindfulness.' },
  ],
  'Day 02': [
    { time: '10:00 am - 11:30 am', title: 'Yoga & Meditation', description: '• Start your day with peace and mindfulness.' },
    { time: '4:00 pm - 5:30 pm', title: 'Community Service', description: '• Helping those in need in the community.' },
  ],
  'Day 03': [
    { time: '9:00 am - 10:30 am', title: 'Spiritual Talk', description: '• Explore the depths of spirituality with a local leader.' },
    { time: '7:00 pm - 8:30 pm', title: 'Dance Performance', description: '• Experience traditional dance performances.' },
  ],
  'Day 04': [
    { time: '11:00 am - 12:30 pm', title: 'Health & Wellness Workshop', description: '• Learn holistic approaches to mental and physical health.' },
    { time: '5:00 pm - 6:30 pm', title: 'Cooking Class', description: '• Discover healthy recipes and cooking techniques.' },
    { time: '8:00 pm - 9:30 pm', title: 'Drama Night', description: '• Enjoy a local drama show by the community.' },
  ],
  'Day 05': [
    { time: '10:00 am - 11:30 am', title: 'Satsang', description: '' },
    { time: '3:00 pm - 4:30 pm', title: 'Local Art Exhibition', description: '• Celebrate the creativity of local artists.' },
  ],
  'Day 06': [
    { time: '1:00 pm - 2:30 pm', title: 'Cooking Contest', description: '• Watch the community compete in a culinary contest.' },
    { time: '7:00 pm - 8:30 pm', title: 'Movie Screening', description: '• A film screening for all age groups.' },
  ],
  'Day 07': [
    { time: '9:00 am - 10:30 am', title: 'Group Meditation', description: '• Join us for a peaceful group meditation session.' },
    { time: '4:00 pm - 5:30 pm', title: 'Farewell Party', description: '• Join us for a final celebration and farewell.' },
    { time: '7:00 pm - 9:00 pm', title: 'Closing Ceremony', description: '• Wrapping up the week with gratitude and joy.' },
  ],
};


export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Day 01');

  return (
    <div className='bg-[#FFFFFF]'>
      <div id="schedule" className="container mx-auto min-h-screen bg-[#FFFFFF] text-white p-8">
        <h2 className="text-3xl font-bold mb-6 text-[#9E1F22] text-center">Schedule</h2>
        
        <div className='flex flex-col sm:flex-row justify-between mb-6'>
          <div className="flex flex-col text-lg mb-6 sm:mb-0]">
            {Object.keys(scheduleData).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`transition-all duration-300 font-semibold text-left ${selectedDay === day ? 'text-[#9E1F22]' : 'text-[#ef7e81]'}`}
              >
                {day}
              </button>
            ))}
          </div>

      <motion.div
      key={selectedDay}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full sm:w-3/4 mx-auto"
    >
      {scheduleData[selectedDay].map((event:any, index:any) => (
        <motion.div
          key={index}
          className="bg-[#9E1F22] rounded-xl mb-6 shadow-md flex flex-col sm:flex-row items-center sm:items-start"
          transition={{ duration: 0.3 }}
        >
          <div className="w-full sm:w-3/4 p-6">
            <p
              className="text-[#e3b055] text-sm sm:text-lg mb-2"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              {event.time}
            </p>
            <h3
              className="text-white text-xl font-bold mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {event.title}
            </h3>
            <p
              className="text-white text-sm sm:text-lg opacity-90"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {event.description}
            </p>
          </div>
       
          <div className="w-full sm:w-2/5 lg:w-1/3 h-64 sm:h-auto">
        <img
          alt="Shobhayatra_New_047ccb957d"
          className="w-full h-full object-cover rounded-tr-xl rounded-br-xl"
          src="https://d20iun51fib1lt.cloudfront.net/Shobhayatra_New_047ccb957d.jpg"
        />
        </div>
        </motion.div>
      ))}
    </motion.div>

        </div>
      </div>
    </div>
  );
}


