'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown, FaPlus, FaMinus, FaArrowLeft, FaAngleLeft, FaUpload } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function CreateRelease() {
  const [contributors, setContributors] = useState([]);
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [trackFile, setTrackFile] = useState(null);
  const [catalogFile, setCatalogFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  const handleAddContributor = () => {
    if (role && name) {
      setContributors([...contributors, { role, name }]);
      setRole('');
      setName('');
    }
  };

  const handleRemoveContributor = (index) => {
    const newContributors = contributors.filter((_, i) => i !== index);
    setContributors(newContributors);
  };

  const handleFileUpload = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex h-screen bg-black font-poppins overflow-auto">
      {/* Sidebar */}
      <div className="sidebar bg-white h-full w-80 text-black flex flex-col justify-between p-4 rounded-r-3xl">
        <div>
          {/* Profile Section */}
          <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Image
                src="/images/avtaar.png"
                height={50}
                width={50}
                alt="Profile"
              />
              <div className="ml-4 w-full">
                <div className="flex justify-between items-center">
                  <div className="w-3/4 bg-gray-400 rounded-full h-1 mt-2">
                    <div className="bg-white h-1 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-xs text-gray-600 ml-2">20%</span>
                </div>
                <Link href="/login/dashboard/question1">
                  <p className="text-xs mt-2 py-1 text-center border border-white rounded-lg text-white leading-none" style={{ fontSize: '10px' }}>
                    Complete your profile
                  </p>
                </Link>
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
              <li className="p-2 rounded-r-lg flex justify-normal items-center">
                <FaMusic className="mr-3 justify-end" /> Music
              </li>
              <li className="p-2 rounded-r-lg flex justify-normal items-center">
                <FaUsers className="mr-3" /> Audience
              </li>
              <li className="p-2 rounded-r-lg flex justify-normal items-center">
                <FaTshirt className="mr-3" /> Merch
              </li>
              <li className="p-2 rounded-r-lg flex justify-normal items-center">
                <FaVideo className="mr-3" /> Video & Visuals
              </li>
              <li className="p-2 rounded-r-lg flex justify-normal items-center">
                <FaCog className="mr-3" /> Settings
              </li>
            </ul>
          </nav>
        </div>

        {/* Logout */}
        <div className="mb-4">
          <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header */}
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full">
          <div className="relative">
            <FaBell className="text-gray-400 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-2 h-2"></span>
          </div>
          <Link href="/profile">
            <Image
              src="/images/avtaar.png"
              className="w-10 h-10 rounded-full"
              height={20}
              width={20}
              alt="Profile"
            />
          </Link>
        </header>

        {/* Main Body */}
        <div className="w-full max-w-3xl p-8">
          {/* Essential Details text */}
          <h3 className="text-white text-2xl text-left mb-6">Essential Details for Your Next Big Release</h3>

          {/* Key Details container box */}
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg relative">
            {/* Back Button */}
            <FaAngleLeft
              className="absolute top-4 left-4 cursor-pointer text-white"
              onClick={() => window.history.back()}
            />
            <p className="text-white text-xl text-center mb-4 mt-2">Genre & Credits Details</p>
            {/* Progress Bar */}
            <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
              <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>

            <div className="relative z-10 w-full">
              {/* Add Tracks from Computer */}
              <div className="space-y-4 mb-8">
                <label className="text-white block mb-2 mt-3">Add Tracks from Computer</label>
                <div className="flex space-x-4">
                  <button className="w-1/2 p-3 flex items-center justify-center bg-[#CDCDCD] text-black rounded">
                    From Computer
                  </button>
                  <button className="w-1/2 p-3 flex items-center justify-center border border-white border-dashed text-white rounded">
                    <FaUpload className="mr-2" /> Upload
                  </button>
                </div>
              </div>

              {/* Add from Catalog */}
              <div className="space-y-4 mb-8">
                <label className="text-white block mb-2">Add from Catalog</label>
                <div className="flex space-x-4">
                  <button className="w-1/2 p-3 flex items-center justify-center bg-[#CDCDCD] text-black rounded">
                    From Catalog
                  </button>
                  <button className="w-1/2 p-3 flex items-center justify-center border border-white border-dashed text-white rounded">
                    <FaUpload className="mr-2" /> Upload
                  </button>
                </div>
              </div>

              {/* Upload Cover Photo */}
              <div className="flex space-x-6">
                <div className="w-1/2">
                  <label className="text-white block mb-2">Upload Cover Photo</label>
                  <button className="w-full p-3 flex items-center justify-center border border-white border-dashed text-white rounded h-44">
                    <FaUpload className="mr-2" /> Upload Cover Photo
                  </button>
                  <label className="cursor-pointer mt-2 inline-block text-sm text-white">
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, setCoverFile)}
                    />
                    Choose Cover File
                  </label>
                </div>

                <div className="w-1/2 text-xs text-gray-400 opacity-70 mt-20">
                  <p>Ensure you own the rights to all artwork elements. Information must match release metadata. Stores reject blurry, low-quality images or those with URLs, contact info, barcodes, prices, or logos. No explicit content. Non-compliant artwork will be rejected.</p>
                </div>
              </div>

              {/* Submit and Cancel Buttons */}
              <div className="mt-6 flex justify-center items-center">
                <Link href='/login/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                </Link>
                <Link href='/login/dashboard/rel-quest1'>
                  <button className="bg-white text-black py-2 px-4 rounded">Next</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
