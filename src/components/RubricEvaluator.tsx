'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { rubricData, RubricCategory, RubricLevel } from '../data/rubric';
import { Check, Trophy, Calculator, ChevronRight, AlertCircle } from 'lucide-react';

export default function RubricEvaluator() {
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const handleSelect = (categoryId: string, points: number) => {
    setSelections(prev => ({ ...prev, [categoryId]: points }));
  };

  const calculateTotal = () => {
    return Object.values(selections).reduce((acc, curr) => acc + curr, 0);
  };

  const isComplete = Object.keys(selections).length === rubricData.length;
  const totalPoints = calculateTotal();

  const getProgress = () => {
    return (Object.keys(selections).length / rubricData.length) * 100;
  };

  return (
    <div className="glass" style={{ padding: '40px', maxWidth: '1000px', margin: '40px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Project <span className="premium-gradient">Evaluator</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Assess your WebQuest against the official rubric criteria</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '5px' }}>TOTAL SCORE</div>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-light)' }}>
            {totalPoints}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>/100</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ height: '6px', background: 'var(--card-border)', borderRadius: '3px', marginBottom: '40px', overflow: 'hidden' }}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${getProgress()}%` }}
          style={{ height: '100%', background: 'var(--primary-light)' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
        {/* Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {rubricData.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(idx)}
              style={{
                textAlign: 'left',
                padding: '15px 20px',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: activeCategory === idx ? 'var(--primary-light)' : 'transparent',
                background: activeCategory === idx ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                color: activeCategory === idx ? 'var(--primary-light)' : 'var(--foreground)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
                fontWeight: activeCategory === idx ? '600' : '400'
              }}
            >
              <span style={{ fontSize: '0.9rem' }}>{cat.title}</span>
              {selections[cat.id] !== undefined && (
                <Check size={16} color="var(--primary-light)" />
              )}
            </button>
          ))}
        </div>

        {/* Level Selection */}
        <div style={{ minHeight: '400px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 style={{ marginBottom: '25px', fontSize: '1.5rem' }}>{rubricData[activeCategory].title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {rubricData[activeCategory].levels.map((level) => (
                  <div
                    key={level.label}
                    onClick={() => handleSelect(rubricData[activeCategory].id, level.points)}
                    style={{
                      padding: '20px',
                      borderRadius: '16px',
                      border: '2px solid',
                      borderColor: selections[rubricData[activeCategory].id] === level.points 
                        ? 'var(--primary-light)' 
                        : 'var(--card-border)',
                      background: selections[rubricData[activeCategory].id] === level.points 
                        ? 'rgba(59, 130, 246, 0.05)' 
                        : 'white',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ 
                        fontWeight: '700', 
                        color: selections[rubricData[activeCategory].id] === level.points ? 'var(--primary-light)' : 'var(--foreground)'
                      }}>
                        {level.label}
                      </span>
                      <span style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: '800',
                        color: selections[rubricData[activeCategory].id] === level.points ? 'var(--primary-light)' : 'var(--text-muted)'
                      }}>
                        {level.points} pts
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      {level.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
            <button 
              disabled={activeCategory === 0}
              onClick={() => setActiveCategory(prev => prev - 1)}
              style={{ 
                padding: '12px 24px', 
                borderRadius: '12px', 
                border: '1px solid var(--card-border)',
                background: 'white',
                cursor: activeCategory === 0 ? 'not-allowed' : 'pointer',
                opacity: activeCategory === 0 ? 0.5 : 1
              }}
            >
              Previous
            </button>
            <button 
              disabled={activeCategory === rubricData.length - 1}
              onClick={() => setActiveCategory(prev => prev + 1)}
              style={{ 
                padding: '12px 24px', 
                borderRadius: '12px', 
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                cursor: activeCategory === rubricData.length - 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                opacity: activeCategory === rubricData.length - 1 ? 0.5 : 1
              }}
            >
              Next Category <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            marginTop: '60px', 
            padding: '40px', 
            borderRadius: '24px', 
            background: 'var(--primary)', 
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Trophy size={48} style={{ marginBottom: '20px', color: 'var(--accent)' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Evaluation Complete!</h2>
          <p style={{ opacity: 0.9, marginBottom: '30px' }}>
            Your total score is {totalPoints} out of 100. 
            {totalPoints >= 90 ? " Exceptional work! You've mastered the WebQuest standards." : 
             totalPoints >= 80 ? " Great job! Your WebQuest is highly effective." :
             totalPoints >= 70 ? " Good effort. Your WebQuest meets the basic requirements." :
             " Keep working! Focus on the areas where you scored lower to improve."}
          </p>
          <button 
            onClick={() => {
              setSelections({});
              setActiveCategory(0);
            }}
            style={{
              padding: '15px 40px',
              borderRadius: '50px',
              background: 'var(--accent)',
              color: 'var(--primary)',
              fontWeight: '800',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Reset Evaluation
          </button>
        </motion.div>
      )}
    </div>
  );
}
