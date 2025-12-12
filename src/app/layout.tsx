import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Assignment",
  description: "A Next.js project demonstrating different rendering techniques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <header className="bg-blue-600 dark:bg-blue-800 text-white p-4">
              <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Next.js Assignment</h1>
                <div className="flex space-x-4">
                  <a href="/" className="hover:underline">Home</a>
                  <a href="/about" className="hover:underline">About</a>
                  <a href="/blog" className="hover:underline">Blog</a>
                </div>
              </nav>
            </header>
            <main className="container mx-auto p-4">
              {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 mt-8">
              <div className="container mx-auto text-center">
                <p>&copy; 2024 Next.js Assignment. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}