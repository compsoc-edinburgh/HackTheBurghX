import React from 'react';
import './FAQ.scss';

const FAQ: React.FC = () => {


    const questions = [
        {
            question: 'How much does it cost?',
            answer: 'If accepted to the event, tickets are free! We also offer travel reimbursements.'
        },
        {
            question: 'Who may attend?',
            answer: 'Any student currently enrolled in full-time further education may join. If you graduated less than a year ago, you are also eligible.'
        },
        {
            question: "I can't code, can I join?",
            answer: "Yes! If you're new to programming, a hackathon is the best place for you to go to. There'll be plenty of mentors ready to assist you with whatever problem you face. Don't hestitate to ask for help, we don't bite!"
        },
        {
            question: 'What about teams?',
            answer: "You can team up with up to five other people! Don't worry if you haven't got a team — you're not alone. We'll help you form a team at the event."
        },
        {
            question: "What if I'm not a student?",
            answer: "We'd love to have you as a mentor! Please get in touch for more information."
        },
        {
            question: "What do I bring?",
            answer: "Yourself, and something to hack on. We'll be providing snacks and drinks throughout the weekend, but you need to bring your own device (and charger).",
        },
        {
            question: "Do I need a hotel?",       
            answer: "You can sleep over if you'd like. You'll probably want to bring a sleeping bag and some spare clothes. Unfortunately, we don't have showers."
        },
    ]

    return (
        <div className='page'>
         
         <div className="title">
            Information
         </div>

            <div className="questions">
                {
                    questions.map((q, i) => {
                        return (
                            <div key={i} className="question">
                                <div className="q">
                                    {q.question}
                                </div>
                                <div className="a">
                                    {q.answer}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default FAQ;
