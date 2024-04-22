import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Accordion from './components/accordion/Accordion';
import jsonData from './data.json';
import OurSolution from './components/ourSolution/OurSolution';

type Language = "en" | "mk" | "alb";

interface Question {
  title: string;
  question: string;
  answer: string;
  vmro: string;
  sdsm: string;
  dui: string;
  znam: string;
  levica: string;
  alijansa: string;
  grom: string;
}

function App() {
  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("mk");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pageTranslation, setPageTranslation] = useState<any>();

  useEffect(() => {
    const data: any = jsonData.data[selectedLanguage];
    setQuestions(data);
    const translation: any = jsonData.pageTranslate[selectedLanguage];
    setPageTranslation(translation);
  }, [selectedLanguage]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % questions.length);
  };

  const currentQuestionNumber = currentQuestionIndex + 1;
  const totalQuestions = questions.length;

  return (
    <div className="App">
      {questions.length > 0 && (
        <Banner
          setSelectedButton={setSelectedButton}
          selectedButton={selectedButton}
          setSelectedLanguage={setSelectedLanguage}
          questionTitle={questions[currentQuestionIndex].title} // Pass current question title to the banner
          questionText={questions[currentQuestionIndex].question} // Pass current question text to the banner
          onNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestionNumber}
          totalQuestions={totalQuestions}
          title={pageTranslation.title}
          button1={pageTranslation.button1}
          button2={pageTranslation.button2}
        />
      )}
      
      {selectedButton === 1 ? (
        questions.length > 0 && (
          <Accordion
            vmro={questions[currentQuestionIndex].vmro}
            sdsm={questions[currentQuestionIndex].sdsm}
            dui={questions[currentQuestionIndex].dui}
            znam={questions[currentQuestionIndex].znam}
            levica={questions[currentQuestionIndex].levica}
            alijansa={questions[currentQuestionIndex].alijansa}
            grom={questions[currentQuestionIndex].grom}
          />
        )
      ) : (
        <OurSolution text={questions[currentQuestionIndex].answer}/>
      )}
    </div>
  );
}

export default App;
