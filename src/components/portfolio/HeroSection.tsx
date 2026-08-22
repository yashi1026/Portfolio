'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a14] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main background */}
      <div className="absolute inset-0 bg-[#0a0a14]" />

      {/* Indigo glow - top left */}
      <div
        className="
          absolute
          -left-48
          -top-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#6366f1]/15
          blur-[150px]
        "
      />

      {/* Purple glow - top right */}
      <div
        className="
          absolute
          -right-40
          top-10
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#9333ea]/15
          blur-[150px]
        "
      />

      {/* Pink glow - bottom left */}
      <div
        className="
          absolute
          -bottom-48
          -left-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#ec4899]/10
          blur-[150px]
        "
      />

      {/* Cyan glow - bottom right */}
      <div
        className="
          absolute
          -bottom-40
          -right-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#06b6d4]/10
          blur-[150px]
        "
      />

      {/* Center glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#6366f1]/5
          blur-[130px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className={`
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          pb-20
          pt-28
          text-center
          transition-all
          duration-1000
          ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }
        `}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center">

          {/* =================================================
              STATUS
          ================================================== */}

          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/[0.06]
              px-4
              py-2
              text-sm
              font-medium
              text-emerald-400
              backdrop-blur-sm
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>

            Available for opportunities
          </div>

          {/* =================================================
              HELLO
          ================================================== */}

          <p
            className="
              mb-4
              text-lg
              font-medium
              text-gray-400
              sm:text-xl
            "
          >
            Hi, I&apos;m
          </p>

          {/* =================================================
              NAME
          ================================================== */}

          <h1
            className="
              text-6xl
              font-extrabold
              leading-none
              tracking-tight
              sm:text-7xl
              md:text-8xl
              lg:text-[96px]
            "
          >
            <span className="text-white">
              Yashi
            </span>{' '}

            <span
              className="
                bg-gradient-to-r
                from-[#6366f1]
                via-[#9333ea]
                to-[#ec4899]
                bg-clip-text
                text-transparent
              "
            >
              Singh
            </span>
          </h1>

          {/* =================================================
              ROLE
          ================================================== */}

          <h2
            className="
              mt-8
              text-2xl
              font-semibold
              text-gray-200
              sm:text-3xl
              md:text-4xl
            "
          >
            Computer Science Engineer
            <span className="mx-2 hidden text-gray-600 sm:inline">
              &
            </span>

            <span className="block text-[#6366f1] sm:inline">
              ML Developer
            </span>
          </h2>

          {/* =================================================
              EDUCATION
          ================================================== */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
              text-sm
              text-gray-400
              sm:text-base
            "
          >
            {/* Location icon */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#6366f1]"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>
              Babu Banarasi Das Northern India Institute of Technology
            </span>

            <span className="hidden text-gray-600 sm:inline">
              •
            </span>

            <span>
              B.Tech CSE, 2026
            </span>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-9
              max-w-3xl
              text-base
              leading-8
              text-gray-400
              sm:text-lg
              md:text-xl
            "
          >
            I build practical software and machine learning
            solutions to solve real-world problems.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mt-11
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >

            {/* View Projects */}

            <button
              onClick={() => scrollToSection('#projects')}
              className="
                group
                min-w-[195px]
                rounded-xl
                bg-gradient-to-r
                from-[#4f46e5]
                via-[#6366f1]
                to-[#9333ea]
                px-8
                py-4
                text-base
                font-semibold
                text-white
                shadow-lg
                shadow-indigo-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-indigo-500/30
                active:scale-95
              "
            >
              View Projects

              <span
                className="
                  ml-2
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>

            {/* Get In Touch */}

            <button
              onClick={() => scrollToSection('#contact')}
              className="
                min-w-[195px]
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-4
                text-base
                font-semibold
                text-gray-200
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#6366f1]/50
                hover:bg-[#6366f1]/10
                active:scale-95
              "
            >
              Get In Touch
            </button>
          </div>

          {/* =================================================
              SCROLL ARROW
          ================================================== */}

          <button
            onClick={() => scrollToSection('#about')}
            aria-label="Scroll to About section"
            className="
              mt-10
              text-gray-500
              transition-all
              duration-300
              hover:text-[#6366f1]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {/* =================================================
              SOCIAL ICONS
          ================================================== */}

          <div className="mt-6 flex items-center gap-5">

            {/* GitHub */}

            <a
              href="https://github.com/yashi1026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                rounded-lg
                border
                border-transparent
                p-2.5
                text-gray-500
                transition-all
                duration-300
                hover:border-white/10
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                rounded-lg
                border
                border-transparent
                p-2.5
                text-gray-500
                transition-all
                duration-300
                hover:border-white/10
                hover:bg-white/[0.04]
                hover:text-[#6366f1]
              "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Email */}

            <a
              href="mailto:yashisingh@email.com"
              aria-label="Email"
              className="
                rounded-lg
                border
                border-transparent
                p-2.5
                text-gray-500
                transition-all
                duration-300
                hover:border-white/10
                hover:bg-white/[0.04]
                hover:text-[#ec4899]
              "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-[#0a0a14]
          to-transparent
        "
      />
    </section>
  );
}
