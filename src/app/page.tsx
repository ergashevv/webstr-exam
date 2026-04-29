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
  Briefcase
} from 'lucide-react';
import RubricEvaluator from '../components/RubricEvaluator';

const careers = [
  { name: 'DOCTOR', icon: <Stethoscope size={32} />, color: '#EF4444' },
  { name: 'TEACHER', icon: <GraduationCap size={32} />, color: '#3B82F6' },
  { name: 'PROGRAMMER', icon: <Code2 size={32} />, color: '#10B981' },
  { name: 'DESIGNER', icon: <Palette size={32} />, color: '#F59E0B' },
  { name: 'ENGINEER', icon: <HardHat size={32} />, color: '#6366F1' },
  { name: 'PILOT', icon: <Plane size={32} />, color: '#0F172A' },
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
    <main style={{ minHeight: '100vh', overflow: 'hidden' }}>
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
          <a href="#intro" style={{ fontWeight: '600' }}>Intro</a>
          <Link href="/exercises/rules" style={{ fontWeight: '600', color: 'var(--primary-light)' }}>Rules</Link>
          <Link href="/exercises/vocabulary" style={{ fontWeight: '600', color: 'var(--primary-light)' }}>Vocab</Link>
          <Link href="/exercises/skills" style={{ fontWeight: '600', color: 'var(--primary-light)' }}>Skills</Link>
          <Link href="/exercises/will-going-to" style={{ 
            background: 'var(--primary)', 
            color: 'white', 
            padding: '8px 15px', 
            borderRadius: '50px',
            fontWeight: 'bold'
          }}>
            Exercises
          </Link>
        </nav>
      </header>
      {/* Hero Section */}
      <section style={{ 
        height: '100vh', 
        width: '100%',
        maxWidth: 'none',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        padding: '0 20px',
        backgroundImage: 'var(--hero-overlay), url(/hero-bg.PNG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        margin: '0',
        zIndex: 1
      }}>
        <div className="hero-glow" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '20px' }}
        >
          <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1, color: 'var(--primary)' }}>
            Next<span style={{ color: 'var(--accent)' }}>Gen</span>
          </h1>
          <div style={{ 
            background: 'var(--primary)', 
            color: 'white', 
            padding: '10px 40px', 
            borderRadius: '50px',
            display: 'inline-block',
            marginTop: '-10px',
            fontWeight: 'bold',
            boxShadow: '0 10px 25px -5px rgba(30, 58, 138, 0.3)'
          }}>
            Explore today, succeed tomorrow.
          </div>
        </motion.div>

        {/* Floating Career Blocks */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '15px', 
          marginTop: '60px',
          maxWidth: '1200px',
          width: '100%',
          zIndex: 2
        }}>
          {careers.map((career, i) => (
            <motion.div
              key={career.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                border: `2px solid ${career.color}`,
                color: career.color,
              }}
            >
              {career.icon}
              <span style={{ fontWeight: 'bold' }}>{career.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {values.map((v, i) => (
              <div key={v.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: 'var(--accent-dark)' }}>{v.icon}</div>
                <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em' }}>{v.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* WebQuest Intro */}
      <section id="intro" className="glass" style={{ margin: '40px auto', maxWidth: '1000px', padding: '60px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--primary)' }}>
            WebQuest: <span className="premium-gradient">My Future Career</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '700px' }}>
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

      {/* Resources & Evaluation */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Globe className="premium-gradient" />
            <h2 style={{ fontSize: '2rem' }}>Resources</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { name: 'Bureau of Labor Statistics', url: 'bls.gov/k12' },
              { name: 'Career One Stop', url: 'careeronestop.org' },
              { name: 'Job Profiles', url: 'prospects.ac.uk' },
              { name: 'Skills & Qualities', url: 'skillsyouneed.com' }
            ].map((link) => (
              <a 
                key={link.name} 
                href={`https://${link.url}`} 
                target="_blank" 
                className="glass"
                style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <div style={{ fontWeight: 'bold' }}>{link.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{link.url}</div>
                </div>
                <ExternalLink size={18} color="var(--primary-light)" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ gridColumn: 'span 2' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', justifyContent: 'center' }}>
            <Trophy className="premium-gradient" size={32} />
            <h2 style={{ fontSize: '2.5rem' }}>Full Rubric Evaluation</h2>
          </div>
          <RubricEvaluator />
        </motion.div>
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
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Follow your dreams!</h2>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
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
