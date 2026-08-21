'use client';
import { useEffect, useState } from 'react';

const CODE_LINES = [
  { text: 'import sklearn', color: '#a78bfa' },
  { text: 'import pandas as pd', color: '#a78bfa' },
  { text: 'import numpy as np', color: '#a78bfa' },
  { text: '', color: '' },
  { text: 'model = RandomForest()', color: '#34d399' },
  { text: 'model.fit(X_train, y)', color: '#60a5fa' },
  { text: 'score = model.score(X_test)', color: '#f9a8d4' },
  { text: 'print(f"Acc: {score:.2f}")', color: '#fbbf24' },
];

const FLOATING_TECHS = [
  { label: 'Python', color: '#3b82f6', delay: '0s', x: '10%', y: '20%' },
  { label: 'ML', color: '#9333ea', delay: '1s', x: '80%', y: '15%' },
  { label: 'Flask', color: '#10b981', delay: '2s', x: '85%', y: '70%' },
  { label: 'Pandas', color: '#f59e0b', delay: '0.5s', x: '5%', y: '75%' },
  { label: 'SQL', color: '#ec4899', delay: '1.5s', x: '50%', y: '85%' },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Computer Science Engineer & Machine Learning Developer';

  useEffect(() => {
    setVisible(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a14]"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Left: Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-indigo-300 text-sm font-medium">Available for opportunities</span>
            </div>

            <p className="text-lg text-gray-400 font-medium">Hi, I&apos;m Yashi Singh</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="gradient-text">{typedText}</span>
              <span className="inline-block w-0.5 h-12 bg-indigo-500 ml-1 animate-pulse" />
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              I build practical software and machine learning solutions to solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => handleScroll('#projects')}
                className="btn-primary text-center"
              >
                View Projects
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-5 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="text-gray-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
              <a
                href="mailto:yashisingh@email.com"
                aria-label="Email"
                className="text-gray-400 hover:text-pink-400 hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Code Visual */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* Floating tech badges */}
              {FLOATING_TECHS.map((tech) => (
                <div
                  key={tech.label}
                  className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${tech.color}30`,
                    borderColor: `${tech.color}50`,
                    left: tech.x,
                    top: tech.y,
                    animation: `float 6s ease-in-out ${tech.delay} infinite`,
                    color: tech.color,
                  }}
                >
                  {tech.label}
                </div>
              ))}

              {/* Main code card */}
              <div className="relative bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl shadow-indigo-500/10 overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center space-x-2 px-4 py-3 bg-[#161b22] border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-gray-500 font-mono">ml_model.py</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm space-y-1">
                  <div className="text-gray-500 text-xs mb-3"># Yashi Singh — ML Developer</div>
                  {CODE_LINES.map((line, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <span className="text-gray-600 text-xs w-4 text-right select-none">{i + 1}</span>
                      <span style={{ color: line.color || '#e2e8f0' }}>{line.text || '\u00A0'}</span>
                    </div>
                  ))}
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-gray-600 text-xs w-4 text-right select-none">9</span>
                    <span className="text-gray-300">{'>'}</span>
                    <span className="text-green-400">Acc: 0.95</span>
                    <span className="inline-block w-2 h-4 bg-indigo-500 animate-pulse" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: 'Projects', value: '3+', color: '#6366f1' },
                  { label: 'ML Models', value: '10+', color: '#9333ea' },
                  { label: 'Accuracy', value: '95%', color: '#ec4899' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300"
                  >
                    <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleScroll('#about')}
          className="text-gray-500 hover:text-indigo-400 transition-colors"
          aria-label="Scroll to about"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
