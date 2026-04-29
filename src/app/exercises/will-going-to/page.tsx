'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, BookOpen } from 'lucide-react';
import GrammarExercise from '../../../components/GrammarExercise';

export default function ExercisePage() {
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
          <Link href="/exercises/rules">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <BookOpen size={18} />
              View Rules
            </motion.div>
          </Link>
          <Link href="/">
            <div className="glass" style={{ padding: '10px', borderRadius: '50%', color: 'var(--primary)' }}>
              <Home size={20} />
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section style={{ padding: '0 0 100px 0' }}>
        <GrammarExercise />
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', opacity: 0.5, fontSize: '12px' }}>
        &copy; 2026 NEXTGEN EDUCATIONAL PLATFORM
      </footer>
    </main>
  );
}
