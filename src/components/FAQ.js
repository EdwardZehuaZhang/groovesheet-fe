import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openSection, setOpenSection] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    setOpenQuestion(null);
  };

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const faqData = [
    {
      section: "Overview",
      questions: [
        { id: "signup", question: "How do I sign up/sign in?" },
        { id: "split", question: "How do I split a full track?" }
      ]
    },
    {
      section: "Packs and Minutes",
      questions: [
        { id: "expiration", question: "What is the expiration date on paid packages?" },
        { id: "minutes-mean", question: "What does the \"number of minutes in a pack\" mean?" },
        { id: "deducted", question: "How are the minutes deducted from my account?" },
        { id: "remaining", question: "Where can I see the number of remaining minutes?" },
        { id: "job-fails", question: "What happens if a job fails?" },
        { id: "add-minutes", question: "How can I add more minutes to my account?" }
      ]
    },
    {
      section: "Features",
      questions: [
        { id: "quality", question: "How do I improve the notation quality?" },
        { id: "live", question: "Will it work on live recordings?" },
        { id: "meters", question: "Does it handle odd meters and tempo changes?" },
        { id: "format", question: "In what format will I receive the results?" }
      ]
    }
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-title">FAQ</h2>

        <div className="faq-sections">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="faq-section">
              <div className="faq-section-header">
                <div className="faq-section-label">
                  <h3 className="faq-section-title">{section.section}</h3>
                </div>
                
                <div className="faq-questions-column">
                  {section.questions.map((item, questionIndex) => (
                    <div key={item.id} className="faq-question-row">
                      <button 
                        className="faq-question-button"
                        onClick={() => toggleQuestion(item.id)}
                      >
                        <div className="faq-question-text">
                          <span>{item.question}</span>
                        </div>
                        <div className="faq-icon">
                          <div className="faq-icon-line line-1"></div>
                          <div className="faq-icon-line line-2"></div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
