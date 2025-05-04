import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus - Social Media Manager",
  description: "Centralize and manage all your social media platforms in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600">Nexus</h1>
              <nav className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-600">Home</a>
                <a href="#" className="text-gray-500 hover:text-blue-600">Dashboard</a>
                <a href="#" className="text-gray-500 hover:text-blue-600">Calendar</a>
                <a href="#" className="text-gray-500 hover:text-blue-600">Analytics</a>
              </nav>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Sign In
                </button>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="bg-white shadow-sm mt-auto py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-gray-500 text-sm text-center">
                &copy; {new Date().getFullYear()} Nexus - Social Media Centralizer and Manager
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
