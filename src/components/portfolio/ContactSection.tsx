'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`section-header mb-10 transition-all duration-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title text-gray-900">
            Get In Touch
          </h2>

          <p className="section-subtitle text-gray-600">
            Let&apos;s connect and discuss opportunities, projects, or ideas
          </p>
        </div>

        {/* Contact Content */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >

          {/* Let's Connect */}
          <div
            className="
              bg-white/80
              backdrop-blur-sm
              rounded-2xl
              shadow-lg
              border
              border-white/60
              p-8
              text-center
            "
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Let&apos;s Connect
            </h3>

            <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              I&apos;m always open to connecting with people, discussing
              interesting projects, and exploring new opportunities.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center items-center gap-5">

              {/* GitHub */}
              <a
                href="https://github.com/yashi1026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  text-gray-700
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-gray-900
                  hover:bg-gray-900
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 6 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>

                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  text-gray-700
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:bg-blue-500
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>

                <span>LinkedIn</span>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  text-gray-700
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500
                  hover:bg-orange-500
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 22h6" />
                  <path d="M12 2v20" />
                  <path d="m17 6-5-4-5 4" />
                  <path d="M5 10h14" />
                </svg>

                <span>LeetCode</span>
              </a>

            </div>

            {/* Email */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="mailto:yashisingh@email.com"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-indigo-600
                  font-medium
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>

                yashisingh@email.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
