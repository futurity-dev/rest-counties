"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, Copy, Check } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Start building amazing applications with country data today. No
            setup required, just start making requests!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link href={"/docs"}>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                <Code className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Documentation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-transparent w-full sm:w-auto"
            >
              <ArrowRight className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Start Building
            </Button>
          </div>

          <div className="pt-4 sm:pt-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 max-w-full overflow-hidden">
              <code className="text-blue-100 font-mono text-xs sm:text-sm truncate">
                https://rest-countries.vercel.app/docs
              </code>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20 h-6 w-6 sm:h-8 sm:w-8 p-0 flex-shrink-0"
                onClick={() =>
                  copyToClipboard("https://restcountries.com/v3.1/all")
                }
              >
                {copied ? (
                  <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
