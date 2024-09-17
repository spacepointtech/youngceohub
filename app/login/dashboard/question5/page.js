'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import '@/app/style.css';

export default function Dashboard() {
  const [instagramLink, setInstagramLink] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');

  return (
    <div className="flex h-screen bg-black font-poppins overflow-hidden">
      {/* Sidebar */}
      <div className="sidebar bg-white h-screen w-64 text-black flex flex-col justify-between p-4 rounded-r-3xl">
        <div>
          {/* Profile Section */}
          <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Image src="/images/avtaar.png" height={50} width={50} />
              <div className="ml-4">
                <div className="w-full bg-gray-400 rounded-full h-1 mt-2">
                  <div className="bg-red-800 h-1 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-semibold">Aman</p>
                  <span className="text-xs text-gray-600">20%</span>
                </div>
                <p className="text-xs mt-2 p-2 text-center border border-white rounded-lg text-white">
                  Complete your profile
                </p>
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

        {/* Logout */}
        <div>
          <div className="mb-4">
            <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/background.png')" }}></div>

        {/* New Content Section */}
        <div className="bg-black bg-opacity-40 backdrop-blur-lg text-white w-[50%] p-8 rounded-lg shadow-lg mt-12 z-10 relative">
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <Image src="/images/social.svg" alt="Illustration" height={300} width={300} />
          </div>

          {/* Social Media Handles */}
          <div className="mt-4">
            <p className="text-center mb-2 font-bold text-xl">Social Media Presence</p>
           

            <div className="mt-4">
              <div className="relative mb-4 flex items-center">
                <FaInstagram className="absolute left-3 text-white" />
                <input
                  type="text"
                  placeholder="Instagram Handle"
                  className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
              </div>

              <div className="relative mb-4 flex items-center">
                <FaFacebook className="absolute left-3 text-white" />
                <input
                  type="text"
                  placeholder="Facebook Link"
                  className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
                  value={facebookLink}
                  onChange={(e) => setFacebookLink(e.target.value)}
                />
              </div>

              <div className="relative mb-4 flex items-center">
                <FaTwitter className="absolute left-3 text-white" />
                <input
                  type="text"
                  placeholder="Twitter Handle"
                  className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
                  value={twitterLink}
                  onChange={(e) => setTwitterLink(e.target.value)}
                />
              </div>
            </div>

            <button className="bg-white text-black w-full py-2 mt-6 rounded-lg font-semibold">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
