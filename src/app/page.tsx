'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Stethoscope, 
  GraduationCap, 
  Code2, 
  Palette, 
  HardHat, 
  Plane, 
  Search, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Trophy,
  ExternalLink,
  ChevronRight,
  Globe,
  Briefcase,
  Utensils,
  FlaskConical,
  Paintbrush,
  Flame,
  Gavel,
  HeartPulse,
  BarChart3,
  UserCircle,
  Lightbulb
} from 'lucide-react';


const careers = [
  { name: 'DOCTOR', icon: <Stethoscope size={32} />, color: '#EF4444' },
  { name: 'TEACHER', icon: <GraduationCap size={32} />, color: '#3B82F6' },
  { name: 'PROGRAMMER', icon: <Code2 size={32} />, color: '#10B981' },
  { name: 'DESIGNER', icon: <Palette size={32} />, color: '#F59E0B' },
  { name: 'ENGINEER', icon: <HardHat size={32} />, color: '#6366F1' },
  { name: 'PILOT', icon: <Plane size={32} />, color: '#0F172A' },
  { name: 'CHEF', icon: <Utensils size={32} />, color: '#EC4899' },
  { name: 'SCIENTIST', icon: <FlaskConical size={32} />, color: '#8B5CF6' },
  { name: 'ARTIST', icon: <Paintbrush size={32} />, color: '#F43F5E' },
  { name: 'FIRE FIGHTER', icon: <Flame size={32} />, color: '#F97316' },
  { name: 'LAWYER', icon: <Gavel size={32} />, color: '#374151' },
  { name: 'NURSE', icon: <HeartPulse size={32} />, color: '#06B6D4' },
];

const steps = [
  { title: 'STEP 1', label: 'Choose a job', desc: 'Think about what job you would like to have in the future.' },
  { title: 'STEP 2', label: 'Find information', desc: 'Use the internet to answer questions about the job.' },
  { title: 'STEP 3', label: 'Write sentences', desc: 'Write 4-6 sentences using "will" or "going to".' },
  { title: 'STEP 4', label: 'Presentation', desc: 'Make a mini-presentation and show it to the class.' },
];

const values = [
  { icon: <Search />, label: 'EXPLORE' },
  { icon: <BookOpen />, label: 'LEARN' },
  { icon: <Target />, label: 'PLAN' },
  { icon: <TrendingUp />, label: 'GROW' },
  { icon: <Trophy />, label: 'SUCCEED' },
];

