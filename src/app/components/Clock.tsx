'use client';

import { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Current Time (CSR)</h3>
      <p className="text-2xl font-mono">{time.toLocaleTimeString()}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}