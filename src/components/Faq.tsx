
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQComponent: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-component w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-4 w-full">
          <div
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
            className={`flex justify-between items-center cursor-pointer px-4 py-4 border-2 border-primary font-lato-bold w-full ${
              openIndex === index
                ? 'bg-primary text-white'
                : 'bg-white text-primary'
            }`}
          >
            {item.question}{' '}
            <svg
              className={`${
                openIndex === index ? 'transform rotate-[270deg]' : 'rotate-90'
              }`}
              width="11"
              height="20"
              viewBox="0 0 11 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 17.8906L9 10.0829"
                stroke={`${openIndex === index ? '#fff' : '#16236E'}`}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M9 9.80786L2 2.00017"
                stroke={`${openIndex === index ? '#fff' : '#16236E'}`}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {openIndex === index && (
            <div className="py-2 font-lato px-8 text-left border border-[#D9D9D9]">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
