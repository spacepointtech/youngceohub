'use client'; // for client side rendering

import Image from 'next/image';

export default function ProblemSection() {
  return (
    <div className="min-h-screen bg-black text-white text-center py-20 px-4 md:px-0 font-hammersmith-one">
      <h2 className="text-5xl font-bold mb-8">THE PROBLEM WE ARE SOLVING</h2>
      <p className="text-xl mb-4">
        While music streaming has been popular these days,
        <br />
        it doesn&apos;t really highlight up and upcoming musicians and indie artists.
      </p>
      <p className="text-3xl font-semibold mb-8">
        No Borders, No Limits:
        <br />
        Distribute your music worldwide
      </p>
      <div className="flex justify-center space-x-6 mb-8 mt-4">
        <div className="w-14 h-14">
          <Image src="/images/apple-music.svg" alt="Apple Music" width={56} height={56} />
        </div>
        <div className="w-14 h-14">
          <Image src="/images/spotify.svg" alt="Spotify" width={56} height={56} />
        </div>
        <div className="w-14 h-14">
          <Image src="/images/music.svg" alt="Music" width={56} height={56} />
        </div>
        <div className="w-14 h-14">
          <Image src="/images/shazam.svg" alt="Shazam" width={56} height={56} />
        </div>
        <div className="w-14 h-14">
          <Image src="/images/instagram.svg" alt="Instagram" width={56} height={56} />
        </div>
        <div className="w-14 h-14">
          <Image src="/images/youtube.svg" alt="YouTube" width={56} height={56} />
        </div>
      </div>
      <p className="italic mb-8 mt-4 text-opacity-50">MANY MORE</p>
      <button className="bg-gray-600 text-white px-8 py-5 text-lg rounded">Distribute Your Music Worldwide</button>
    </div>
  );
}
