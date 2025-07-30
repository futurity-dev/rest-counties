"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, Database, Code, Globe, Star, Flag } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with global CDN distribution and efficient caching.",
    color: "text-yellow-600",
  },
  {
    icon: Database,
    title: "Comprehensive Data",
    description: "Access detailed information about 250+ countries including demographics, geography, and more.",
    color: "text-blue-600",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "RESTful API with JSON responses, no authentication required, and extensive documentation.",
    color: "text-green-600",
  },
  {
    icon: Globe,
    title: "Multiple Endpoints",
    description: "Search by name, capital, region, currency, language, or country code.",
    color: "text-purple-600",
  },
  {
    icon: Star,
    title: "Always Free",
    description: "No API keys, no rate limits, no hidden costs. Use it in any project, commercial or personal.",
    color: "text-orange-600",
  },
  {
    icon: Flag,
    title: "Rich Metadata",
    description: "Get flags, currencies, languages, borders, timezones, and much more for each country.",
    color: "text-red-600",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose REST Countries API?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to integrate country data into your applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 group">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="flex justify-center">
                      <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                        <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${feature.color}`} />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
