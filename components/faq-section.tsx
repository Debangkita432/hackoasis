"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export default function FAQSection() {
  const faqs = [
    {
      question: "Who can participate in HACKOASIS 2.0?",
      answer:
        "The hackathon is open to all college students—beginners and experienced developers alike. Everyone is welcome to participate in IEM HACKOASIS 2.0.",
    },
    {
      question: "What is the team size limit?",
      answer:
        "Teams can have a minimum of 2 members and a maximum of 4 members. You can also form teams with participants from different colleges.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation in HACKOASIS 2.0 is completely free. We believe in making technology accessible to everyone.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, chargers, any hardware you might need for your project, and most importantly, your enthusiasm! We'll provide food, drinks, and a great environment.",
    },
    {
      question: "Will food and accommodation be provided?",
      answer:
        "Yes, we will provide meals and refreshments throughout the event. However, accommodation is not provided, so participants coming from outside Kolkata should arrange their own stay.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Projects will be evaluated based on innovation, technical implementation, design, presentation, and potential impact by our panel of expert judges.",
    },
    {
      question: "Who owns the intellectual property of the projects?",
      answer:
        "You retain full ownership of your project and any intellectual property created during the hackathon.",
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer:
        "No, all development work must be done during the hackathon hours. Problem statements will be given on the day of the event.",
    },
    {
      question: "What if I don't have a team?",
      answer:
        "Don't worry—reach out to the student coordinators and we’ll help you find a team.",
    },
    {
      question: "Are there any specific technologies we must use?",
      answer:
        "No, you're free to use any programming languages, frameworks, or tools. The focus is on solving problems creatively.",
    },
  ]

  return (
    <section id="faq" className={`${orbitron.className} py-20 bg-secondary/20 scroll-mt-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers to help you prepare for the hackathon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
