"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, PieChart, FileText, Lightbulb, Search, Download } from "lucide-react"
import SiteLayout from "@/components/site-layout"

export default function ResearchPage() {
  return (
    <SiteLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 -z-10"></div>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                Market Research & Innovation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Data-driven insights to drive strategic business decisions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Overview */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transforming insights into{" "}
                  <span className="text-blue-600 dark:text-blue-400">innovative solutions</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our research team analyzes market trends, customer behaviors, and emerging technologies to help
                  businesses make informed decisions and stay ahead of the competition.
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  We combine deep industry knowledge with cutting-edge research methodologies to deliver actionable
                  insights that drive business growth and technological innovation.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Market Analysis",
                  description:
                    "Comprehensive analysis of market trends, competitor landscapes, and growth opportunities to inform your strategic decisions.",
                },
                {
                  icon: <Search className="h-6 w-6" />,
                  title: "User Research",
                  description:
                    "In-depth research into user behaviors, needs, and pain points to create more effective and user-centric products and services.",
                },
                {
                  icon: <PieChart className="h-6 w-6" />,
                  title: "Data Analytics",
                  description:
                    "Advanced data analytics to uncover hidden patterns, optimize operations, and identify new business opportunities.",
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Innovation Consulting",
                  description:
                    "Strategic guidance on fostering innovation within your organization and implementing emerging technologies.",
                },
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: "Industry Reports",
                  description:
                    "Detailed reports on industry-specific trends, challenges, and opportunities to help you navigate complex markets.",
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Technology Forecasting",
                  description:
                    "Predictive analysis of technology trends to help you prepare for and capitalize on future developments.",
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
                    href="#"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Research */}
        <section className="py-20 md:py-28 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
                FEATURED RESEARCH
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our latest insights and publications</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our most recent research papers, industry reports, and thought leadership content.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "/placeholder.svg?height=200&width=400",
                  title: "The Future of AI in Business Operations",
                  description:
                    "An in-depth analysis of how artificial intelligence is reshaping business operations across industries.",
                  downloadLink: "#",
                },
                {
                  image: "/placeholder.svg?height=200&width=400",
                  title: "Cybersecurity Trends Report 2025",
                  description:
                    "A comprehensive overview of emerging cybersecurity threats and best practices for organizations.",
                  downloadLink: "#",
                },
                {
                  image: "/placeholder.svg?height=200&width=400",
                  title: "Digital Transformation Roadmap",
                  description:
                    "A strategic guide to successfully implementing digital transformation initiatives in your organization.",
                  downloadLink: "#",
                },
              ].map((research, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="h-48 relative">
                    <Image
                      src={research.image || "/placeholder.svg"}
                      alt={research.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {research.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{research.description}</p>
                    <Link
                      href={research.downloadLink}
                      className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
                    >
                      Download report
                      <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Process */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                OUR APPROACH
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our research methodology</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We follow a systematic approach to research that ensures accurate, actionable insights.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 dark:bg-blue-900/30 -translate-x-1/2"></div>

              {[
                {
                  step: 1,
                  title: "Discovery",
                  description:
                    "We begin by understanding your business goals, challenges, and the specific questions you need answered.",
                },
                {
                  step: 2,
                  title: "Research Design",
                  description:
                    "Our team develops a custom research methodology tailored to your unique needs and objectives.",
                },
                {
                  step: 3,
                  title: "Data Collection",
                  description:
                    "We gather relevant data using a variety of qualitative and quantitative research methods.",
                },
                {
                  step: 4,
                  title: "Analysis",
                  description:
                    "Our experts analyze the data using advanced statistical techniques and industry expertise.",
                },
                {
                  step: 5,
                  title: "Insights & Recommendations",
                  description: "We transform raw data into actionable insights and strategic recommendations.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative z-10 mb-12 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="w-full md:w-[calc(50%-2rem)] bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                    <div className="absolute top-6 left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 -translate-x-1/2 md:translate-x-0 md:left-auto md:top-1/2 md:-translate-y-1/2 md:right-0 md:mr-[-3rem]"></div>
                    <div className="absolute top-6 left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 -translate-x-1/2 md:translate-x-0 md:left-auto md:top-1/2 md:-translate-y-1/2 md:left-0 md:ml-[-3rem]"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to gain valuable <span className="text-blue-600 dark:text-blue-400">insights</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Contact us today to discuss how our research and innovation services can help your business make more
                informed decisions.
              </p>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                Request a research consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}

