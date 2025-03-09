"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Code, Cloud, Smartphone, Users, Settings } from "lucide-react"
import SiteLayout from "@/components/site-layout"

export default function ServicesPage() {
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
                Services & Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Take your company to new heights by investing in our reliable and efficient technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Comprehensive IT services for <span className="text-blue-600 dark:text-blue-400">businesses</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  When we say comprehensive, we mean comprehensive. Intelion has the experience and expertise to provide
                  an excellent experience across spheres, for truly holistic IT.
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  Some MSPs struggle to offer consulting or network services. But your organization needs the entire
                  experience to stop worrying about IT. Learn more about our services below.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Settings className="h-6 w-6" />,
                  title: "Managed Services",
                  description:
                    "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "IT Consulting & Advisory",
                  description:
                    "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Cyber Security",
                  description:
                    "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: "Web Development",
                  description:
                    "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
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
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
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

        {/* Why Choose Section */}
        <section className="py-20 md:py-28 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why choose services from Intelion?</h2>
                <p className="text-gray-300 mb-8">
                  Intelion services provide businesses with an edge over the competition with a variety of benefits.
                  Opting for outsourced IT services improves business efficiency and builds trust with customers and
                  clients. Our services can be tailored to meet specific needs to match your specific goals.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-09%20013800-iwet9fIUqJEDFXx4oazE1mQXhSoW3P.png"
                  alt="Code on screen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950/30"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Partner with Us for <span className="text-blue-600 dark:text-blue-400">Comprehensive IT</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Schedule a consultation to discuss how we can help transform your business with our comprehensive IT
                solutions.
              </p>
            </div>

            <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First name</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last name</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company / Organization</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-32"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}

