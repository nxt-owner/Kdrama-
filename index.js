import React, { useState } from 'react';
import { Heart, Star, Play, Film, Menu } from 'lucide-react';

// Centralized configuration for easy editing
const SITE_CONFIG = {
  title: "K-Drama World",
  navigation: [
    { name: "Home", link: "#" },
    { name: "Genres", link: "#" },
    { name: "Trending", link: "#" }
  ]
};

// Separate data file for easy updates
const MOVIE_DATA = [
  {
    id: 1,
    title: "Crash Landing on You",
    year: 2019,
    genre: "Romance, Comedy",
    rating: 8.7,
    description: "A paragliding mishap drops a South Korean heiress in North Korea.",
    theme: {
      bgColor: "bg-pink-100",
      accentColor: "bg-pink-500",
      textColor: "text-pink-900"
    }
  },
  {
    id: 2,
    title: "Descendants of the Sun",
    year: 2016,
    genre: "Romance, Action",
    rating: 8.5,
    description: "A love story between a special forces captain and a surgeon.",
    theme: {
      bgColor: "bg-teal-100",
      accentColor: "bg-teal-500",
      textColor: "text-teal-900"
    }
  },
  {
    id: 3,
    title: "Goblin",
    year: 2016,
    genre: "Fantasy, Romance",
    rating: 8.9,
    description: "An immortal goblin seeks his bride to end his cursed existence.",
    theme: {
      bgColor: "bg-purple-100",
      accentColor: "bg-purple-500",
      textColor: "text-purple-900"
    }
  }
];

const KdramaMovies = () => {
  const [movies] = useState(MOVIE_DATA);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen">
      {/* Mobile-friendly Header with Responsive Menu */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 md:p-6 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Film className="mr-2 md:mr-4 text-white" size={30} />
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide">{SITE_CONFIG.title}</h1>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none"
            >
              <Menu size={30} />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {SITE_CONFIG.navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="hover:text-yellow-200 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            {SITE_CONFIG.navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="block py-2 hover:bg-purple-700 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>
      
      {/* Responsive Movie Grid */}
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className={`${movie.theme.bgColor} rounded-2xl shadow-lg overflow-hidden 
                transform transition hover:scale-105 hover:shadow-2xl`}
            >
              <div className="relative">
                <img 
                  src={`/api/placeholder/300/450?text=${encodeURIComponent(movie.title)}`} 
                  alt={movie.title} 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div 
                  className={`absolute top-4 right-4 ${movie.theme.accentColor} 
                    text-white px-3 py-1 rounded-full flex items-center`}
                >
                  <Star className="mr-1" fill="white" />
                  {movie.rating}
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h2 
                  className={`text-xl md:text-2xl font-bold mb-2 ${movie.theme.textColor}`}
                >
                  {movie.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {movie.year} | {movie.genre}
                </p>
                <p className="text-gray-700 mb-4 text-xs md:text-sm">
                  {movie.description}
                </p>
                <div className="flex justify-between items-center">
                  <button 
                    className={`${movie.theme.accentColor} text-white 
                      px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center 
                      hover:brightness-110 transition text-sm md:text-base`}
                  >
                    <Play className="mr-2" /> Trailer
                  </button>
                  <button 
                    className="text-red-500 hover:bg-red-100 p-2 rounded-full transition"
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Responsive Footer */}
      <footer 
        className="bg-gradient-to-r from-pink-600 to-purple-700 
        text-white p-4 md:p-6"
      >
        <div className="container mx-auto text-center">
          <p className="text-xs md:text-base tracking-wide">
            © 2024 {SITE_CONFIG.title} - Educational Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default KdramaMovies;
