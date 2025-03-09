"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Target, Flag, Users, ArrowRight } from "lucide-react"
import SiteLayout from "@/components/site-layout"

export default function CompanyPage() {
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
                About Intelion
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Pioneering technology solutions for a better tomorrow
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block text-4xl font-bold text-red-600">Our Mission</div>
                <p className="text-gray-600 dark:text-gray-300">
                  Intelion is dedicated to crafting and delivering innovative solutions to customers, ensuring complete
                  client success. We pioneer technology, providing cutting-edge digital experiences, fostering financial
                  inclusion, and transforming the industry through technology-driven excellence for sustainable growth
                  and global impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block text-4xl font-bold text-red-600">Our Vision</div>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the global leader in innovative IT solutions, transforming businesses through cutting-edge
                  technology while maintaining the highest standards of excellence and client satisfaction.
                </p>
                <div className="pt-4">
                  <p className="font-bold text-xl mb-2">We are global</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our national network allows us to offer best-in-class services like dedicated vCIOs, specialized
                    security and compliance advisory services, a 24/7 help desk, and more.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Call Us on 1800 203 9983</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 md:py-28 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400">
                Our culture is built around five key attributes that differentiate us from our competition.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Passionate",
                  description: "We are intensely enthusiastic about providing a superior experience.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Respectful",
                  description: "We are polite and kind to one another, even when it gets tough.",
                },
                {
                  icon: <Flag className="h-6 w-6" />,
                  title: "Ownership",
                  description: "We are empowered to do our jobs and work towards a common goal.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Unified",
                  description: "We work as a team and trust each other to create a seamless experience.",
                },
              ].map((attribute, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                    {attribute.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{attribute.title}</h3>
                  <p className="text-gray-400">{attribute.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                SELECTED PROJECTS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our innovation is prominently featured, setting new standards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 text-white p-8 rounded-2xl"
              >
                <div className="text-sm mb-4">Featured On</div>
                <h3 className="text-2xl font-bold mb-4">
                  Empowering Universities: Intelion's Digital Campus Program And Strategic Partnerships
                </h3>
                <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Read More on @abp News
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl"
              >
                <div className="text-sm mb-4">Partnership</div>
                <div className="grid grid-cols-2 gap-8">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="IBM Logo"
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="Microsoft Logo"
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-bold">Listed on Startup India Platform</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">07</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years in business</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years in app development</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">01+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Startups unicorns built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">#20</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Development company in India</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How we work with our partners</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  At Intelion Consultancy Services, we treat our partners with the utmost respect and expect the same in
                  return. We believe that the key to fostering any good relationship is finding the right balance
                  between the give and the take.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  We pride ourselves on striking the perfect harmony between the two so that our relationships can
                  flourish to full potential.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-09%20013837-ekpo6VHBEqfeFOwMm2BxneQ8ecvEPe.png"
                  alt="Partners climbing mountain"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}

