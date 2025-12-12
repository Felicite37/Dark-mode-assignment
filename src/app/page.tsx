import { Clock } from './components/Clock';
import { ThemeToggle } from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome to Next.js Assignment</h1>
        <ThemeToggle />
      </div>
      
      <Clock />
    </div>
  );
}