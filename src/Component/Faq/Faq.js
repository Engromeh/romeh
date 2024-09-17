import React, { useState } from 'react'
import "./Faq.css"
import { useNavigate } from 'react-router-dom';
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); 
const Navigate=useNavigate();
  const faqs = [
    { question: 'Is this a good product?', answer: 'A Way with Words is a radio show and podcast that features light-hearted conversation about language change, debates, and differences, as well as new words, old sayings, slang, family expressions, word origins and histories, etymology, linguistics, regional dialects, word games and puzzles, grammar, books, literature, writers and writing, and more.' },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
<>
<nav className="lpol">
    <ul className="nav-lisuu">
   
      <li onClick={()=>Navigate("/HomePage")} className="toor" >Back</li>
    </ul>
  </nav>
  
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-header" onClick={() => toggleAnswer(index)}>
            <h3>{faq.question}</h3>
            <button>
              {openIndex === index ? '-' : '+'} 
            </button>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>} 
        </div>
      ))}
    </div>
    </>
  );
};


export default Faq
