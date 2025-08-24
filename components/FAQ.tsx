"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you accept trade-ins?",
    answer: "Yes, we accept trade-ins! We'll evaluate your current vehicle and provide a fair market value that can be applied toward your new purchase. Our experienced team will inspect your vehicle and provide you with a competitive trade-in offer."
  },
  {
    question: "Do you offer financing options?",
    answer: "We work with various financial institutions to provide flexible financing solutions. We can help you secure competitive rates and terms that fit your budget. Our finance team will guide you through the entire process."
  },
  {
    question: "How do I book a test drive?",
    answer: "You can book a test drive by clicking the 'Book Test Drive' button on our website, calling us directly, or visiting our showroom. We'll schedule a convenient time for you to test drive any vehicle in our inventory."
  },
  {
    question: "Do your vehicles come with warranties?",
    answer: "Yes, we offer comprehensive warranties on our certified pre-owned vehicles. Warranty terms vary by vehicle age and condition, but we ensure all our customers have peace of mind with their purchase."
  },
  {
    question: "Do you provide international shipping services?",
    answer: "Absolutely! We have extensive experience in international vehicle shipping and export documentation. We handle all the logistics including customs clearance, shipping arrangements, and delivery to your desired destination."
  },
  {
    question: "What areas do you serve?",
    answer: "While our headquarters is in Zaria, we serve customers throughout Northern Nigeria including Kaduna, Abuja, Kano, and beyond. We also provide delivery services and can arrange transportation for vehicle pickup."
  },
  {
    question: "How do you ensure vehicle quality?",
    answer: "Every vehicle in our inventory undergoes a comprehensive inspection by our certified mechanics. We check engine performance, electrical systems, brakes, suspension, and overall condition before offering any vehicle for sale."
  },
  {
    question: "Can you help me find a specific vehicle model?",
    answer: "Yes! Our vehicle sourcing service can help you find specific makes and models. Just let us know what you're looking for, your budget, and preferred specifications, and we'll use our network to locate the perfect vehicle for you."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services and processes
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2348123456789"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
            >
              Call Us: +234 812 345 6789
            </a>
            <a
              href="mailto:info@manbeecars.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Email Us: info@manbeecars.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}