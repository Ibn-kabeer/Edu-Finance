import React, { useState } from 'react';

const Demo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const paragraphs = [
    "Paragraph 1",
    "Paragraph 2",
    "Paragraph 3"
  ];

  return (
    <div className="p-4">
      {paragraphs.map((text, index) => (
        <div key={index}>
          <p
            className="cursor-pointer mb-1"
            onClick={() => handleClick(index)}
          >
            {text}
          </p>
          <hr
            className={`border transition-all duration-300 ${
              activeIndex === index ? 'border-blue-500' : 'border-gray-300'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Demo;