import React from 'react';
import MessageIcon from "../icons/MessageIcon";
import AlbIcon from "../icons/AlbIcon";
import MkIcon from "../icons/MkIcon";
import UkIcon from "../icons/UkIcon";
import NextIcon from '../icons/NextIcon';
import PrevIcon from '../icons/PrevIcon';

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

    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };

    
    return (
        <div className="w-full bg-custom-green relative pb-10" style={{height: "550px"}}>
            <div className="w-4/5 mx-auto text-left flex flex-col text-white py-10">
                <header className="flex justify-between">
                    <span className="">{title}</span>
                    <span className="">{currentQuestion}/{totalQuestions}</span>
                </header>
                <div className="pt-10 flex flex-col justify-between md:flex-row md:pl-12 md:items-center lg:pl-32">
                    <div className='flex flex-row justify-between mb-4'>
                    <button onClick={onPrevQuestion}>
                        {currentQuestion === 1 ? "" : <PrevIcon />}
                    </button>
                    <button onClick={onNextQuestion} className='block md:hidden'>
                       <NextIcon />
                    </button>
                    </div>
                    <span className="pb-2">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">{questionTitle}</h1>
                        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{questionText}</h3>
                    </span>
                    <button onClick={onNextQuestion} className='hidden md:block'>
                       <NextIcon />
                    </button>
                </div>
            </div>
            <div className="flex px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 justify-center">
                <button className={`bg-${selectedButton === 1 ? 'white' : 'custom-green border-custom-green'} font-semibold text-xs py-2 px-2 border rounded-t flex items-center md:text-base sm:w-5/12`} onClick={() => handleButtonClick(1)}><MessageIcon /> {button1}</button>
                <button className={`bg-${selectedButton === 2 ? 'white ' : 'custom-green border-custom-green'} font-semibold text-xs py-2 px-2 border rounded-t flex items-center md:text-base sm:w-5/12`} onClick={() => handleButtonClick(2)}><MessageIcon /> {button2}</button>
                <div className="flex absolute bottom-16 justify-between w-1/3 my-4">
                    <button onClick={() => setSelectedLanguage("alb")}><AlbIcon /></button>
                    <button onClick={() => setSelectedLanguage("mk")}><MkIcon /></button>
                    <button onClick={() => setSelectedLanguage("en")}><UkIcon /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
