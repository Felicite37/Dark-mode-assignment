import { Clock } from './components/Clock';
import { ThemeToggle } from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome to Next.js Assignment</h1>
        <ThemeToggle />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This project demonstrates various Next.js rendering techniques including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Client-Side Rendering (CSR)</li>
            <li>Server-Side Rendering (SSR)</li>
            <li>Static Site Generation (SSG)</li>
            <li>Incremental Static Regeneration (ISR)</li>
          </ul>
        </div>
        
        <Clock />
      </div>
    </div>
  );
}