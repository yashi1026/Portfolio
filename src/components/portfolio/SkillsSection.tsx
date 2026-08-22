'use client';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Programming',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-purple-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
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
    skills: ['Python', 'Java', 'C'],
  },

  {
    title: 'Web Development',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-blue-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    skills: ['HTML', 'CSS', 'Flask', 'Streamlit'],
  },

  {
    title: 'ML & Data Science',
    color: '#9333ea',
    gradient: 'from-purple-500 to-pink-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
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
    skills: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Regression',
      'Classification',
      'KNN',
      'Feature Engineering',
      'EDA',
      'Model Evaluation',
      'NLP',
    ],
  },

  {
    title: 'Tools',
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Jupyter Notebook',
      'SQL',
      'Anaconda',
      'Excel',
    ],
  },

  {
    title: 'Core CS',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    skills: [
      'DSA',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden"
    >
      {/* Static background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="section-header">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-4">
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
              className="text-yellow-400"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>

            <span className="text-white font-medium text-sm">
              Skills & Expertise
            </span>
          </div>

          <h2 className="section-title text-white">
            Technical Toolkit
          </h2>

          <div className="section-divider" />

          <p className="section-subtitle text-gray-400">
            A comprehensive set of technologies and tools I work with
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10"
            >

              {/* Static hover-free background */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${group.color}08, transparent, ${group.color}04)`,
                }}
              />

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${group.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                  {group.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white text-center mb-4 relative z-10">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center relative z-10">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Static corner dots */}
              <div
                className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-60"
                style={{ background: group.color }}
              />

              <div
                className="absolute bottom-3 left-3 w-3 h-3 rounded-full opacity-30"
                style={{ background: group.color }}
              />
            </div>
          ))}

        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">

          {[
            {
              icon: '🚀',
              value: '3+',
              label: 'ML Projects',
              color: '#6366f1',
            },
            {
              icon: '⚡',
              value: '5+',
              label: 'Skill Categories',
              color: '#9333ea',
            },
            {
              icon: '🎯',
              value: '95%',
              label: 'Best Accuracy',
              color: '#ec4899',
            },
            {
              icon: '💡',
              value: '2026',
              label: 'Graduation',
              color: '#06b6d4',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-2 shadow-lg text-xl"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}40, ${stat.color}20)`,
                  border: `1px solid ${stat.color}30`,
                }}
              >
                {stat.icon}
              </div>

              <div
                className="text-2xl font-bold text-white mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>

              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
