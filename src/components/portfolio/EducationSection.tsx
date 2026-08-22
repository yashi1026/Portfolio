'use client';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  icon: string;
  color: string;
  gradient: string;
}

const EDUCATION: EducationItem[] = [
  {
    institution: 'Babu Banarasi Das Northern India Institute of Technology, Lucknow',
    degree: 'B.Tech — Computer Science and Engineering',
    period: 'September 2022 — June 2026',
    icon: '🎓',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    institution: 'Central Board of Secondary Education',
    degree: 'Senior Secondary Education (Class XII)',
    period: 'April 2020 — June 2021',
    icon: '📚',
    color: '#9333ea',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    institution: 'Indian Certificate of Secondary Education',
    degree: 'Secondary Education (Class X)',
    period: 'April 2018 — May 2019',
    icon: '🏫',
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-600',
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="section-header mb-8">
          <h2 className="section-title text-gray-900">
            Education
          </h2>

          <p className="section-subtitle text-gray-600">
            My academic journey and qualifications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30" />

          <div className="space-y-8">

            {EDUCATION.map((item) => (
              <div
                key={item.institution}
                className="relative pl-16"
              >

                {/* Timeline dot */}
                <div
                  className="absolute left-3 w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                    boxShadow: `0 0 0 4px ${item.color}20`,
                    top: '1.5rem',
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">

                  <div className="flex items-start space-x-4">

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-xl shadow-md flex-shrink-0`}
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">

                      <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">
                        {item.institution}
                      </h3>

                      <p
                        className="font-semibold text-sm mb-2"
                        style={{ color: item.color }}
                      >
                        {item.degree}
                      </p>

                      <div className="flex items-center space-x-2">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          />
                          <path d="M16 2v4" />
                          <path d="M8 2v4" />
                          <path d="M3 10h18" />
                        </svg>

                        <span className="text-gray-500 text-xs">
                          {item.period}
                        </span>

                      </div>
                    </div>
                  </div>

                  {/* Static bottom border */}
                  <div
                    className="w-full h-0.5 mt-4 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${item.color}, transparent)`,
                    }}
                  />

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
