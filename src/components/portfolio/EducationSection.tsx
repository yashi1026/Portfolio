'use client';

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="section-header">
          <h2 className="section-title text-gray-900">
            Education
          </h2>

          <div className="section-divider" />

          <p className="section-subtitle text-gray-600">
            My academic journey and educational background
          </p>
        </div>

        {/* EDUCATION TIMELINE */}
        <div className="max-w-4xl mx-auto mt-12">

          {/* EDUCATION ITEM */}
          <div className="relative pl-10">

            {/* STATIC TIMELINE */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-purple-300" />

            {/* STATIC TIMELINE DOT */}
            <div className="absolute left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-white" />

            {/* EDUCATION CARD */}
            <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-lg">

              {/* TOP */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Bachelor of Technology
                  </h3>

                  <p className="text-purple-600 font-semibold text-sm mt-1">
                    Computer Science & Engineering
                  </p>
                </div>

                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full border border-purple-200 whitespace-nowrap">
                  2022 – 2026
                </span>
              </div>

              {/* INSTITUTE */}
              <p className="text-gray-700 font-medium mb-3">
                Pranveer Singh Institute of Technology
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Pursuing a Bachelor of Technology in Computer Science &
                Engineering with a focus on programming, machine learning,
                data science, software development, and core computer science
                concepts.
              </p>

              {/* SUBJECTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming',
                  'Database Management Systems',
                  'Operating Systems',
                  'Computer Networks',
                  'Machine Learning',
                ].map((subject) => (
                  <div
                    key={subject}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />

                    <span>{subject}</span>
                  </div>
                ))}
              </div>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'Java',
                  'C',
                  'Machine Learning',
                  'SQL',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full border border-purple-100 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
