"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  DollarSign,
  Lightbulb,
  BookOpen,
  ArrowUpRight,
  Code,
  Smartphone,
  Cloud,
  Shield,
  CheckCircle,
  ArrowRight,
  Server,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import SiteLayout from "@/components/site-layout"

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <SiteLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 -z-10"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  Next-Gen IT Solutions
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                  We manage your IT,
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">you focus on growth</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-[600px]">
                  Take charge of your business continuity with innovative IT solutions designed for the modern
                  enterprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-700/30 transition-all duration-300"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-8 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Digital transformation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Customer Satisfaction</p>
                      <p className="text-2xl font-bold">98%</p>
                    </div>
                  </div>
                </div>

                {/* Floating Projects Card */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <Server className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
                      <p className="text-2xl font-bold">470+</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Trusted By Logos */}
          <div className="container mx-auto px-4 md:px-6 mt-20">
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                Trusted by industry leaders
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 dark:opacity-50">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-auto grayscale">
                  <Image
                    src="/placeholder.svg?height=32&width=120"
                    alt={`Partner logo ${i + 1}`}
                    width={120}
                    height={32}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="services" className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simplifying IT for a <span className="text-blue-600 dark:text-blue-400">complex world</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We deliver comprehensive IT solutions tailored to your business needs, helping you navigate the digital
                landscape with confidence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Cyber Security",
                  description:
                    "Our experts identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
                },
                {
                  icon: <Server className="h-6 w-6" />,
                  title: "Managed Services",
                  description:
                    "Free up your internal resources by letting us handle day-to-day support services, management, and monitoring of your IT.",
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "IT Consulting",
                  description:
                    "The right technology, implemented properly and appropriately managed, can lead to significant gains in growth.",
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: "Web Development",
                  description:
                    "Establish an impactful online presence and reach your target audience effectively with our web development services.",
                },
                {
                  icon: <Smartphone className="h-6 w-6" />,
                  title: "Mobile Development",
                  description:
                    "Create customized mobile apps that align with your brand and goals, with expertise in various mobile platforms.",
                },
                {
                  icon: <Cloud className="h-6 w-6" />,
                  title: "Cloud Services",
                  description:
                    "Find the right cloud solutions that meet your business needs with our expertise in cloud technologies.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg shadow-blue-500/5 dark:shadow-blue-500/2 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-700/30 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  What sets us <span className="text-blue-600 dark:text-blue-400">apart</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  With years of experience and a commitment to excellence, we deliver IT solutions that drive real
                  business value.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    {
                      icon: <DollarSign className="h-5 w-5" />,
                      title: "Cost-effectiveness",
                      description:
                        "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
                    },
                    {
                      icon: <Lightbulb className="h-5 w-5" />,
                      title: "Innovative Technology",
                      description:
                        "We stay up-to-date with the latest technology trends to keep you ahead of the competition.",
                    },
                    {
                      icon: <BookOpen className="h-5 w-5" />,
                      title: "Industry Expertise",
                      description:
                        "We specialize in serving specific industries with tailored solutions that meet your unique needs.",
                    },
                    {
                      icon: <ArrowUpRight className="h-5 w-5" />,
                      title: "Scalability",
                      description:
                        "Our solutions grow with your business, ensuring you get the most value from your investment.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-900 shadow-md flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Our team working"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Stats Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-800 max-w-xs">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">08+</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Response Time</p>
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">3 min</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                Industries We Serve
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Solving IT challenges in <span className="text-blue-600 dark:text-blue-400">every industry</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We provide specialized IT solutions across various sectors, understanding the unique challenges each
                industry faces.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                <span className="font-medium">Industry & Manufacturing</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                <span className="font-medium">Transportation & Logistics</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                <span className="font-medium">Healthcare</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                <span className="font-medium">Banks & Insurance</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                <span className="font-medium">Consulting Providers</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                <span className="font-medium">Non-Profit</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/industries"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 pb-1"
              >
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-950 dark:to-purple-950/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real results for <span className="text-blue-600 dark:text-blue-400">real businesses</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how we've helped organizations across industries transform their IT infrastructure and achieve their
                business goals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "/placeholder.svg?height=200&width=400",
                  category: "DIGITAL TRANSFORMATION",
                  title: "How Intelion Revolutionized Unacademy's Success",
                  description:
                    "Learn how our consultation services helped transform their digital infrastructure and scale operations.",
                },
                {
                  image: "/placeholder.svg?height=200&width=400",
                  category: "CLOUD HOSTING",
                  title: "MM University's Smart Manufacturing Lab",
                  description:
                    "Discover how we implemented cutting-edge cloud solutions to power their research capabilities.",
                },
                {
                  image: "/placeholder.svg?height=200&width=400",
                  category: "CYBERSECURITY",
                  title: "Securing Financial Data for Global Bank",
                  description:
                    "How we implemented robust security measures to protect sensitive financial information.",
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg shadow-blue-500/5 dark:shadow-blue-500/2 border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="h-48 relative">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-medium">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{story.description}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-700/30 transition-all duration-300"
              >
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                Our Partners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Recognized by <span className="text-blue-600 dark:text-blue-400">the best</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We partner with leading technology providers to deliver the best solutions for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl flex items-center justify-center h-24 shadow-md shadow-blue-500/5 dark:shadow-blue-500/2 border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt={`Partner logo ${i + 1}`}
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  Contact Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Partner with us for <span className="text-blue-600 dark:text-blue-400">comprehensive IT</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We're happy to answer any questions you may have and help you determine which of our services best fit
                  your needs.
                </p>

                <div className="pt-4">
                  <p className="font-medium mb-2">Call us directly:</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">0612-2500-971</p>

                  <h3 className="text-xl font-bold mb-4">Your benefits:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Client-oriented",
                      "Results-driven",
                      "Independent",
                      "Problem-solving",
                      "Competent",
                      "Transparent",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-bold mb-6">What happens next?</h3>
                  <div className="space-y-6">
                    {[
                      { step: 1, text: "We schedule a call at your convenience" },
                      { step: 2, text: "We do a discovery and consulting meeting" },
                      { step: 3, text: "We prepare a proposal tailored to your needs" },
                    ].map((step) => (
                      <div key={step.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <p className="font-medium">{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl shadow-blue-500/10 dark:shadow-blue-500/5 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-2xl font-bold text-center mb-8">Schedule a Free Consultation</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        First name
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      How Can We Help You?
                    </label>
                    <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200">
                      <option>Select Option</option>
                      <option>IT Consulting</option>
                      <option>Managed Services</option>
                      <option>Cloud Services</option>
                      <option>Cyber Security</option>
                      <option>Web Development</option>
                      <option>Mobile Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 h-32"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-700/30 transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Managed Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Industries</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Non-Profit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  <span className="text-xl">I</span>
                  <div className="absolute -right-1 -top-1 w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Intelion
                </span>
              </div>
              <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Intelion. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </SiteLayout>
  )
}

