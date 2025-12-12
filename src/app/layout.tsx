import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
            <header className="bg-green-600 dark:bg-green-800 text-white p-4">
              <nav className="container mx-auto flex justify-center">
                <div className="flex space-x-3 sm:space-x-4">
                  <Link href="/" className="hover:underline text-sm sm:text-base">Home</Link>
                  <Link href="/about" className="hover:underline text-sm sm:text-base">About</Link>
                  <Link href="/blog" className="hover:underline text-sm sm:text-base">Blog</Link>
                </div>
              </nav>
            </header>
            <main className="container mx-auto p-4 min-h-screen">
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