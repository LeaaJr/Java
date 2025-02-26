import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}
const faqData: FAQItem[] = [
  {
    question: "How are the shipments?",
    answer:
      "Shipments are made through mail or express shipping in 24 hours with an additional charge.",
  },
  {
    question: "What happens if my product is found defective?",
    answer:
      "We have a 3-year warranty for manufacturing errors and a 1-year warranty from our company.",
  },
  {
    question: "What happens if I regret my purchase?",
    answer:
      "If you regret the purchase before 7 days, we will refund your money or you can use it to buy another product.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all payment methods such as Visa, MasterCard, American Express, Discover and even Paypal.",
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
