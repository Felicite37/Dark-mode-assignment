'use client';

import { useState } from 'react';

export function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 mb-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
      />
      
      <ul className="space-y-2">
        <li><a href="#" className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Tech</a></li>
        <li><a href="#" className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Lifestyle</a></li>
        <li><a href="#" className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Education</a></li>
      </ul>
      
      {searchTerm && (
        <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 rounded">
          <p className="text-sm">Searching: "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}