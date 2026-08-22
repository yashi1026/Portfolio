'use client';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="section-header">
          <h2 className="section-title text-white">
            Experience & Training
          </h2>

          <div className="section-divider" />

          <p className="section-subtitle text-gray-400">
            Professional training and certifications
          </p>
        </div>

        {/* TRAINING & CERTIFICATION */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {/* =========================
              TRAINING
          ========================== */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-6 flex items-center space-x-2">
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

              <span>Training</span>
            </h3>

            <div className="relative pl-10">

              {/* STATIC TIMELINE */}
              <div
                className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-indigo-500/40"
              />

              {/* STATIC TIMELINE DOT */}
              <div
                className="absolute left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900"
              />

              {/* STATIC CARD */}
              <div className="bg-slate-800/80 border border-indigo-500/20 p-6 rounded-2xl">

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Machine Learning Training
                    </h4>

                    <p className="text-indigo-400 font-semibold text-sm mt-1">
                      ShapeMySkills by Ducat
                    </p>
                  </div>

                  <span className="bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-500/30 whitespace-nowrap ml-3">
                    Completed
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  Completed comprehensive training in Machine Learning with
                  practical experience in EDA, data preprocessing, feature
                  engineering, visualization, model development, and
                  performance evaluation.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Python',
                    'Pandas',
                    'NumPy',
                    'Matplotlib',
                    'Scikit-learn',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full border border-indigo-500/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* =========================
              CERTIFICATION
          ========================== */}
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-6 flex items-center space-x-2">
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
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
              </svg>

              <span>Certification</span>
            </h3>

            <div className="relative pl-10">

              {/* STATIC TIMELINE */}
              <div
                className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-purple-500/40"
              />

              {/* STATIC TIMELINE DOT */}
              <div
                className="absolute left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"
              />

              {/* STATIC CARD */}
              <div className="bg-slate-800/80 border border-purple-500/20 p-6 rounded-2xl">

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Core Java Training
                    </h4>

                    <p className="text-purple-400 font-semibold text-sm mt-1">
                      Embrizon Technologies
                    </p>
                  </div>

                  <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30 whitespace-nowrap ml-3">
                    Certified
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  Completed Core Java training covering object-oriented
                  programming, Java fundamentals, and practical
                  problem-solving skills.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    'Object-Oriented Programming',
                    'Java Programming',
                    'Arrays & Loops',
                    'Functions',
                    'Exception Handling',
                    'Problem Solving',
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center space-x-2 text-xs text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />

                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Java',
                    'OOP',
                    'Problem Solving',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
