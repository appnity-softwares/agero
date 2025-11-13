import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // 'lucide-react' ko install karna padega

// Agar aapke project mein 'lucide-react' nahi hai toh, aap simply '➕' aur '➖' signs use kar sakte hain.

const faqs = [
  // Left Column (Pehla column)
  { id: 1, q: "Why's Agero instead of full-time designer?", a: "Agero aapko flexibility, cost-effectiveness, aur wide range ki design expertise deta hai bina full-time employee ke overhead ke." },
  { id: 2, q: "Speed of design delivery?", a: "Pretty quick! Most designs are delivered in 2-3 business days. We prioritize quality without slowing you down. (Yeh answer image se liya gaya hai)" },
  { id: 3, q: "What's the Agero progress like?", a: "Aap ek request submit karte hain, hum design karte hain, aap review karte hain, aur hum revise karte hain jab tak aap khush na ho jayein. Simple aur efficient." },
  
  // Right Column (Dusra column)
  { id: 4, q: "How to request a design?", a: "Aap apni dedicated client portal ya ek simple email/form ke through aasani se ek naya design request submit kar sakte hain." },
  { id: 5, q: "What if I don't like design?", a: "Koi problem nahi! Hum unlimited revisions offer karte hain jab tak design aapki expectations par khara na utre. Aapki satisfaction hamari priority hai." },
  { id: 6, "q": "Are there any refund?", a: "Refund policy details hamare terms of service mein diye gaye hain, jo generally work completed aur specific circumstances par based hoti hai." },
];

// Individual FAQ item component
const AccordionItem = ({ faq, isOpen, toggleAccordion }) => {
  return (
    <div 
      className={`
        bg-[#f0f0f0] 
        p-5 md:p-6 
        rounded-xl 
        shadow-sm 
        transition-all duration-300 
        ${isOpen ? 'ring-2 ring-gray-200' : 'hover:ring-1 hover:ring-gray-100'}
      `}
    >
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        {/* Question Text */}
        <span className="text-lg md:text-xl font-medium text-gray-900 pr-4">
          {faq.q}
        </span>
        
        {/* Icon (Plus/Minus) */}
        <div className={`
          p-1 
          rounded-full 
          bg-gray-100 
          text-gray-900 
          transition-transform duration-300
          ${isOpen ? 'transform rotate-180' : ''}
        `}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {/* Answer Content - Conditional Rendering */}
      <div 
        className={`
          overflow-hidden 
          transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
        `}
      >
        <p className="text-gray-600 text-base md:text-lg">
          {faq.a}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  // activeId state se pata chalta hai ki kaunsa FAQ item open hai.
  // Humne '2' ko default open rakha hai, jaise ki aapke image mein "Speed of design delivery?" open tha.
  const [activeId, setActiveId] = useState(2); 

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id); // Agar click kiya hua item pehle se open hai toh close kar do, nahi toh open kar do.
  };

  // FAQs ko do (2) columns mein split karna
  const leftColumnFAQs = faqs.slice(0, 3); // Pehle 3 items
  const rightColumnFAQs = faqs.slice(3, 6); // Agle 3 items

  return (
    <div className="min-h-screen  bg-[#dbdbdb]  py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-2">(FAQs)</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Questions, Answered
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Helping you understand our process and offerings at Agero.
          </p>
        </div>

        {/* FAQ Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8 md:space-y-10">
            {leftColumnFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={activeId === faq.id}
                toggleAccordion={() => toggleAccordion(faq.id)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8 md:space-y-10">
            {rightColumnFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={activeId === faq.id}
                toggleAccordion={() => toggleAccordion(faq.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQSection;