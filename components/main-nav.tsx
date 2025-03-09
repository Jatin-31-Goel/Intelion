"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

interface MainNavProps {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export function MainNav({ theme, toggleTheme }: MainNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              <span className="text-xl">I</span>
              <div className="absolute -right-1 -top-1 w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </Link>
          <Link href="/">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Intelion
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`font-medium transition-colors ${
              isActive("/")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`font-medium transition-colors ${
              isActive("/services")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Services
          </Link>
          <Link
            href="/industries"
            className={`font-medium transition-colors ${
              isActive("/industries")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Industries
          </Link>
          <Link
            href="/research"
            className={`font-medium transition-colors ${
              isActive("/research")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Research
          </Link>
          <Link
            href="/company"
            className={`font-medium transition-colors ${
              isActive("/company")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Company
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 dark:text-gray-400">Client Support</span>
              <span className="font-medium">0612-2500971</span>
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link
            href="#contact"
            className="hidden md:flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 text-sm font-medium text-white shadow hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className={`block py-2 font-medium ${
                isActive("/") ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`block py-2 font-medium ${
                isActive("/services") ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/industries"
              className={`block py-2 font-medium ${
                isActive("/industries") ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/research"
              className={`block py-2 font-medium ${
                isActive("/research") ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/company"
              className={`block py-2 font-medium ${
                isActive("/company") ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <Link
              href="#contact"
              className="block w-full py-2 text-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}

