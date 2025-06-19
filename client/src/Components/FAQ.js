import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What services does Nutrihub offer?',
    answer: 'Nutrihub offers a range of services to support overall health and well-being. Their specialties include weight management (loss or gain), diabetes and heart disease care, sports and gym nutrition, children nutrition, and skin and digestive health. They also focus on boosting immunity, managing joint pain, migraine, stress, and improving women health issues like PCOD, PCOS, and irregular periods.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'Booking an appointment at Nutrihub is easy! Simply select your desired package from our website, fill out the online form, and schedule a consultation with Dietician Megha Chandel. Your journey to better health starts with a single click.',
  },
  {
    question: 'What is the process after booking?',
    answer: 'After booking, you will receive a personalized diet plan tailored to your goals. We will track your progress and provide ongoing support to ensure you stay motivated and achieve the desired results.',
  },
  {
    question: 'Can I get a customized meal plan?',
    answer: 'Absolutely! At Nutrihub, every client receives a 100% personalized meal plan designed specifically for their health goals, dietary preferences, and lifestyle. We believe in catering to your unique needs for optimal results.',
  },
  {
    question: 'How does a dietician help?',
    answer: 'A dietician offers expert guidance on nutrition, helps manage health conditions, and keeps you accountable on your health journey. With tailored advice and support, you can achieve lasting results and a healthier lifestyle.',
  },
  {
    question: 'What makes Nutrihub unique?',
    answer: 'Nutrihub stands out with our commitment to personalized care, proven results, and ongoing support. Our expert guidance empowers clients to take charge of their health and embrace a sustainable lifestyle.',
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
    <div id="faq"className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Empowering Your Nutrition Journey</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '▴' : '▾'}</span>
            </div>
            {openIndex === index && faq.answer && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
