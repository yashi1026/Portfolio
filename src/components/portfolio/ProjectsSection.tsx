'use client';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  accentColor: string;
  icon: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI Powered Diagnosis & Disease Prediction System',
    category: 'Machine Learning',
    description:
      'Developed a multi-disease prediction system using Machine Learning algorithms with chatbot functionality for basic healthcare assistance and user guidance.',
    tech: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS', 'MySQL'],
    features: [
      'ML prediction models',
      'Flask backend',
      'Data preprocessing',
      'Model training & evaluation',
      'Prediction reports',
      'Data visualization',
      'Authentication',
      'Admin & User dashboards',
    ],
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    accentColor: '#6366f1',
    icon: '🏥',
  },
  {
    id: 2,
    title: 'Resume vs Job Matcher',
    category: 'NLP / ML',
    description:
      'An AI-powered application that analyzes resume compatibility with job descriptions using Machine Learning and NLP techniques.',
    tech: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'NLP',
    ],
    features: [
      'Multiple PDF resume uploads',
      'Resume parsing',
      'Text preprocessing',
      'Feature extraction',
      'Resume-job matching',
      'Candidate insights',
      'Interactive visualizations',
      'Match score representation',
    ],
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    accentColor: '#06b6d4',
    icon: '📄',
  },
  {
    id: 3,
    title: 'Loan Prediction System',
    category: 'Machine Learning',
    description:
      'Developed a machine learning system to predict loan approval status using applicant financial and demographic data.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    features: [
      '95% prediction accuracy',
      'Feature selection',
      'Hyperparameter tuning',
      'Model evaluation',
      'Accuracy & Precision',
      'Recall & F1 Score',
      'Confusion Matrix',
      'End-to-end ML pipeline',
    ],
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    accentColor: '#10b981',
    icon: '💰',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="pt-16 pb-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />

        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="section-header mb-6">
          <h2 className="section-title text-gray-900">
            Featured Projects
          </h2>

          {/* Removed section divider */}

          <p className="section-subtitle text-gray-600">
            A showcase of my machine learning and software development work
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50"
            >
              {/* Project Image / Header */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {/* Static background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />

                {/* Project Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">
                    {project.icon}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-1.5 text-xs text-gray-500"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            background: project.accentColor,
                          }}
                        />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-2.5 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-xs rounded-full border border-indigo-100 font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 pt-4 border-t border-gray-100">

                  {/* Live Demo */}
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-1.5 text-indigo-600 font-medium text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>

                    <span>Live Demo</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-1.5 text-gray-600 font-medium text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 6 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>

                    <span>GitHub</span>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
