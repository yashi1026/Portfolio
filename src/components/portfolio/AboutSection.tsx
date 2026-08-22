'use client';

import { useEffect, useRef, useState } from 'react';

const HIGHLIGHTS = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
    label: 'B.Tech in CSE',
    sub: 'BBDNIIT, 2026',
    color: '#6366f1',
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: 'ML Projects',
    sub: 'Real-world solutions',
    color: '#9333ea',
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    ),
    label: 'Python & Java',
    sub: 'Core languages',
    color: '#ec4899',
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    label: 'Data Analysis',
    sub: 'EDA & Visualization',
    color: '#06b6d4',
  },
];

export default function AboutSection() {
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
      id="about"
      ref={ref}
      className="
        py-16
        bg-gradient-to-br
        from-white
        via-blue-50
        to-purple-50
        relative
        overflow-hidden
      "
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className={`
            section-header
            mb-8
            transition-all
            duration-700
            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
        >
          <h2 className="section-title text-gray-900">
            About Me
          </h2>

          <p className="section-subtitle text-gray-600">
            Passionate about building practical solutions through
            code and machine learning
          </p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* =================================================
              LEFT - PHOTO
          ================================================== */}

          <div
            className={`
              flex
              justify-center
              transition-all
              duration-700
              delay-200
              ${
                visible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }
            `}
          >
            <div className="relative">

              {/* Photo circle */}

              <div
                className="
                  w-72
                  h-72
                  bg-gradient-to-br
                  from-indigo-100
                  to-purple-100
                  rounded-full
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                  border-4
                  border-white
                  relative
                  overflow-hidden
                "
              >
                <img
                  src="/profile.jpg"
                  alt="Yashi Singh"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                />
              </div>

              {/* Decorative dots */}

              <div
                className="
                  absolute
                  -top-4
                  -right-4
                  w-8
                  h-8
                  bg-indigo-500
                  rounded-full
                  opacity-20
                "
              />

              <div
                className="
                  absolute
                  -bottom-4
                  -left-4
                  w-12
                  h-12
                  bg-purple-500
                  rounded-full
                  opacity-20
                "
              />

              <div
                className="
                  absolute
                  top-1/2
                  -right-8
                  w-5
                  h-5
                  bg-pink-500
                  rounded-full
                  opacity-30
                "
              />

            </div>
          </div>

          {/* =================================================
              RIGHT - ABOUT TEXT
          ================================================== */}

          <div
            className={`
              space-y-5
              transition-all
              duration-700
              delay-300
              ${
                visible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }
            `}
          >

            <h3 className="text-2xl font-bold text-gray-900">
              Computer Science Graduate & ML Enthusiast
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I&apos;m a disciplined and motivated Computer Science
              Engineering graduate with hands-on experience through
              academic projects and self-learning in web development,
              machine learning, and data analysis. I enjoy solving
              real-world problems, learning new technologies, and
              building practical applications.
            </p>

            <div
              className="
                inline-flex
                items-center
                space-x-2
                bg-indigo-50
                text-indigo-700
                px-4
                py-2
                rounded-full
                font-medium
                border
                border-indigo-100
              "
            >
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
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>

              <span className="text-sm">
                BBDNIIT — B.Tech CSE, 2026
              </span>
            </div>

          </div>
        </div>

        {/* =====================================================
            HIGHLIGHTS
        ====================================================== */}

        <div
          className={`
            mt-12
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
            transition-all
            duration-700
            delay-500
            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
        >
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="
                text-center
                p-6
                bg-white/70
                backdrop-blur-sm
                rounded-xl
                shadow-lg
                hover:shadow-xl
                group
                border
                border-white/50
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >

              {/* Icon */}

              <div
                className="
                  mb-3
                  flex
                  justify-center
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
                style={{
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              {/* Label */}

              <div
                className="
                  text-base
                  font-bold
                  text-gray-900
                  mb-1
                  group-hover:text-indigo-600
                  transition-colors
                "
              >
                {item.label}
              </div>

              {/* Subtitle */}

              <div className="text-gray-500 text-xs">
                {item.sub}
              </div>

              {/* Bottom hover line */}

              <div
                className="
                  w-0
                  h-1
                  mx-auto
                  mt-3
                  group-hover:w-10
                  transition-all
                  duration-500
                  rounded-full
                "
                style={{
                  background: `linear-gradient(to right, ${item.color}, #9333ea)`,
                }}
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
