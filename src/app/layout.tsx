import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grahamstak | Transforming Business with AI",
  description: "We help businesses leverage artificial intelligence to drive innovation, efficiency, and growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="text-2xl font-bold text-blue-900">
                Grahamstak
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/services" className="text-gray-600 hover:text-blue-900">
                  Services
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-900">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-900">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Grahamstak</h3>
                <p className="text-gray-400">
                  Transforming businesses through artificial intelligence solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-400">
                  Email: info@aiconsultancy.com<br />
                  Phone: (555) 123-4567<br />
                  Address: 123 AI Street, Tech City
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Grahamstak. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
