'use client';
import '@/app/style.css'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaBook } from 'react-icons/fa';

const PublishingSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="support-page bg-black text-white font-poppins">
      
      {/* Hero Section with Wave */}
      <div className="hero-section relative">
        <div className="container mx-auto text-center pt-24">
          <h1 className="text-4xl font-semibold mb-8 text-left ml-5">How Can we help?</h1>

          {/* Search Bar */}
          <div className="relative search-container mx-auto mb-12">
            <input
              type="text"
              placeholder="Search for articles..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input placeholder-opacity-30 text-white pl-12 py-3 border border-white rounded-lg w-full focus:outline-none"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white search-icon" />
          </div>
        </div>

        {/* Wave Shape */}
        <div className="wave-shape"></div>
      </div>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-4">
        <a href="/support" className="back-link text-white text-lg opacity-50">
          &lt; Back
        </a>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
        <div className={`faq-header flex items-center justify-between mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>
          <div className="flex flex-col">
            <FaBook className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Music Publishing</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>The ins and outs of Music Publishing</p>
        <p className={`text-sm opacity-50 mb-12 ${openIndex !== null ? 'blur-md' : ''}`}>{filteredFaqItems.length} Articles</p>

        
        <div className="faq-container bg-[#484848] bg-opacity-[24%] border border-[#A6A6A6] rounded-lg p-6">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <div key={index} className={`faq-item flex flex-col py-4 border-b border-gray-700 ${openIndex !== null && openIndex !== index ? 'blur-md' : ''}`}>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(index)}>
                    <p>{item.question}</p>
                    {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  {openIndex === index && (
                    <div className="answer-box bg-[#484848] bg-opacity-[50%] border border-[#A6A6A6] rounded-lg p-4 mt-4">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const faqItems = [
  {
    question: 'How do I sign up for Young Ceo Entertainment Music Publishing?',
    answer: 'To sign up for Young Ceo Entertainment Music Publishing, visit our website and go to the Music Publishing section. Follow the registration instructions to create an account, choose your publishing plan, and provide the necessary details about your music. If you need assistance, our support team is available to help you through the process.'
  },
  {
    question: 'Do I need a Ditto Music subscription to access Young Ceo Entertainment Music Publishing?',
    answer: (
      <>
        Yes. You&apos;ll need a Independent Label subscription to access YCE Publishing. 
        <br />
        <br />
        We can only collect and pay publishing royalties for music released through Young Ceo Entertainment.
      </>
    ),
  },
  {
    question: 'What is music publishing?',
    answer: 'Music publishing involves managing the rights and revenues associated with musical compositions. This includes collecting royalties from performances, broadcasts, and other uses of the music. It ensures that songwriters and composers receive compensation for their work. Young Ceo Entertainment offers music publishing services to help you maximize the revenue from your compositions.'
  },
  {
    question: 'Will YCE collect Neighbouring Rights royalties?',
    answer: 'Yes, Young Ceo Entertainment collects Neighbouring Rights royalties on your behalf. Neighbouring Rights royalties are earned from the public performance and broadcast of sound recordings. We handle the collection and distribution of these royalties to ensure you receive your share.'
  },
  {
    question: 'I am the songwriter - how do I register my songs with YCE publishing?',
    answer: 'To register your songs with Young Ceo Entertainment Music Publishing, log in to your account and navigate to the Music Publishing section. Follow the steps to submit your song details, including the title, writer credits, and other relevant information. This will allow us to register your songs with the appropriate rights organizations and start managing your publishing rights.'
  },
  {
    question: 'How do I obtain an IPI/CAE Number?',
    answer: 'An IPI (Interested Party Information) or CAE (Composer, Author, and Publisher) Number is essential for managing your royalties and rights. To obtain one, you need to register with a performance rights organization (PRO) or a music rights organization in your country. Once registered, you will receive an IPI/CAE Number that helps track and collect your royalties.'
  }
];


export default PublishingSupport;
