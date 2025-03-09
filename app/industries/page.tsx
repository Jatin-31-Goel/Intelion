"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building,
  Hospital,
  Landmark,
  GraduationCap,
  Factory,
  Truck,
  ShoppingBag,
  Globe,
} from "lucide-react"
import SiteLayout from "@/components/site-layout"

export default function IndustriesPage() {
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
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Solving IT challenges in every industry, every day
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Overview */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Customized solutions for <span className="text-blue-600 dark:text-blue-400">diverse industries</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  With deep expertise across multiple sectors, we understand the unique challenges and opportunities
                  that each industry faces in today's rapidly evolving digital landscape.
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  Our industry-specific approach ensures that we deliver solutions tailored to your business needs,
                  compliance requirements, and growth objectives. From healthcare to finance, manufacturing to
                  education, we have you covered.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Factory className="h-6 w-6" />,
                  title: "Manufacturing & Industry",
                  description:
                    "Optimize operations, streamline production processes, and enhance supply chain management with tailored IoT and automation solutions.",
                },
                {
                  icon: <Hospital className="h-6 w-6" />,
                  title: "Healthcare",
                  description:
                    "Secure patient data, improve care delivery, and streamline administrative processes with HIPAA-compliant solutions.",
                },
                {
                  icon: <Landmark className="h-6 w-6" />,
                  title: "Finance & Banking",
                  description:
                    "Enhance security, ensure compliance, and improve customer experience with our advanced financial technology solutions.",
                },
                {
                  icon: <GraduationCap className="h-6 w-6" />,
                  title: "Education",
                  description:
                    "Transform learning experiences, improve administrative efficiency, and secure student data with our education IT solutions.",
                },
                {
                  icon: <Truck className="h-6 w-6" />,
                  title: "Transportation & Logistics",
                  description:
                    "Optimize routes, improve tracking, and enhance customer service with our integrated logistics technology solutions.",
                },
                {
                  icon: <ShoppingBag className="h-6 w-6" />,
                  title: "Retail & E-commerce",
                  description:
                    "Create seamless omnichannel experiences, optimize inventory management, and enhance customer engagement.",
                },
                {
                  icon: <Building className="h-6 w-6" />,
                  title: "Real Estate & Construction",
                  description:
                    "Streamline project management, enhance communication, and improve client experiences with specialized PropTech solutions.",
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Non-Profit",
                  description:
                    "Maximize your impact with cost-effective IT solutions designed specifically for non-profit organizations and their unique needs.",
                },
              ].map((industry, index) => (
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
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{industry.description}</p>
                  <Link
                    href={`/industries/${industry.title.toLowerCase().replace(/[&\s]+/g, "-")}`}
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

        {/* Case Study Highlight */}
        <section className="py-20 md:py-28 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
                  FEATURED CASE STUDY
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  How we helped a healthcare provider save $2.4M in IT costs
                </h2>
                <p className="text-gray-300 mb-8">
                  Learn how our comprehensive IT solution for a major healthcare network improved security, streamlined
                  operations, and significantly reduced costs over a three-year period.
                </p>
                <Link
                  href="/case-studies/healthcare-provider"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Read the case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare case study"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Insights */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                INDUSTRY INSIGHTS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest industry trends and insights</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay informed about the latest developments and innovations across different industries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "/placeholder.svg?height=200&width=400",
                  category: "HEALTHCARE",
                  title: "How AI is Transforming Healthcare Diagnostics",
                  description:
                    "Explore how artificial intelligence is revolutionizing medical diagnostics and improving patient outcomes.",
                },
                {
                  image: "/placeholder.svg?height=200&width=400",
                  category: "FINANCE",
                  title: "The Rise of Blockchain in Financial Services",
                  description:
                    "Learn how blockchain technology is reshaping the future of financial transactions and security.",
                },
                {
                  image: "/placeholder.svg?height=200&width=400",
                  category: "MANUFACTURING",
                  title: "Industry 4.0: The Future of Smart Manufacturing",
                  description:
                    "Discover how IoT, AI, and automation are creating the next generation of manufacturing facilities.",
                },
              ].map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 relative">
                    <Image
                      src={insight.image || "/placeholder.svg"}
                      alt={insight.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-medium">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{insight.description}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
                Ready to transform your <span className="text-blue-600 dark:text-blue-400">industry</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Let's discuss how our industry-specific IT solutions can help your business thrive in today's
                competitive market.
              </p>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                Schedule a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}