export default function LandingPage() {
  return (
    <main style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Header */}
      <header className="glass" style={{
        position: 'fixed',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 20px)',
        maxWidth: '1200px',
        zIndex: 100,
        padding: '10px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Next<span style={{ color: 'var(--primary-light)' }}>Gen</span>
        </div>
        <nav style={{ 
          display: 'flex', 
          gap: '12px', 
          alignItems: 'center',
          fontSize: '0.85rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="#intro" className="nav-link">Intro</a>
          <Link href="/exercises/rules" className="nav-link">Rules</Link>
          <Link href="/exercises/vocabulary/jobs" className="nav-link">Jobs Vocab</Link>
          <Link href="/exercises/skills" className="nav-link">Skills</Link>
          <Link href="/exercises/will-going-to" style={{ 
            background: 'var(--primary)', 
            color: 'white', 
            padding: '8px 18px', 
            borderRadius: '50px',
            fontWeight: '800',
            fontSize: '0.8rem',
            boxShadow: '0 4px 12px rgba(var(--primary-rgb), 0.3)'
          }}>
            Exercises
          </Link>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '20px' }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1, color: 'var(--primary)' }}>
            Next<span style={{ color: 'var(--accent)' }}>Gen</span>
          </h1>
          <div style={{ 
            background: 'var(--primary)', 
            color: 'white', 
            padding: '10px 30px', 
            borderRadius: '50px',
            display: 'inline-block',
            marginTop: '10px',
            fontWeight: 'bold',
            boxShadow: '0 10px 25px -5px rgba(30, 58, 138, 0.3)',
            fontSize: 'clamp(0.8rem, 2vw, 1.1rem)'
          }}>
            Explore today, succeed tomorrow.
          </div>
        </motion.div>

        {/* Floating Career Blocks */}
        <div className="career-grid">
          {careers.map((career, i) => (
            <motion.div
              key={career.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass career-card"
              style={{
                padding: '15px 25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                border: `2px solid ${career.color}`,
                color: career.color,
                minWidth: '200px',
                borderRadius: '20px',
                background: 'var(--glass-bg)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
              }}
            >
              {career.icon}
              <span style={{ fontWeight: '800', letterSpacing: '0.05em' }}>{career.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="values-container"
        >
          {values.map((v, i) => (
            <div key={v.label} className="value-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: 'var(--accent-dark)' }}>{v.icon}</div>
              <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em' }}>{v.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* WebQuest Intro */}
      <section id="intro" className="glass container-glass">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', color: 'var(--primary)' }}>
            WebQuest: <span className="premium-gradient">My Future Career</span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '750px' }}>
            There are many interesting jobs in the world. Each job is important and useful. 
            What do you want to be in the future? Let's find out more about different careers!
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section id="process">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>The Journey</h2>
          <p style={{ color: 'var(--text-muted)' }}>Follow these steps to explore your dream job</p>
        </div>
        
        <div className="responsive-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="glass step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                right: '-20px', 
                fontSize: '8rem', 
                fontWeight: '900', 
                opacity: 0.05,
                color: 'var(--primary)'
              }}>
                {i + 1}
              </div>
              <h4 style={{ color: 'var(--primary-light)', marginBottom: '10px' }}>{step.title}</h4>
              <h3 style={{ marginBottom: '15px' }}>{step.label}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section id="resources" style={{ position: 'relative', overflow: 'hidden', padding: '100px 20px' }}>
        {/* Background decorative element */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.03) 0%, transparent 70%)',
          zIndex: -1
        }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '24px',
              background: 'rgba(var(--primary-rgb), 0.08)',
              color: 'var(--primary)',
              marginBottom: '24px',
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)'
            }}>
              <Globe size={32} />
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px' }}>Useful <span className="premium-gradient">Resources</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', maxWidth: '600px', margin: '0 auto' }}>
              Explore these expert platforms to gather insights and data for your career exploration journey.
            </p>
          </motion.div>

          <div className="responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
            {[
              { name: 'Bureau of Labor Statistics', url: 'bls.gov/k12', icon: <BarChart3 size={24} />, desc: 'Official U.S. government data providing comprehensive information about hundreds of occupations.' },
              { name: 'Career One Stop', url: 'careeronestop.org', icon: <Briefcase size={24} />, desc: 'Your source for career exploration, training, and jobs. Sponsored by the U.S. Department of Labor.' },
              { name: 'Job Profiles', url: 'prospects.ac.uk', icon: <UserCircle size={24} />, desc: 'Detailed job profiles to help you find the right career path and understand daily responsibilities.' },
              { name: 'Skills & Qualities', url: 'skillsyouneed.com', icon: <Lightbulb size={24} />, desc: 'Identify and develop the essential soft skills required for professional success in any field.' }
            ].map((link, i) => (
              <motion.a 
                key={link.name} 
                href={`https://${link.url}`} 
                target="_blank" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass"
                style={{ 
                  padding: '32px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '20px',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  textDecoration: 'none',
                  color: 'inherit',
                  border: '1px solid var(--glass-border)',
                  height: '100%'
                }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 30px 60px -12px rgba(var(--primary-rgb), 0.15)',
                  borderColor: 'rgba(var(--primary-rgb), 0.2)',
                  background: 'white'
                }}
              >
                <div style={{ 
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px', 
                  background: 'rgba(var(--primary-rgb), 0.05)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '1.25rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {link.name}
                    <ExternalLink size={14} style={{ opacity: 0.4 }} />
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--primary-light)', fontWeight: '700', marginBottom: '12px', letterSpacing: '0.05em' }}>
                    {link.url.toUpperCase()}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {link.desc}
                  </p>
                </div>
                
                <div style={{ 
                  marginTop: 'auto', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '5px', 
                  color: 'var(--primary)', 
                  fontWeight: '700', 
                  fontSize: '0.85rem',
                  opacity: 0,
                  transform: 'translateX(-10px)',
                  transition: 'all 0.3s ease'
                }} className="visit-link">
                  Visit Website <ChevronRight size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Conclusion */}
      <footer style={{ 
        padding: '100px 20px', 
        textAlign: 'center', 
        background: 'var(--primary)', 
        color: 'white',
        position: 'relative',
        marginTop: '100px'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '20px' }}>Follow your dreams!</h2>
          <p style={{ opacity: 0.8, maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.6, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
            Remember: The future belongs to those who believe in the beauty of their dreams. 
            All jobs are important and you can do anything you want!
          </p>
          <div className="script-font" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>
            Your future. Your choice. Your success.
          </div>
        </motion.div>
        
        <div style={{ marginTop: '80px', opacity: 0.5, fontSize: '12px', letterSpacing: '0.2em' }}>
          &copy; 2026 NEXTGEN EDUCATIONAL PLATFORM
        </div>
      </footer>
    </main>
  );
}
