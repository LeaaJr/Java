import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}
const faqData: FAQItem[] = [
  {
    question: "Can I use Flowbite in open-source projects?",
    answer:
      "Yes, you can use Flowbite in open-source projects. Our license allows for both personal and commercial use.",
  },
  {
    question: "Is there a Figma file available?",
    answer:
      "Yes, we provide Figma design files for all our components and templates.",
  },
  {
    question: "What are the differences between Flowbite and Tailwind UI?",
    answer:
      "While both are built on Tailwind CSS, Flowbite offers a different set of components and features. Each has its own unique advantages.",
  },
  {
    question: "What about browser support?",
    answer:
      "Flowbite is compatible with all modern browsers and provides fallbacks for older versions.",
  },
];
const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={onClick}
      >
        <span className="text-gray-300 text-lg">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}
      >
        <p className="text-gray-400 pb-5">{item.answer}</p>
      </div>
    </div>
  );
};
export const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);
  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-white text-4xl font-bold text-center mb-12">
          Frequently asked questions
        </h1>
        <div className="space-y-1">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openItems.includes(index)}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
