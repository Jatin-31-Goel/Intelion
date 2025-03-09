"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MainNav } from "./main-nav"
import Footer from "./footer"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else if (prefersDark) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <MainNav theme={theme} toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </div>
  )
}

