'use client';

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-30" />

        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-30" />
      </div>

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

        {/* EDUCATION */}
        <div className="relative mt-12">

          {/* STATIC TIMELINE */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200" />

          <div className="space-y-10">

            {/* B.TECH */}
            <div className="relative pl-12">

              {/* STATIC DOT */}
              <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              </div>

              {/* STATIC CARD */}
              <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-lg">

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">

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

                <p className="text-gray-700 font-medium mb-3">
                  Pranveer Singh Institute of Technology
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Pursuing a Bachelor of Technology in Computer Science &
                  Engineering with a focus on programming, machine learning,
                  data science, software development, and core computer
                  science concepts.
                </p>

                <div className="grid sm:grid-cols-2 gap-2">

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

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
