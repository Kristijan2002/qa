import React, { useEffect, useState } from 'react';
import MessageIcon from "../icons/MessageIcon";
import AlbIcon from "../icons/AlbIcon";
import MkIcon from "../icons/MkIcon";
import UkIcon from "../icons/UkIcon";
import NextIcon from '../icons/NextIcon';
import PrevIcon from '../icons/PrevIcon';
import BookIcon from '../icons/BookIcon';
// import introJs from 'intro.js';
import 'intro.js/introjs.css';

interface BannerProps {
    selectedButton: number | null;
    setSelectedButton: React.Dispatch<React.SetStateAction<number | null>>;
    setSelectedLanguage: React.Dispatch<React.SetStateAction<"en" | "mk" | "alb">>;
    onNextQuestion: () => void;
    onPrevQuestion: () => void;
    questionTitle: string;
    questionText: string;
    currentQuestion: number;
    totalQuestions: number;
    title: string;
    button1: string;
    button2: string;
}

const Banner: React.FC<BannerProps> = ({ setSelectedButton, selectedButton, setSelectedLanguage, onNextQuestion, onPrevQuestion, questionTitle, questionText, currentQuestion, totalQuestions, title, button1, button2 }) => {
    // const [showIntro, setShowIntro] = useState(false);

    // useEffect(() => {
    //     const introShown = localStorage.getItem('introShown');
    //     if (!introShown) {
    //         setShowIntro(true);
    //         localStorage.setItem('introShown', 'true');
    //     }
    // }, []);

    // useEffect(() => {
    //     if (showIntro) {
    //         const elementPrevButton = document.querySelector('.prev-button button') as HTMLElement | null;
    //         const elementNextButton = document.querySelector('.next-button button') as HTMLElement | null;
    //         const elementLanguageButton = document.querySelector('.language-button') as HTMLElement | null;
    //         const elementAccordion = document.querySelector(".test") as HTMLElement | null;

    //         const intro = introJs();
    //         intro.setOptions({
    //             steps: [
    //                 {
    //                     intro: "Welcome to the tour of our app! Let's get started."
    //                 },
    //                 {
    //                     element: elementLanguageButton,
    //                     intro: "Select your preferred language by clicking on the flag icon."
    //                 },
    //                 {
    //                     element: elementNextButton,
    //                     intro: "Click here to go to the next question."
    //                 },
    //                 {
    //                     element: elementPrevButton,
    //                     intro: "Click here to go to the previous question."
    //                 },
    //                 {
    //                     element: elementAccordion,
    //                     intro: "Click here to see the answer!"
    //                 }
    //             ],
    //             showProgress: true,
    //             showStepNumbers: true,
    //             exitOnOverlayClick: false,
    //             exitOnEsc: false,
    //             keyboardNavigation: false
    //         });
    //         intro.start();

    //         // Clean up function
    //         return () => {
    //             intro.exit(true);
    //         };
    //     }
    // }, [showIntro]);

    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };

    const isMobile = window.innerWidth <= 768;
    
    return (
        <div className="w-full bg-custom-green relative pb-10" style={{height: "550px"}}>
            <div className="w-4/5 mx-auto text-left flex flex-col text-white py-10">
                <header className="flex justify-between">
                    <span className="">{title}</span>
                    <span className="">{currentQuestion}/{totalQuestions}</span>
                </header>
                <div className="pt-10 flex flex-col justify-between md:flex-row md:pl-12 md:items-center lg:pl-32">
                    <div className='flex flex-row justify-between mb-4'>
                        <div className="prev-button">
                            <button onClick={onPrevQuestion}>
                                {currentQuestion === 1 ? "" : <PrevIcon />}
                            </button>
                        </div>
                        {isMobile &&  ( <div className="next-button">
                            <button onClick={onNextQuestion} className='block md:hidden'>
                                <NextIcon />
                            </button>
                        </div>)}
                       
                    </div>
                    <span className="pb-2">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black mb-4">{questionTitle}</h1>
                        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{questionText}</h3>
                    </span>
                    {!isMobile && (<div className="next-button">
                            <button onClick={onNextQuestion} className='hidden md:block'>
                                <NextIcon />
                            </button>
                        </div>)}
                    
                </div>
            </div>
            <div className="flex px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 justify-center">
                <button className={`${selectedButton === 1 ? 'bg-custom-gray ' : 'bg-custom-green border-custom-green'} text-left font-semibold text-xs py-4 px-2 border border-b-0 rounded-t-lg flex items-center md:text-base sm:w-5/12`} onClick={() => handleButtonClick(1)}><span className='mr-4'><MessageIcon/></span> {button1}</button>
                <button className={`${selectedButton === 2 ? 'bg-custom-apricot ' : 'bg-custom-green border-custom-green'} text-left font-semibold text-xs py-4 px-2 border border-b-0 rounded-t-lg flex items-center md:text-base sm:w-5/12`} onClick={() => handleButtonClick(2)}><span className='mr-4'><BookIcon /></span> {button2}</button>
                {/* <div className="flex absolute bottom-16 justify-between w-1/3 my-4 language-button">
                    <button onClick={() => setSelectedLanguage("alb")}><AlbIcon /></button>
                    <button onClick={() => setSelectedLanguage("mk")}><MkIcon /></button>
                    <button onClick={() => setSelectedLanguage("en")}><UkIcon /></button>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;
