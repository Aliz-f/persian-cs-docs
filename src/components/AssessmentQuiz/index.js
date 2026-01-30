import React, { useState } from 'react';
import styles from './styles.module.css';

// Note the curly braces { quizData } to destructure the prop
export default function AssessmentQuiz({ quizData }) {
    // Safety check: if no data is passed, don't render or render a message
    if (!quizData || quizData.length === 0) {
        return <div className={styles.quizContainer}>داده‌های آزمون یافت نشد.</div>;
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState({});

    const handleOptionClick = (optionKey) => {
        setSelectedOption(optionKey);
    };

    const handleNextClick = () => {
        const isCorrect = selectedOption === quizData[currentQuestion].correct;
        if (isCorrect) {
            setScore(score + 1);
        }

        setAnswers({
            ...answers,
            [currentQuestion]: {
                selected: selectedOption,
                isCorrect: isCorrect
            }
        });

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
        setSelectedOption(null);
        setAnswers({});
    };

    return (
        <div className={styles.quizContainer} dir="rtl">
            {showScore ? (
                <div className={styles.scoreSection}>
                    <h2>نتایج آزمون ارزیابی</h2>
                    <div className={styles.scoreCircle}>
                        <span>{score}</span> / {quizData.length}
                    </div>
                    <p className={styles.scoreText}>
                        {score / quizData.length >= 0.85
                            ? "تبریک! شما آماده رفتن به مرحله بعد هستید."
                            : "نیاز به مطالعه بیشتر دارید. لطفاً پاسخ‌های تشریحی زیر را بررسی کنید."}
                    </p>

                    <div className={styles.reviewSection}>
                        <h3>بررسی پاسخ‌ها:</h3>
                        {quizData.map((item, index) => (
                            <div key={item.id} className={`${styles.reviewCard} ${answers[index]?.isCorrect ? styles.correct : styles.incorrect}`}>
                                <h4 className={styles.questionTitle}>{index + 1}. {item.question}</h4>
                                <p><strong>پاسخ شما:</strong> {item.options.find(o => o.key === answers[index]?.selected)?.text || "پاسخ ندادید"}</p>
                                {!answers[index]?.isCorrect && (
                                    <p className={styles.correctAnswerText}><strong>پاسخ صحیح:</strong> {item.options.find(o => o.key === item.correct)?.text}</p>
                                )}
                                <div className={styles.explanation}>
                                    <strong>توضیح:</strong> {item.explanation}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={restartQuiz} className={styles.btnRestart}>شروع مجدد</button>
                </div>
            ) : (
                <div className={styles.questionSection}>
                    <div className={styles.quizHeader}>
                        <span>سوال {currentQuestion + 1} از {quizData.length}</span>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{width: `${((currentQuestion + 1) / quizData.length) * 100}%`}}
                            ></div>
                        </div>
                    </div>

                    <h3 className={styles.questionText}>{quizData[currentQuestion].question}</h3>

                    <div className={styles.optionsContainer}>
                        {quizData[currentQuestion].options.map((option) => (
                            <button
                                key={option.key}
                                onClick={() => handleOptionClick(option.key)}
                                className={`${styles.optionBtn} ${selectedOption === option.key ? styles.selected : ''}`}
                            >
                                <span className={styles.optionKey}>{option.key}</span>
                                {option.text}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNextClick}
                        disabled={!selectedOption}
                        className={styles.btnNext}
                    >
                        {currentQuestion === quizData.length - 1 ? 'پایان آزمون' : 'سوال بعدی'}
                    </button>
                </div>
            )}
        </div>
    );
};