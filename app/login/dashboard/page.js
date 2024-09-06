
// test code
'use client';
import React from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBolt, FaBell, FaArrowRight, FaYoutube, FaSpotify, FaInstagram, FaApple } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Sample Data for Stream Chart
  const data = {
    labels: ['May 7', 'May 14', 'May 21', 'May 28'],
    datasets: [
      {
        label: 'Streams',
        data: [1000, 2000, 3500, 2500],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex h-screen bg-black font-poppins overflow-hidden">
       {/* Sidebar */}
       <div className="sidebar bg-white h-screen w-64 text-black flex flex-col justify-between p-4 rounded-r-3xl">
        <div>
          {/* Profile Section */}
          <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Image
                src="/images/avtaar.png"
                height={50}
                width={50}
              />
              <div className="ml-4">
                <div className="w-full bg-gray-400 rounded-full h-1 mt-2">
                  <div className="bg-green-400 h-1 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-semibold">Aman</p>
                  <span className="text-xs text-gray-600">20%</span>
                </div>
                <p className="text-xs mt-2 p-2 text-center border border-white rounded-lg text-white">Complete your profile</p>
              </div>
            </div>
          </div>
          
          {/* Logo */}
          <div className="logo mb-4 flex justify-center">
              <Image src="/images/blacklogo.png" alt="Young CEO Entertainment" height={400} width={400} />
          </div>
          
           {/* Menu */}
           <nav className="mt-4">
            <ul className="space-y-4 text-center">
              <li className="hover:bg-black hover:rounded-l-[40%] p-2 rounded-r-lg flex justify-normal items-center">
                <FaMusic className="mr-3" /> Music
              </li>
              <li className="hover:bg-black hover:rounded-l-[40%] p-2 rounded-r-lg flex justify-normal items-center">
                <FaUsers className="mr-3" /> Audience
              </li>
              <li className="hover:bg-black hover:rounded-l-[40%] p-2 rounded-r-lg flex justify-normal items-center">
                <FaTshirt className="mr-3" /> Merch
              </li>
              <li className="hover:bg-black hover:rounded-l-[40%] p-2 rounded-r-lg flex justify-normal items-center">
                <FaVideo className="mr-3" /> Video & Visuals
              </li>
              <li className="hover:bg-black hover:rounded-l-[40%] p-2 rounded-r-lg flex justify-normal items-center">
                <FaCog className="mr-3" /> Settings
              </li>
            </ul>
          </nav>
          </div>
      
      {/* Logout and Upgrade */}
      <div>
          <div className="mb-4">
            <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
      </div>
     </div>
      {/* Main Content */}
      <div className="w-full">
        {/* Header */}
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white">
          <div className="relative">
            <FaBell className="text-gray-400 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-2 h-2"></span>
          </div>
          <a href="/profile">
            <Image
              src="/images/avtaar.png"
              className="w-10 h-10 rounded-full"
              height={20}
              width={20}
            />
          </a>
        </header>

        {/* Main Dashboard Content */}
        <div className="main-dashboard bg-black text-white p-8 h-full">
          {/* Recent Releases Section */}
          <div className="bg-[#191919] rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Releases</h2>
            <p className="text-gray-500">No recent releases available</p>
          </div>

          {/* Release CTA */}
          <div className="bg-[#CDCDCD] rounded-xl p-6 mb-8 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-black">Release today!</h3>
              <p className="text-gray-400">Submit your release today and join the multitude of artists already using Young CEO Entertainment.</p>
            </div>
            <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center">
              Create New Release <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Streams and Analytics */}
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 bg-[#191919] rounded-lg p-6 relative h-64">
              <h3 className="text-lg font-semibold mb-4">Streams</h3>
              <div className="absolute top-4 right-4 flex space-x-2">
                <FaYoutube className="text-red-500" />
                <FaSpotify className="text-green-500" />
                <FaInstagram className="text-pink-500" />
                <FaApple className="text-gray-500" />
                <FaArrowRight className="text-white" />
              </div>
              <Line data={data} options={options} />
            </div>
            <div className="bg-[#191919] rounded-lg p-6 h-64">
              <h3 className="text-lg font-semibold mb-4">Analytic platform</h3>
              <div className="w-20 h-20 mx-auto mb-4">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle"
                    strokeDasharray="80, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                </svg>
              </div>
                <p>Your Analytics Will be applied Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
