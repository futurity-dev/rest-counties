"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe, Zap, Code, Database, Users, Star } from "lucide-react"

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

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"
      />

      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 sm:space-y-8 lg:space-y-10"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-xl opacity-20"
              />
              <Globe className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-blue-600 relative z-10" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              REST Countries API
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
              Get information about countries via a RESTful API. Access data about 250 countries including names,
              capitals, populations, and more.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
            >
              <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Try It Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 sm:px-8 py-3 text-base sm:text-lg border-blue-200 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
            >
              <Code className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View Docs
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-gray-500 px-4"
          >
            <div className="flex items-center">
              <Database className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              250+ Countries
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Free to Use
            </div>
            <div className="flex items-center">
              <Star className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              No API Key Required
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
