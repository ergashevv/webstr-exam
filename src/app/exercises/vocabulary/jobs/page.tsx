'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, BookOpen, Briefcase } from 'lucide-react';
import VocabularyExercise from '../../../../components/VocabularyExercise';
import { vocabularyExercises } from '../../../../data/vocabulary-exercises';

export default function JobsVocabularyPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="hero-glow" />
      
      {/* Navigation Header */}
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '20px 0'
      }}>
        <Link href="/">
          <motion.button
            whileHover={{ x: -5 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'none', 
              border: 'none', 
              color: 'var(--primary)', 
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={20} />
            Back to Home
          </motion.button>
        </Link>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/exercises/vocabulary">
            <div style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <BookOpen size={18} />
              General Vocab
            </div>
          </Link>
          <Link href="/">
            <div className="glass" style={{ padding: '10px', borderRadius: '50%', color: 'var(--primary)' }}>
              <Home size={20} />
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section style={{ padding: '0 0 100px 0', maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            background: 'rgba(var(--primary-rgb), 0.1)', 
            padding: '8px 20px', 
            borderRadius: '50px',
            color: 'var(--primary)',
            fontWeight: '800',
            fontSize: '0.8rem',
            marginBottom: '20px'
          }}>
            <Briefcase size={16} />
            SPECIAL WEBQUEST LESSON
          </div>
          <h1 className="premium-gradient" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Jobs & Professions</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 40px' }}>
            Learn essential vocabulary about different careers. Watch the video below and then test your knowledge!
          </p>
          
          <div style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden', 
            maxWidth: '100%', 
            background: '#000', 
            borderRadius: '32px', 
            boxShadow: '0 30px 60px -12px rgba(0,0,0,0.3)',
            border: '8px solid var(--glass-bg)'
          }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/R69YKFmlcnA" 
              title="Jobs (v1)- Kids vocabulary - Let's learn about jobs - Learn English for kids" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, var(--primary-light), transparent)', margin: '80px 0', opacity: 0.3 }} />

        <VocabularyExercise exercises={vocabularyExercises} />
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', opacity: 0.5, fontSize: '12px' }}>
        &copy; 2026 NEXTGEN EDUCATIONAL PLATFORM
      </footer>
    </main>
  );
}
