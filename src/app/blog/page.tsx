import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts (SSG)</h1>
      
      <div className="grid gap-4">
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}