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
    title: 'Tools & Deployment',
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
    title: 'Database',
    color: '#f97316',
    gradient: 'from-orange-500 to-red-600',
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
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: ['SQL', 'MySQL', 'Database Management'],
  },

  {
    title: 'Core CS',
    color: '#eab308',
    gradient: 'from-yellow-500 to-orange-600',
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
      'Data Structures & Algorithms',
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
      className="py-12 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden"
    >
      {/* STATIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="section-header">

          <h2 className="section-title text-white">
            Technical Skills
          </h2>

          {/* Horizontal divider removed */}

          <p className="section-subtitle text-gray-400">
            A comprehensive set of technologies and tools I work with
          </p>

        </div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">

          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="
                relative
                bg-white/5
                backdrop-blur-lg
                rounded-2xl
                p-5
                border
                border-white/10
              "
            >

              {/* STATIC ICON */}
              <div className="flex justify-center mb-4">

                <div
                  className={`
                    w-14
                    h-14
                    bg-gradient-to-br
                    ${group.gradient}
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                  `}
                >
                  {group.icon}
                </div>

              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-white text-center mb-4">
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 justify-center">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      px-3
                      py-1.5
                      rounded-full
                      text-sm
                      font-medium
                      text-gray-300
                      bg-white/5
                      border
                      border-white/10
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
