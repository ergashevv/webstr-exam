'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, BookOpen, Lightbulb, Info } from 'lucide-react';

export default function RulesPage() {
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
        <Link href="/exercises/will-going-to">
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
            Back to Exercises
          </motion.button>
        </Link>
        
        <Link href="/">
          <div className="glass" style={{ padding: '10px', borderRadius: '50%', color: 'var(--primary)' }}>
            <Home size={20} />
          </div>
        </Link>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="premium-gradient" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Grammar Rules</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Learn when to use "Will" and "Be Going To" effectively.</p>
        </header>

        {/* Video Section */}
        <section className="glass" style={{ padding: '20px', marginBottom: '60px', overflow: 'hidden' }}>
          <div style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
            height: 0, 
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
          }}>
            <iframe 
              src="https://www.youtube.com/embed/IWAS5aszaGo" 
              title="Will vs Going To: Understanding the Difference | EasyTeaching" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Quick Reference Guide */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass"
            style={{ padding: '40px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary)' }}>
              <Lightbulb size={24} />
              <h3 style={{ fontSize: '1.5rem' }}>Use WILL for:</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', gap: '10px' }}>
                <div style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>•</div>
                <div><strong>Spontaneous Decisions:</strong> Decisions made at the moment of speaking.</div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <div style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>•</div>
                <div><strong>Predictions:</strong> Based on what we think or believe.</div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <div style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>•</div>
                <div><strong>Promises & Offers:</strong> "I will help you."</div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass"
            style={{ padding: '40px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary-light)' }}>
              <BookOpen size={24} />
              <h3 style={{ fontSize: '1.5rem' }}>Use GOING TO for:</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', gap: '10px' }}>
                <div style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>•</div>
                <div><strong>Prior Plans:</strong> Decisions made before the moment of speaking.</div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <div style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>•</div>
                <div><strong>Present Evidence:</strong> Predictions based on what we can see right now.</div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <div style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>•</div>
                <div><strong>Intentions:</strong> Things we intend to do in the future.</div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', paddingBottom: '100px' }}>
          <Link href="/exercises/will-going-to">
            <button style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '18px 45px',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 15px 30px -10px rgba(var(--primary-rgb), 0.5)',
              transition: 'all 0.3s ease'
            }}>
              Ready to Practice?
            </button>
          </Link>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '40px', opacity: 0.5, fontSize: '12px' }}>
        &copy; 2026 NEXTGEN EDUCATIONAL PLATFORM
      </footer>
    </main>
  );
}
