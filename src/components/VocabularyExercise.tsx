'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Award, Link as LinkIcon } from 'lucide-react';
import { vocabularyExercises, VocabExercise } from '../data/vocabulary-exercises';
import styles from './VocabularyExercise.module.css';

const VocabularyExercise = () => {
  const [matchingAnswers, setMatchingAnswers] = useState<Record<string, string>>({}); // leftId -> rightValue
  const [fillAnswers, setFillAnswers] = useState<Record<string, string>>({}); // questionId -> value
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleMatchClick = (side: 'left' | 'right', value: string, id?: string) => {
    if (showResults) return;

    if (side === 'left') {
      setSelectedLeft(value);
    } else if (side === 'right' && selectedLeft) {
      setMatchingAnswers(prev => ({ ...prev, [selectedLeft]: value }));
      setSelectedLeft(null);
    }
  };

  const handleFillChange = (id: string, value: string) => {
    setFillAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    let score = 0;
    let total = 0;

    vocabularyExercises.forEach(ex => {
      if (ex.type === 'matching') {
        ex.pairs?.forEach(pair => {
          total++;
          if (matchingAnswers[pair.left] === pair.right) score++;
        });
      } else if (ex.type === 'fill-in-the-blank') {
        ex.questions?.forEach(q => {
          total++;
          if (fillAnswers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase()) score++;
        });
      }
    });

    return { score, total };
  };

  const { score, total } = calculateScore();
  const percentage = Math.round((score / total) * 100);

  if (showResults) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${styles.resultsCard} glass`}
      >
        <div className={styles.vocabHeader}>
          <motion.img 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            src="/image.jpeg" 
            alt="Success" 
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginBottom: '20px',
              border: '4px solid white'
            }} 
          />
          <h2 className="premium-gradient" style={{ fontSize: '2.5rem' }}>Vocabulary Mastered!</h2>
          <div className={styles.scoreDisplay}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.scoreTotal}>/ {total}</span>
          </div>
          <p style={{ fontWeight: 'bold', color: 'var(--primary-light)' }}>{percentage}% correct</p>
        </div>

        <div className={styles.reviewList} style={{ marginTop: '40px' }}>
          {vocabularyExercises.map(ex => (
            <div key={ex.id} className={styles.reviewSection}>
              <h4 style={{ margin: '20px 0 10px', textAlign: 'left' }}>{ex.title}</h4>
              {ex.type === 'matching' ? (
                ex.pairs?.map(pair => {
                  const userVal = matchingAnswers[pair.left];
                  const isCorrect = userVal === pair.right;
                  return (
                    <div key={pair.id} className={`${styles.reviewItem} ${isCorrect ? styles.correct : styles.incorrect}`}>
                      <div className={styles.reviewHeader}>
                        <span>{pair.left} → {userVal || '(no match)'}</span>
                        {isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                      </div>
                      {!isCorrect && <div>Correct: <span className={styles.ansVal}>{pair.right}</span></div>}
                    </div>
                  );
                })
              ) : (
                ex.questions?.map(q => {
                  const userVal = fillAnswers[q.id];
                  const isCorrect = userVal?.toLowerCase().trim() === q.answer.toLowerCase();
                  return (
                    <div key={q.id} className={`${styles.reviewItem} ${isCorrect ? styles.correct : styles.incorrect}`}>
                      <div className={styles.reviewHeader}>
                        <span>{q.question.replace('__', userVal || '____')}</span>
                        {isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                      </div>
                      {!isCorrect && <div>Correct: <span className={styles.ansVal}>{q.answer}</span></div>}
                    </div>
                  );
                })
              )}
            </div>
          ))}
        </div>

        <button className={styles.submitBtn} onClick={() => {
          setShowResults(false);
          setMatchingAnswers({});
          setFillAnswers({});
        }}>
          <RotateCcw size={20} style={{ marginRight: '10px' }} />
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div className={styles.vocabContainer}>
      <div className={styles.vocabHeader}>
        <h1 className="premium-gradient" style={{ fontSize: '3rem' }}>Job Vocabulary</h1>
        <p className={styles.sectionDesc}>Learn essential words about professions and workplaces.</p>
      </div>

      {vocabularyExercises.map((ex, exIndex) => (
        <motion.section 
          key={ex.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: exIndex * 0.1 }}
          className={styles.exerciseSection}
        >
          <h2 className={styles.sectionTitle}>{ex.title}</h2>
          <p className={styles.sectionDesc}>{ex.description}</p>

          {ex.type === 'matching' ? (
            <div className={styles.matchingGrid}>
              <div className={styles.column}>
                {ex.pairs?.map(pair => (
                  <div 
                    key={pair.left} 
                    className={`${styles.matchItem} ${selectedLeft === pair.left ? styles.selected : ''} ${matchingAnswers[pair.left] ? styles.paired : ''}`}
                    onClick={() => handleMatchClick('left', pair.left)}
                  >
                    {pair.left}
                    {matchingAnswers[pair.left] && <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>→ {matchingAnswers[pair.left]}</span>}
                  </div>
                ))}
              </div>
              <div className={styles.column}>
                {/* Shuffle right side for a real challenge */}
                {ex.pairs?.map(pair => pair.right).sort().map(rightVal => (
                  <div 
                    key={rightVal} 
                    className={`${styles.matchItem} ${Object.values(matchingAnswers).includes(rightVal) ? styles.paired : ''}`}
                    onClick={() => handleMatchClick('right', rightVal)}
                  >
                    {rightVal}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.fillList}>
              {ex.questions?.map(q => (
                <div key={q.id} className={`${styles.fillItem} glass`}>
                  <p className={styles.questionText}>{q.question}</p>
                  <input 
                    type="text" 
                    className={styles.vocabInput}
                    placeholder="Type profession..."
                    value={fillAnswers[q.id] || ''}
                    onChange={(e) => handleFillChange(q.id, e.target.value)}
                  />
                </div>
              ))}
            </div>
          )}
        </motion.section>
      ))}

      <button className={styles.submitBtn} onClick={() => setShowResults(true)}>
        Check Vocabulary
        <ChevronRight size={20} style={{ marginLeft: '10px' }} />
      </button>
    </div>
  );
};

export default VocabularyExercise;
