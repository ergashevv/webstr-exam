'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { Exercise, willGoingToExercises } from '../data/grammar-exercises';
import styles from './GrammarExercise.module.css';

const GrammarExercise = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    let score = 0;
    willGoingToExercises.forEach(ex => {
      const userAnswer = (answers[ex.id] || '').trim().toLowerCase();
      const correctAnswer = typeof ex.correctAnswer === 'string' 
        ? ex.correctAnswer.toLowerCase() 
        : ex.correctAnswer.map(a => a.toLowerCase());
      
      if (Array.isArray(correctAnswer)) {
        if (correctAnswer.includes(userAnswer)) score++;
      } else {
        if (userAnswer === correctAnswer) score++;
      }
    });
    return score;
  };

  const totalQuestions = willGoingToExercises.length;
  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);

  const renderQuestion = (ex: Exercise) => {
    switch (ex.type) {
      case 'multiple-choice':
        return (
          <div className={styles.optionsGrid}>
            {ex.options?.map(option => (
              <button
                key={option}
                className={`${styles.optionBtn} ${answers[ex.id] === option ? styles.selected : ''}`}
                onClick={() => handleAnswerChange(ex.id, option)}
                disabled={isSubmitted}
              >
                {option}
              </button>
            ))}
          </div>
        );
      case 'fill-in-the-blank':
        return (
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Type your answer..."
              value={answers[ex.id] || ''}
              onChange={(e) => handleAnswerChange(ex.id, e.target.value)}
              disabled={isSubmitted}
              className={styles.grammarInput}
            />
          </div>
        );
      case 'sentence-construction':
        return (
          <div className={styles.inputContainer}>
            <textarea
              placeholder="Write the full sentence..."
              value={answers[ex.id] || ''}
              onChange={(e) => handleAnswerChange(ex.id, e.target.value)}
              disabled={isSubmitted}
              className={styles.grammarTextarea}
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (showResults) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${styles.resultsCard} glass`}
      >
        <div className={styles.resultsHeader}>
          <motion.img 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            src="/image.jpeg" 
            alt="Success" 
            style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginBottom: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              border: '4px solid white'
            }} 
          />
          <h2>{percentage >= 50 ? 'Exercise Complete!' : 'Try Again!'}</h2>
          <div className={styles.scoreDisplay}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.scoreTotal}>/ {totalQuestions}</span>
          </div>
          <div className={styles.progressBarContainer}>
            <motion.div 
              className={styles.progressBarFill}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ backgroundColor: percentage >= 50 ? 'var(--primary-light)' : '#ef4444' }}
            />
          </div>
          <p className={styles.percentageText} style={{ color: percentage >= 50 ? 'var(--primary-light)' : '#ef4444' }}>
            {percentage}% correct
          </p>
        </div>

        <div className={styles.resultsReview}>
          {willGoingToExercises.map((ex, index) => {
            const userAnswer = (answers[ex.id] || '').trim().toLowerCase();
            const isCorrect = typeof ex.correctAnswer === 'string' 
              ? userAnswer === ex.correctAnswer.toLowerCase()
              : ex.correctAnswer.map(a => a.toLowerCase()).includes(userAnswer);

            return (
              <div key={ex.id} className={`${styles.reviewItem} ${isCorrect ? styles.correct : styles.incorrect}`}>
                <div className={styles.reviewQuestion}>
                  <span className={styles.qNum}>{index + 1}.</span>
                  <p>{ex.question}</p>
                </div>
                <div className={styles.reviewAnswers}>
                  <div className={styles.userAns}>
                    <span>Your answer:</span>
                    <span className={styles.ansVal}>{answers[ex.id] || '(empty)'}</span>
                    {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                  </div>
                  {!isCorrect && (
                    <div className={styles.correctAns}>
                      <span>Correct answer:</span>
                      <span className={styles.ansVal}>{ex.correctAnswer}</span>
                    </div>
                  )}
                  {ex.explanation && <p className={styles.explanation}>{ex.explanation}</p>}
                </div>
              </div>
            );
          })}
        </div>

        <button 
          className={styles.restartBtn}
          onClick={() => {
            setAnswers({});
            setShowResults(false);
            setIsSubmitted(false);
          }}
        >
          <RotateCcw size={20} />
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div className={styles.grammarContainer}>
      <div className={styles.grammarHeader}>
        <h2 className="premium-gradient">Grammar Practice</h2>
        <p>Master the future tenses and job-related verbs with these interactive exercises.</p>
      </div>

      <div className={styles.exerciseList}>
        {willGoingToExercises.map((ex, index) => (
          <motion.div 
            key={ex.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${styles.exerciseCard} glass`}
          >
            <div className={styles.exerciseType}>
              <span className={styles.typeBadge}>{ex.type.replace(/-/g, ' ')}</span>
              <span className={styles.questionCount}>{index + 1} of {totalQuestions}</span>
            </div>
            <h3 className={styles.questionText}>{ex.question}</h3>
            <div className={styles.questionContent}>
              {renderQuestion(ex)}
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.submitSection}>
        <button 
          className={styles.submitBtn}
          onClick={() => setShowResults(true)}
        >
          Check My Answers
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default GrammarExercise;
