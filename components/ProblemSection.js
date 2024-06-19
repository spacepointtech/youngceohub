// components/ProblemSection.js
export default function ProblemSection() {
  return (
    <div className="min-h-screen bg-black text-white text-center py-20 px-4 md:px-0">
      <h2 className="text-4xl font-bold mb-4">THE PROBLEM WE ARE SOLVING</h2>
      <p className="text-xl mb-6">
        While music streaming has been really popular these days, it doesn’t really highlight up and upcoming musicians and indie artists.
      </p>
      <p className="text-3xl font-semibold mb-8">"No Borders, No Limits: Distribute your music worldwide"</p>
      <div className="flex justify-center space-x-6 mb-8">
        <img src="/images/apple-music.svg" alt="Apple Music" className="w-14 h-14" />
        <img src="/images/spotify.svg" alt="Spotify" className="w-14 h-14" />
        <img src="/images/music.svg" alt="Music" className="w-14 h-14" />
        <img src="/images/shazam.svg" alt="Shazam" className="w-14 h-14" />
        <img src="/images/instagram.svg" alt="Instagram" className="w-14 h-14" />
        <img src="/images/youtube.svg" alt="YouTube" className="w-14 h-14" />
      </div>
      <p className="italic mb-6">MANY MORE</p>
      <button className="bg-gray-600 text-white px-6 py-3 rounded">Distribute Your Music Worldwide</button>
    </div>
  );
}
