'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  category?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      
      // Assign categories to posts based on ID
      const postsWithCategories = data.slice(0, 10).map((post: Post) => ({
        ...post,
        category: post.id <= 3 ? 'Tech' : post.id <= 6 ? 'Lifestyle' : 'Education'
      }));
      
      setPosts(postsWithCategories);
      setFilteredPosts(postsWithCategories);
    }
    
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredPosts(posts.filter(post => post.category === selectedCategory));
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedCategory, posts]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts (SSG)</h1>
      
      <div className="mb-4">
        <button 
          onClick={() => setSelectedCategory('')}
          className={`px-4 py-2 mr-2 rounded ${!selectedCategory ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          All
        </button>
        <button 
          onClick={() => setSelectedCategory('Tech')}
          className={`px-4 py-2 mr-2 rounded ${selectedCategory === 'Tech' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Tech
        </button>
        <button 
          onClick={() => setSelectedCategory('Lifestyle')}
          className={`px-4 py-2 mr-2 rounded ${selectedCategory === 'Lifestyle' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Lifestyle
        </button>
        <button 
          onClick={() => setSelectedCategory('Education')}
          className={`px-4 py-2 rounded ${selectedCategory === 'Education' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Education
        </button>
      </div>
      
      <div className="grid gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${post.id}`} className="hover:text-green-600 dark:hover:text-green-400">
                  {post.title}
                </Link>
              </h2>
              <span className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}