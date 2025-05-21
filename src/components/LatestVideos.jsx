// components/LatestVideos.jsx
import { useState } from 'react';
import { Clock, ThumbsUp, Search } from 'lucide-react';
import thunm from "../assets/img/thum.jpg"
import FeaturedImages from './FeaturedImages';

const videos = [
  { id: 1, title: "Advanced Portrait Retouching Tutorial", duration: "15:24", likes: 12400, views: "125,000", img: thunm, premium: false, progress: 80 },
  { id: 2, title: "AI Style Transfer Masterclass", duration: "23:15", likes: 9500, views: "89,000", img: thunm, premium: true, progress: 40 },
  { id: 3, title: "Professional Lighting Techniques", duration: "18:45", likes: 18900, views: "256,000", img: thunm, premium: true, progress: 60 },
  { id: 4, title: "Ultimate Guide to AI Face Enhancement", duration: "12:38", likes: 15600, views: "178,000", img: thunm, premium: false, progress: 20 },
];

export default function LatestVideos() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-[#0d1117] text-white font-sans py-12 px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <div className="flex items-center gap-4 flex-wrap">
          <button onClick={() => setFilter("all")} className={`px-5 py-2 rounded-xl font-medium ${filter === 'all' ? 'bg-brand text-white' : 'bg-[#1f2937] text-white'}`}>
            All Content
          </button>
          <button onClick={() => setFilter("videos")} className={`px-5 py-2 rounded-xl font-medium ${filter === 'videos' ? 'bg-brand text-white' : 'bg-[#1f2937] text-white'}`}>
            <span className="mr-2">🎥</span> Videos
          </button>
          <button onClick={() => setFilter("images")} className={`px-5 py-2 rounded-xl font-medium ${filter === 'images' ? 'bg-brand text-white' : 'bg-[#1f2937] text-white'}`}>
            <span className="mr-2">🖼️</span> Images
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search content..."
            className="w-full bg-[#1f2937] text-white px-4 py-2 pl-10 rounded-xl placeholder:text-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Filters */}
      {(filter === 'all' || filter === 'videos') && (
        <>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand" />
              Latest Videos
            </h2>
            <div className="ml-auto flex items-center gap-3">
              <button className="bg-brand text-white px-4 py-1 rounded-lg text-sm">Latest</button>
              <button className="bg-[#1f2937] text-white px-4 py-1 rounded-lg text-sm">Trending</button>
              <button className="text-brand text-sm font-semibold">View All →</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-[#1a1e24] rounded-xl overflow-hidden shadow-md">
                <div className="relative">
                  <img src={video.img} alt={video.title} className="w-full h-40 object-cover" />
                  {video.premium && (
                    <span className="absolute top-2 left-2 bg-brand text-xs font-bold px-3 py-1 rounded-full">PREMIUM</span>
                  )}
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-0.5 text-sm rounded text-white">
                    ⏱ {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold mb-2">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <ThumbsUp className="w-4 h-4 mr-1 text-brand" />
                    {video.likes.toLocaleString()}<span className="mx-2">•</span>{video.views} views
                  </div>
                  <div className="h-1 w-full bg-gray-700 rounded-full">
                    <div
                      className="h-1 bg-brand rounded-full"
                      style={{ width: `${video.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {(filter === 'all' || filter === 'images') && (
        <FeaturedImages />
      )}
    </section>
  );
}