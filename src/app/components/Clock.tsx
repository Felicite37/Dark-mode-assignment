'use client';

import { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) {
    return (
      <div className="bg-green-100 dark:bg-green-900 p-12 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-8">Current Time (CSR)</h3>
        <p className="text-6xl font-mono mb-8">Loading...</p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-100 dark:bg-green-900 p-12 rounded-lg text-center">
      <h3 className="text-2xl font-semibold mb-8">Current Time (CSR)</h3>
      <p className="text-6xl font-mono mb-8">{time.toLocaleTimeString()}</p>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}