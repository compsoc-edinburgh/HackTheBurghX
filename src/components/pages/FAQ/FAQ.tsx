import React from 'react';
import './FAQ.scss';
import Footer from '../../footer/Footer';

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
            answer: "You can team up with up to four other people! Don't worry if you haven't got a team — you're not alone. We'll help you form a team at the event."
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

    const schedule = [
        {
            day: "Saturday, 2nd March",
            events: [
                "09:30 - Registration",
                "11:00 - Opening Ceremony",
                "12:00 - Hackathon Official Start",
                "12:30 - Optiver Workshop",
                "14:00 - Lunch",
                "15:30 - Marshall Wace Workshop",
                "16:30 - MLH GitHub Workshop",
                "17:30 - Quiz by Marshall Wace",
                "18:00 - AWS Cloud Club Workshop",
                "18:00 - Tardis Workshop",
                "19:00 - Dinner",
            ],
            venues: [
                "Ground Floor Reception",
                "Oak Lecture Theatre",
                "All Venues",
                "Hawthorn",
                "Ground Floor Reception / Cafe Area",
                "Hawthorn",
                "Hawthorn",
                "Hawthorn",
                "Hawthorn",
                "Rowan",
                "Ground Floor Reception / Cafe Area"
            ]
        },
        {
            day: "Sunday, 3rd March",
            events: [
                "00:00 - Midnight Pizza",
                "01:00 - Minigame (organised by HTB)",
                "08:00 - Breakfast",
                "12:00 - Submission Deadline",
                "12:00 - Lunch",
                "13:00 - Project Demonstrations", 
                "14:30 - Judges' Deliberation",
                "15:30 - Awards Ceremony",
                "17:00 - Event Close"
            ],
            venues: [
                "Ground Floor Reception/ Cafe Area",
                "Rowan",
                "Ground Floor Reception/ Cafe Area",
                "All Venues",
                "Ground Floor Reception/ Cafe Area",
                "Larch, Hawthorn",
                "Hawthorn", 
                "Oak Lecture Theatre", 
                "All Venues"
            ]
        }
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

            <div className="title">
                Schedule
            </div>

            <div className="schedule">
            {
                schedule.map((day, i) => {
                    return (
                        <>
                            <div className="day" key={i}>
                                {day.day}
                            </div>
                            <div className="events">
                                {
                                    day.events.map((event, j) => {
                                        return (
                                            <div className="event" key={j}>
                                                <div className="left">
                                                    <div className="time">
                                                        {event.split(' - ')[0]}
                                                    </div>
                                                    <div className="venue">
                                                        {day.venues[j]}
                                                    </div>

                                                </div>
                                                <div className="seperator"></div>
                                                <div className="name">
                                                    {event.split(' - ')[1]}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
            </div>

            <Footer></Footer>

        </div>
    );
};

export default FAQ;
