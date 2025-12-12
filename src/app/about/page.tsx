interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function getAuthorInfo(): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store' // This ensures SSR
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch author info');
  }
  
  return res.json();
}

export default async function About() {
  const author = await getAuthorInfo();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About (SSR)</h1>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Author Information</h2>
        
        <div className="space-y-3">
          <p><strong>Name:</strong> {author.name}</p>
          <p><strong>Username:</strong> {author.username}</p>
          <p><strong>Email:</strong> {author.email}</p>
          <p><strong>Phone:</strong> {author.phone}</p>
          <p><strong>Website:</strong> {author.website}</p>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p>{author.address.street}, {author.address.suite}</p>
            <p>{author.address.city}, {author.address.zipcode}</p>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <p><strong>Name:</strong> {author.company.name}</p>
            <p><strong>Catchphrase:</strong> {author.company.catchPhrase}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
        <p className="text-sm">
          <strong>Rendering:</strong> This page uses Server-Side Rendering (SSR). 
          The author data is fetched on each request using cache: 'no-store'.
        </p>
      </div>

      <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">🚀 Deployed Project</h3>
        <p className="text-sm">
          This project is deployed and demonstrates all Next.js rendering techniques 
          including CSR, SSR, SSG, and ISR with dark mode toggle functionality.
        </p>
      </div>
    </div>
  );
}