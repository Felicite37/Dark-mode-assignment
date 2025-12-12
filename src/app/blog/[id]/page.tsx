interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  const author = await getUser(post.userId);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        <p>By: {author.name}</p>
        <p>ISR - Revalidated every 60 seconds</p>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
}