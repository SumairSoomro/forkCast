import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search for recipes..." 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-3xl mx-auto"
    >
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
        />
        <Search 
          size={20} 
          className="absolute left-4 text-gray-400"
        />
        <button
          type="submit"
          className="absolute right-3 bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar; 